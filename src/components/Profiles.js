import React, {useState, useEffect} from "react";
import cover from "../images/apple.jpg";
import profimage from "../images/Nicky.jpg";
import ProfileFeeds from "./ProfileFeeds";
import {Routes, Router, Route} from "react-router-dom";
import Journals from "./Journals";
import {Link, Outlet} from "react-router-dom";
import Footer from "./Footer";
import {Parsedotly} from "styled-icons/simple-icons";
import {Alert} from "@material-tailwind/react";
import {HiDotsVertical} from "react-icons/hi";

const Profiles = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }
  const [profile, setProfile] = useState([]);

  const FollowButton = () => {
    return (
      <button className="bg-black text-white py-2 px-4 rounded-lg">
        Follow
      </button>
    );
  };

  const ThreeDotIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 2.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 10a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0-5a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"
          clipRule="evenodd"
        />
      </svg>
    );
  };

  const MailIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    );
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/profiles/allprofiles/", {
      method: "GET",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.log(`Error: ${err}`));
  }, []);

  return (
    <div>
      <div className="max-w-md mx-auto mt-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <img
          className="w-full h-64 object-cover"
          src={cover}
          alt="Cover Image"
        />
        <div className="px-4 py-4">
          <div className=" flex justify-between">
            <div className="self-start flex items-center">
              <img
                className="w-12 h-12 rounded-full mr-4 object-cover"
                src={profimage}
                alt="Profile Image"
              />
              <div>
                <p className="font-bold text-xl text-gray-900">Nick Koech</p>
                <p className="text-gray-700 text-sm">Track and Field</p>
              </div>
            </div>
            <div className="self-end mb-4">
              <div className="relative">
                <button
                  className="text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:shadow-outline"
                  onClick={toggleDropdown}
                >
                  <HiDotsVertical className="w-6 h-6" />
                </button>
                {isOpen && (
                  <div className="absolute top-1/2 right-0 mr-8 transform -translate-y-1/2 z-10  py-2 ml-2 bg-white rounded-md shadow-lg">
                    <a
                      href="#"
                      class="inline-flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                      Edit
                    </a>

                    <a
                      href="#"
                      class="inline-flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
                        />
                      </svg>
                      Save
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <p className="mt-4 text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor.{" "}
          </p>
        </div>
        <nav className="flex flex-wrap items-center justify-between p-5 bg-gray-800">
          {/* <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-500 hover:border-gray-500"
            onClick={() => console.log("Menu Clicked!")}
          >
            <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 0h20v2H0zM0 8h20v2H0zM0 16h20v2H0z"/></svg>
          </button>
        </div> */}
          <div className="list-wrapper"></div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-md lg:flex-grow ">
              {/* <a href="/feeds" >
              Feeds
      
            </a> */}
              <Link
                to="athletesInfo"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-500 mr-6"
              >
                Athletics
              </Link>
              <Link
                to="media"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-500 mr-6"
              >
                Media
              </Link>
              <Link
                to="personal"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-500 mr-6"
              >
                Personal
              </Link>
              <Link
                to="academics"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-500 mr-6"
              >
                Academics
              </Link>
              {/* <Outlet /> */}
            </div>
          </div>
        </nav>
        <Outlet></Outlet>
      </div>

      <Footer />
    </div>
  );
};

export default Profiles;
