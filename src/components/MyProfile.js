import React, {useState} from "react";
import Slider from "react-slick";

import PersonalInformation from "./PersonalInformation";
import ContactDetails from "./ContactDetails";
import AthleteInformation from "./AthleteInformation";
import AcademicInformation from "./AcademicInformation";
import EstablishContact from "./EstablishContact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link, Outlet} from "react-router-dom";

const MyProfile = () => {
  const [formData, setFormData] = useState({});

  const handlePersonalInfoSubmit = (data) => {
    setFormData({...formData, ...data});
  };

  const handleContactDetailsSubmit = (data) => {
    setFormData({...formData, ...data});
  };

  const [currentPage, setCurrentPage] = useState("personalInfo");

  const handleNextPage = () => {
    setCurrentPage(currentPage === "contacts" ? "athleteInfo" : "contacts");
  };

  // const handlePreviousPage = () => {
  //   setCurrentPage(currentPage === "contacts" ? "athleteInfo" : "contacts");
  // };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
      <nav className="flex flex-wrap items-center justify-between p-5 text-black">
        {/* <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-500 hover:border-gray-500"
          onClick={() => console.log("Menu Clicked!")}
        >
          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 0h20v2H0zM0 8h20v2H0zM0 16h20v2H0z"/></svg>
        </button>
      </div> */}
        {/* <div className="list-wrapper"></div> */}
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-2xl ">
          <div className="text-md lg:flex-grow ">
            {/* <a href="/feeds" >
            Feeds
            
          </a> */}
            {/* <Link
              to="personalInfo"
              onSubmit={handlePersonalInfoSubmit}
              className="block mt-4  lg:inline-block lg:mt-0 hover:text-green-500 mr-6"
            >
              Personal Information
            </Link>
            <Link
              to="contacts"
              onSubmit={handleContactDetailsSubmit}
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-green-500 mr-6"
            >
              Contact Details
            </Link>
            <Link
              to="athletesInfo"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-green-500 mr-6"
            >
              Athlete Information
            </Link>
            <Link
              to="academicInfo"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-green-500 mr-6"
            >
              Academic Information
            </Link>
            <Link
              to="establishingContact"
              className="block mt-4 lg:inline-block lg:mt-0  hover:text-green-500 mr-6"
            >
              Establishing Contact
            </Link> */}
            {/* <Outlet /> */}
          </div>
        </div>
      </nav>

      <Outlet></Outlet>
    </div>
  );
};

export default MyProfile;

// import React, {useState} from "react";
// import Slider from "react-slick";

// import PersonalInformation from "./PersonalInformation";
// import ContactDetails from "./ContactDetails";
// import AthleteInformation from "./AthleteInformation";
// import AcademicInformation from "./AcademicInformation";
// import EstablishContact from "./EstablishContact";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import {Link, Outlet} from "react-router-dom";

// const MyProfile = () => {
//   const [personalInfoData, setPersonalInfoData] = useState({});
//   const [contactDetailsData, setContactDetailsData] = useState({});
//   const [athleteInfoData, setAthleteInfoData] = useState({});
//   const [academicInfoData, setAcademicInfoData] = useState({});
//   const [establishingContactData, setEstablishingContactData] = useState({});
//   const [currentPage, setCurrentPage] = useState("personalInfo");
//   const [formData, setFormData] = useState({});

//   const handlePersonalInfoSubmit = (data) => {
//     setPersonalInfoData(data);
//     setCurrentPage("contacts");
//   };

//   const handleContactDetailsSubmit = (data) => {
//     setContactDetailsData(data);
//     setCurrentPage("athleteInfo");
//   };

//   const handleAthleteInfoSubmit = (data) => {
//     setAthleteInfoData(data);
//     setCurrentPage("academicInfo");
//   };

//   const handleAcademicInfoSubmit = (data) => {
//     setAcademicInfoData(data);
//     setCurrentPage("establishingContact");
//   };

//   const handleEstablishingContactSubmit = (data) => {
//     setEstablishingContactData(data);
//     // submit all the data here

//     // Prepare the data to be submitted
//     const postData = {
//       academicInfo: academicInfoData,
//       establishingContact: data,
//     };

//     // Make the POST request to submit the data
//     axios
//       .post("/api/submit-data", postData)
//       .then((response) => {
//         console.log("Data submitted successfully:", response);
//         // Handle any success cases here, e.g. show a success message to the user
//       })
//       .catch((error) => {
//         console.error("Error submitting data:", error);
//         // Handle any error cases here, e.g. show an error message to the user
//       });
//   };

//   // const [currentPage, setCurrentPage] = useState("personalInfo");

//   const handleNextPage = () => {
//     setCurrentPage(currentPage === "contacts" ? "athleteInfo" : "contacts");
//   };

//   // const handlePreviousPage = () => {
//   //   setCurrentPage(currentPage === "contacts" ? "athleteInfo" : "contacts");
//   // };

//   return (
//     <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
//       <nav className="flex flex-wrap items-center justify-between p-5 text-black">
//         {/* <div className="block lg:hidden">
//         <button
//           className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-500 hover:border-gray-500"
//           onClick={() => console.log("Menu Clicked!")}
//         >
//           <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 0h20v2H0zM0 8h20v2H0zM0 16h20v2H0z"/></svg>
//         </button>
//       </div> */}
//         {/* <div className="list-wrapper"></div> */}
//         <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-2xl ">
//           <div className="text-md lg:flex-grow ">
//             {/* <a href="/feeds" >
//             Feeds

//           </a> */}
//             <Link
//               to="personalInfo"
//               className={`block mt-4  lg:inline-block lg:mt-0 ${
//                 currentPage === "personalInfo" ? "text-green-500" : ""
//               }`}
//             >
//               Personal Information
//             </Link>
//             <Link
//               to="contacts"
//               className={`block mt-4 lg:inline-block lg:mt-0 ${
//                 currentPage === "contacts" ? "text-green-500" : ""
//               }`}
//             >
//               Contact Details
//             </Link>
//             <Link
//               to="athletesInfo"
//               className={`block mt-4 lg:inline-block lg:mt-0 ${
//                 currentPage === "athleteInfo" ? "text-green-500" : ""
//               }`}
//             >
//               Athlete Information
//             </Link>
//             <Link
//               to="academicInfo"
//               className={`block mt-4 lg:inline-block lg:mt-0 ${
//                 currentPage === "academicInfo" ? "text-green-500" : ""
//               }`}
//             >
//               Academic Information
//             </Link>
//             <Link
//               to="establishingContact"
//               className={`block mt-4 lg:inline-block lg:mt-0 ${
//                 currentPage === "establishingContact" ? "text-green-500" : ""
//               }`}
//             >
//               Establishing Contact
//             </Link>
//             {/* <Outlet /> */}
//           </div>
//         </div>
//       </nav>

//       <Outlet></Outlet>
//     </div>
//   );
// };

// export default MyProfile;
