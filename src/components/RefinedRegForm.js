import React, {useState} from "react";
import axios from "axios";
import PersonalInformation from "./Registration/PersonalInformation";
import ContactDetails from "./Registration/ContactDetails";
import AthleteInformation from "./Registration/AthleteInformation";
import AcademicInformation from "./Registration/AcademicInformation";
import EstablishContact from "./Registration/EstablishContact";
import {useNavigate} from "react-router-dom";

const RefinedRegForm = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    firtsname: "",
    lastname: "",
    county: "",
    city: "",
    email: "",
    phoneNumber: "",
    events: "",
    graduationYear: "",
    certificate: "",
    repeated: "",
    consultationMeans: "",
    communicationMeans: "",
    contactLanguage: "",
  });
  const FormTitles = [
    "Personal Information",
    "Contact Details",
    "Athlete Information",
    "Academic Information",
    "Establishing Contact",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <PersonalInformation formData={formData} setFormData={setFormData} />
      );
    } else if (page === 1) {
      return <ContactDetails formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return (
        <AthleteInformation formData={formData} setFormData={setFormData} />
      );
    } else if (page === 3) {
      return (
        <AcademicInformation formData={formData} setFormData={setFormData} />
      );
    } else if (page === 4) {
      return <EstablishContact formData={formData} setFormData={setFormData} />;
    }
  };
  const submitFormData = async (formData) => {
    try {
      axios.post("http://127.0.0.1:8000/api/profiles/profile/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          // Authorization: `Token ${localStorage.getItem("token")}`,
        },
      });
      alert("Your registration information has been saved successfully!");
      navigate("/profiles");
    } catch (error) {
      console.error(error);
      alert(
        "Failed to save your registration information. Please try again later."
      );
    }
  };

  return (
    <div>
      {/* <div>Porgress bar</div> */}
      <div className="form-container">
        <div className="mr-auto">
          <div className="font-semibold text-2xl p-4 text-center">
            {FormTitles[page]}
          </div>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="flex justify-center space-x-80">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currentPage) => currentPage - 1);
            }}
            className={`flex self-start items-center gap-1 py-2 px-4 rounded-md ${
              page === 0
                ? "hidden"
                : "bg-green-500 hover:bg-green-600 hover:text-white text-white font-medium"
            }`}
            style={{visibility: page === 0 ? "hidden" : "visible"}}
          >
            {page > 0 ? "Prev" : ""}
          </button>

          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                submitFormData(formData);
              } else {
                setPage((currentPage) => currentPage + 1);
              }
            }}
            className="flex self-end items-center gap-1 bg-green-500 hover:bg-green-600 hover:text-white text-white font-medium py-2 px-4 rounded-md"
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RefinedRegForm;
