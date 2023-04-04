import React, {useState, useEffect} from "react";
import cover from "../images/apple.jpg";
import profimage from "../images/Nicky.jpg";
import ProfileFeeds from "./ProfileFeeds";
import {Routes, Router, Route} from "react-router-dom";
import Journals from "./Journals";
import {Link, Outlet} from "react-router-dom";

const Profiles = () => {
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
        className="h-6 w-6"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M17 4H3a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zM3 6h14l-7 4.276L3 6zm0 8v-5.724l6.297 3.862L3 14zm14 0l-6.297-3.862L17 8.276V14z"
          clipRule="evenodd"
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
  // fetch('http://127.0.0.1:8000/api/feed', {

  // method: 'GET',
  // headers: {
  //   Authorization: `Token ${localStorage.getItem('token')}`,
  // }
  // })
  // .then((response) => response.json())
  // .then((data) => {
  //     console.log(data);
  //     setTweets(data);
  // })
  // .catch((err) => {
  //     console.log(err.message);
  // });

  return (
    // <div>
    //      {profile.map((item)=>{
    //         return(
    //             <div key={item.id}>
    //                 <p>{item.First_name}</p>
    //                 <p>{item.Last_name}</p>
    //             </div>
    //         )
    //      })}
    // </div>
    <div className="max-w-md mx-auto mt-4 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <img className="w-full h-64 object-cover" src={cover} alt="Cover Image" />
      <div className="px-4 py-4">
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full mr-4 object-cover"
            src={profimage}
            alt="Profile Image"
          />
          <div>
            <p className="font-bold text-xl text-gray-900">Nick Koech</p>
            <p className="text-gray-700 text-sm">Track and Field</p>
          </div>
          <div className="flex justify-evenly">
            <ThreeDotIcon />
            <MailIcon />
            <FollowButton />
          </div>
        </div>
        <p className="mt-4 text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor.{" "}
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
            <Link className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-500 mr-6">
              Feeds
            </Link>
            <Link className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-500 mr-6">
              Journals
            </Link>
            <Link className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-500 mr-6">
              Academics
            </Link>
            <Link className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-500 mr-6">
              Achievements
            </Link>
            {/* <Outlet /> */}
          </div>
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Profiles;
