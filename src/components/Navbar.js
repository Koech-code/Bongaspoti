import React, { useState, useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { HiOutlineMail } from 'react-icons/hi';
import axios from "axios";
import logo from '../images/FindDev.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" shadow-lg sticky top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src={logo}
                alt="Workflow"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className="px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="/events"
                  className="px-3 py-2 rounded-md text-sm font-medium"
                >
                  Events
                </a>
                <a
                  href="/direct-message"
                  className="px-3 py-2 rounded-md text-sm font-medium"
                >
                  DM
                </a>
                <a
                  href="/registration"
                  className="px-3 py-2 rounded-md text-sm font-medium"
                >
                  Registration
                </a>
                <a
                  href="/prof"
                  className="px-3 py-2 rounded-md text-sm font-medium "
                >
                  prof
                </a>
                {/* <a
                  href="/direct-message"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white  "
                > */}
               {/* <div className="relative rounded-md text-sm font-medium text-gray-300 hover:text-white">
                <span className="absolute top-0 left-0 text-red-500 bg-slate-200 rounded-full text-sm">5</span>
                <HiOutlineMail className="h-6 w-6" />
              </div>  */}
               
                {/* </a> */}
                <a href="/search">
                <div className="flex items-center justify-center sm:justify-start">
                  <svg className="w-6 h-6 mr-2 fill-current  sm:w-5 sm:h-3" viewBox="0 0 24 24">
                    <path d="M10.5 0C4.701 0 0 4.701 0 10.5c0 5.799 4.701 10.5 10.5 10.5 2.412 0 4.629-.819 6.415-2.189l4.098 4.098a1.5 1.5 0 0 0 2.121-2.121l-4.098-4.098A10.417 10.417 0 0 0 21 10.5C21 4.701 16.299 0 10.5 0zm0 19.5c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5 7.5 3.358 7.5 7.5-3.358 7.5-7.5 7.5z"/>
                  </svg>
                  <span className="text-sm font-medium">Search</span>
                </div>
                </a>


              <a
                  href="/login"
                  className="px-3 py-2 rounded-md text-sm font-medium "
                >
                  Sign In
                </a>

                
                <a
                  href="/register"
                  className="px-3 py-2 rounded-md text-sm font-medium "
                >
                  Sign Up
                </a>
              </div>
              
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>

            <a
              href="/events"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              Events
            </a>
            <a
              href="/direct-message"
              className="px-3 py-2 rounded-md text-sm font-medium "
            >
              DM
            </a>
            <a
              href="/registration"
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              Registration
            </a>
            <a href="/search">
                <div className="flex items-center justify-center sm:justify-start ml-0">
                  <svg className="w-6 h-6 mr-2 fill-current text-white sm:w-5 sm:h-3" viewBox="0 0 24 24">
                    <path d="M10.5 0C4.701 0 0 4.701 0 10.5c0 5.799 4.701 10.5 10.5 10.5 2.412 0 4.629-.819 6.415-2.189l4.098 4.098a1.5 1.5 0 0 0 2.121-2.121l-4.098-4.098A10.417 10.417 0 0 0 21 10.5C21 4.701 16.299 0 10.5 0zm0 19.5c-4.142 0-7.5-3.358-7.5-7.5s3.358-7.5 7.5-7.5 7.5 3.358 7.5 7.5-3.358 7.5-7.5 7.5z"/>
                  </svg>
                  <span className="text-white text-sm font-medium">Search</span>
                </div>
            </a>   
            <a
              href="/login"
              className="px-3 py-2 rounded-md text-sm font-medium "
            >
              Sign In
            </a>

            
                <a
                  href="/register"
                  className="px-3 py-2 rounded-md text-sm font-medium "
                >
                  Sign Up
                </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
