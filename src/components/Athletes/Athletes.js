import React, {useState, useEffect} from "react";
import athlete from "../../images/Frame 13.png";
import knowathletefooter from "../../images/knowAthleteFooter.png";
import Footer from "../Footer";
import {useNavigate} from "react-router-dom";
import bestathlete from "../../images/eliudkipchoge.jpg";
import axios from "axios";
// import Profiles from "./Profiles";
const Athlete = () => {
  const navigate = useNavigate();
  const [profiles, setProfiles] = useState([]);

  const navigateRegistrationPage = () => {
    // 👇️ navigate to /profiles
    navigate("/registration");
  };

  const baseURL = "http://127.0.0.1:8000/api/profiles/allprofiles/";
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProfiles(response.data);
      console.log(response);
    });
  }, []);

  // const [selectedAthlete, setSelectedAthlete] = useState(null);

  // const handleAthleteClick = (athlete) => {
  //   setSelectedAthlete(athlete);
  // };

  // if (selectedAthlete) {
  //   return <Profiles athlete={selectedAthlete} />;
  // }

  return (
    <div className="sm:w-full sm:h-full md:w-full md:h-full lg:w-full lg:h-full sm:text-center ">
      <p className="bg-[#22354D] md:px-8 lg:px-24 sm:text-1xl text-white md:text-4xl font-bold text-center md:mt-2 mb-8 md:mb-12 p-24">
        Get to know our athletes
      </p>
      <div className="overflow-x-auto sm:text-sm md:text-sm">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="p-4">Profile image</th>
              <th className="p-4">First name</th>
              <th className="p-4">Last name</th>
              <th className="p-4">Club</th>
              <th className="p-4">Height</th>
              <th className="p-4">Weight</th>
              <th className="p-4">Training hours</th>
              <th className="p-4">Local achievements</th>
            </tr>
            <tr>
              <td colSpan="8">
                <hr className="my-1" />
              </td>
            </tr>
          </thead>
          <tbody>
            {profiles.map((item) => (
              <>
                <tr key={item.id}>
                  <td className="p-4">
                    <img
                      src={item.profile_pic}
                      alt=""
                      className="hover:cursor-pointer rounded-full w-10 h-10"
                      // onClick={handleAthleteClick}
                    />
                  </td>
                  <td className="p-4">{item.firstname}</td>
                  <td className="p-4">{item.lastname}</td>
                  <td className="p-4">{item.club}</td>
                  <td className="p-4">{item.height}</td>
                  <td className="p-4">{item.weight}</td>
                  <td className="p-4">{item.training_hours}</td>
                  <td className="p-4">{item.local_achievements}</td>
                </tr>
                <tr>
                  <td colSpan="8">
                    <hr className="my-1" />
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
};

export default Athlete;
