import React, {useState} from "react";
import Footer from "./Footer";
import axios from "axios";
import {useNavigate} from "react-router-dom";
const Registration = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [county, setCouty] = useState();
  const [city, setCity] = useState();
  const [graduationYear, setGraduationYear] = useState();
  const [certificate, setCertificate] = useState();
  const [repeated, setRepeated] = useState();
  const [events, setEvents] = useState();
  const [consultationMeans, setConsultationMeans] = useState();
  const [communicationMeans, setCommunicationMeans] = useState();
  const [contactLanguage, setContactLanguage] = useState();
  const [emailaddress, setEmailAddress] = useState();
  const [phonenumber, setPhoneNumber] = useState();
  const [achievement, setAchievement] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("county", county);
    formData.append("city", city);
    formData.append("graduationYear", graduationYear);
    formData.append("certificate", certificate);
    formData.append("repeated", repeated);
    formData.append("events", events);
    formData.append("consultationMeans", consultationMeans);
    formData.append("communicationMeans", communicationMeans);
    formData.append("contactLanguage", contactLanguage);
    formData.append("emailaddress", emailaddress);
    formData.append("phonenumber", phonenumber);
    formData.append("achievement", achievement);
    try {
      await axios.post(
        "http://127.0.0.1:8000/api/profiles/profile/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("Post created successfully!");
      navigate("/profiles");
    } catch (error) {
      console.error(error);
      alert("Failed to create post.");
    }
  };

  return (
    <div>
      <div className="m-2">
        <div>
          <p className="text-green-600 text-4xl text-center font-bold m-6">
            Registration Form
          </p>
        </div>
        <form>
          <div className="grid md:grid-cols-2">
            <div>
              <div>
                <h3 className="font-bold">Personal Information</h3>
              </div>
              <div class="mt-4 grid grid-cols-2  md:gap-6 sm:gap-2 ">
                <div className=" grid-rows-2">
                  <div class="relative z-0 w-full mb-6 group ">
                    <input
                      type="text"
                      name="floating_first_name"
                      id="floating_first_name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      required
                    />
                    <label
                      for="floating_first_name"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      First name
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_last_name"
                      id="floating_last_name"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                    <label
                      for="floating_last_name"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Last name
                    </label>
                  </div>
                </div>
                <div className=" grid-rows-2">
                  <div className="relative z-0 w-full mb-6">
                    <select
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      id="home"
                      value={county}
                      onChange={(e) => setCouty(e.target.value)}
                      required
                    >
                      <option disabled selected>
                        Home County
                      </option>
                      <option>Uasin-Gishu</option>
                      <option>Bomet</option>
                      <option>Nandi</option>
                    </select>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <select
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      id="home"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    >
                      <option disabled selected>
                        City
                      </option>
                      <option>Iten</option>
                      <option>Nairobi</option>
                      <option>Eldoret</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-4">
              <div>
                <h3 className="font-bold">Academic Information</h3>
              </div>
              <div class="mt-4 grid grid-cols-2 md:gap-6 sm:gap-2 ">
                <div className=" grid-rows-2">
                  <div class="relative z-0 w-full mb-6 group ">
                    <input
                      type="text"
                      name="floating_first_name"
                      id="floating_first_name"
                      class="block  py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      value={graduationYear}
                      onChange={(e) => setGraduationYear(e.target.value)}
                    />
                    <label
                      for="floating_first_name"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Year of Graduation
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <select
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      id="home"
                      value={certificate}
                      onChange={(e) => setCertificate(e.target.value)}
                      required
                    >
                      <option disabled selected>
                        Received a high school certificate after 12 or 13 years
                      </option>
                      <option>Yes</option>
                      <option>No</option>
                      <option>I didn't go to school</option>
                    </select>
                  </div>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <select
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    id="home"
                    value={repeated}
                    onChange={(e) => setRepeated(e.target.value)}
                    required
                  >
                    <option disabled selected>
                      Repeated a grade or had a break in studies since Form 1?
                    </option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Contact Details</h3>
          </div>
          <div class="mt-4 grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={emailaddress}
                onChange={(e) => setEmailAddress(e.target.value)}
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={phonenumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <label
                for="floating_phone"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number (0745441222)
              </label>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Athlete Information </h3>
          </div>
          <div class="mt-4 grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="floating_event"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Events placehoder "
                required
                value={events}
                onChange={(e) => setEvents(e.target.value)}
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Events
              </label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="floating_phone"
                id="floating_phone"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                value={achievement}
                onChange={(e) => setAchievement(e.target.value)}
              />
              <label
                for="floating_phone"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Achievements
              </label>
            </div>
          </div>
          <div>
            <div>
              <h3 className="font-bold">Establishing Contact</h3>
            </div>
            <div class="mt-4 grid grid-cols-2  md:gap-6 sm:gap-2 ">
              <div className=" grid-rows-2">
                <div class="relative z-0 w-full mb-6 group">
                  <select
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    id="home"
                    value={consultationMeans}
                    onChange={(e) => setConsultationMeans(e.target.value)}
                    required
                  >
                    <option disabled selected>
                      Your preferred consultation means
                    </option>
                    <option>Email</option>
                    <option>SMS</option>
                  </select>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                  <select
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    id="home"
                    value={communicationMeans}
                    onChange={(e) => setCommunicationMeans(e.target.value)}
                    required
                  >
                    <option disabled selected>
                      Get your awesome name through?
                    </option>
                    <option>Email</option>
                    <option>SMS</option>
                  </select>
                </div>
              </div>
              <div className=" grid-rows-2">
                <div class="relative z-0 w-full mb-6 group">
                  <select
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    id="home"
                    value={contactLanguage}
                    onChange={(e) => setContactLanguage(e.target.value)}
                    required
                  >
                    <option disabled selected>
                      Preferred contact language
                    </option>
                    <option>English</option>
                    <option>Kiswahili</option>
                    <option>Mother tongue</option>
                  </select>
                </div>
                <div class="p-4 text-center">
                  <button
                    onClick={handleSubmit}
                    class="bg-blue-500 hover:text-white hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
