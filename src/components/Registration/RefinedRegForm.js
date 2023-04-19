import React, {useState} from "react";
import axios from "axios";
import PersonalInformation from "./PersonalInformation";
import ContactDetails from "./ContactDetails";
import AthleteInformation from "./AthleteInformation";
import AcademicInformation from "./AcademicInformation";
import EstablishContact from "./EstablishContact";
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
    <div className=" mb-4 overflow-hidden ">
      <p className="text-green-600  md:text-5xl text-center mt-10 mb-6 text:sm sm:text-base">
        LETS GET TO KNOW YOU
      </p>
      <div className="flex flex-wrap -mx-4 ">
        <div>
          <div className="ml-auto bg-[#F9FBFC] m-2 p-4 rounded-md">
            {page === 0 && (
              <div className="flex flex-wrap p-2">
                <div className="pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#016400"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div className="w-2/3 mr-auto">
                  <p className="font-semibold">Personal Information</p>
                </div>
                <p className="p-2">
                  Please provide name, home country and date of birth
                </p>
              </div>
            )}
            {page > 0 && (
              <div className="flex flex-wrap p-2">
                <div className="pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#0FFF00"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div className="w-2/3 mr-auto">
                  <p className="font-semibold text-gray-300">
                    Personal Information
                  </p>
                </div>
                <p className="p-2 text-gray-300">
                  Please provide name, home country and date of birth
                </p>
              </div>
            )}
            {page === 1 && (
              <div className="flex flex-wrap p-2">
                <div className="pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#016400"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div className="w-2/3 mr-auto">
                  <p className="font-semibold">Contact Details</p>
                </div>
                <p className="p-2">
                  Please provide name, home country and date of birth
                </p>
              </div>
            )}
            {page !== 1 && (
              <div className="flex flex-wrap p-2">
                <div className="pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#0FFF00"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div className="w-2/3 mr-auto">
                  <p className="font-semibold text-gray-300">Contact Details</p>
                </div>
                <p className="p-2 text-gray-300">
                  Please provide name, home country and date of birth
                </p>
              </div>
            )}

            {page === 2 && (
              <div className="flex flex-wrap p-2">
                <div className="pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#016400"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div className="w-2/3 mr-auto">
                  <p className="font-semibold">Athletic Information</p>
                </div>
                <p className="p-2">
                  Please provide name, home country and date of birth
                </p>
              </div>
            )}

            {page !== 2 && (
              <div className="flex flex-wrap p-2">
                <div className="pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#0FFF00"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div className="w-2/3 mr-auto">
                  <p className="font-semibold text-gray-300">
                    Athletic Information
                  </p>
                </div>
                <p className="p-2 text-gray-300">
                  Please provide name, home country and date of birth
                </p>
              </div>
            )}
            {page === 3 && (
              <div className="flex flex-wrap p-2">
                <div className="pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#016400"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div className="w-2/3 mr-auto">
                  <p className="font-semibold">Academic Information</p>
                </div>
                <p className="p-2">
                  Please provide name, home country and date of birth
                </p>
              </div>
            )}
            {page !== 3 && (
              <div className="flex flex-wrap p-2">
                <div className="pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#0FFF00"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div className="w-2/3 mr-auto">
                  <p className="font-semibold text-gray-300">
                    Academic Information
                  </p>
                </div>
                <p className="p-2 text-gray-300">
                  Please provide name, home country and date of birth
                </p>
              </div>
            )}
            {page === 4 && (
              <div className="flex flex-wrap p-2">
                <div className="pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#016400"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div className="w-2/3 mr-auto">
                  <p className="font-semibold">Establishing Contact</p>
                </div>
                <p className="p-2">
                  Please provide name, home country and date of birth
                </p>
              </div>
            )}
            {page !== 4 && (
              <div className="flex flex-wrap p-2">
                <div className="pr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#0FFF00"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <div className="w-2/3 mr-auto">
                  <p className="font-semibold text-gray-300">
                    Establishing Contact
                  </p>
                </div>
                <p className="p-2 text-gray-300">
                  Please provide name, home country and date of birth
                </p>
              </div>
            )}
            <button className="bg-[#F4F4F4] ml-8 text-green-500 font-semibold pr-10 pl-10 p-3 justify-center">
              Already have an account?
            </button>
          </div>
        </div>

        <div className="form-container">
          <div className="mr-auto">
            <div className="font-semibold text-2xl p-4 text-center">
              {FormTitles[page]}
            </div>
          </div>
          <div className="w-full">{PageDisplay()}</div>
          <div className="flex justify-center ">
            <button
              disabled={page === 0}
              onClick={() => {
                setPage((currentPage) => currentPage - 1);
              }}
              className={`flex self-start items-center gap-1 py-2 px-4 rounded-md ${
                page === 0
                  ? "hidden"
                  : "bg-white text-green-500 hover:bg-white hover:text-green-700 font-medium"
              }`}
              style={{visibility: page === 0 ? "hidden" : "visible"}}
            >
              {page > 0 ? "Back" : ""}
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
    </div>
  );
};

export default RefinedRegForm;
