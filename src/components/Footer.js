import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
        <footer className="bg-[#2BAE76] text-white">
  <div className="container mx-auto flex flex-wrap py-6">
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-3">
      <h3 className="text-lg mb-2 font-semibold">Athletes </h3>
      <ul className="list-reset">
        <li className="my-2"><a href="#" className="hover:text-white">Opportunity Assessment</a></li>
        <li className="my-2"><a href="#" className="hover:text-white">Requirements</a></li>
        <li className="my-2"><a href="#" className="hover:text-white">Awesome N ame</a></li>
      </ul>
    </div>
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-3">
      <h3 className="text-lg mb-2 font-semibold">About</h3>
      <ul className="list-reset">
        <li className="my-2"><a href="#" className="hover:text-white">Our Story</a></li>
        <li className="my-2"><a href="#" className="hover:text-white">Our Team </a></li>
        <li className="my-2"><a href="#" className="hover:text-white">Our Process</a></li>
        <li className="my-2"><a href="#" className="hover:text-white">Our Packages</a></li>
        <li className="my-2"><a href="#" className="hover:text-white">Sports Scholarships in the USA</a></li>
      </ul>
    </div>
    <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-3">
      <h3 class="text-lg mb-2 font-semibold">Coaches</h3>
      <ul class="list-reset">
        <li class="my-2"><a href="#" class="hover:text-white">View Prospects</a></li>
        <div className="flex justify-center space-x-2 ml-8">
      <a href="https://twitter.com" target='_nick'>
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://facebook.com" target='_nick'>
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://linkedin.com" target='_nick'>
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://instagram.com" target='_nick'>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
      </ul>
    </div>
  </div>
  
  
</footer>

<div className='bg-gray-900 text-white'>
    <p className='text-center'>© 2023 . All Rights Reserved .</p>
</div>

    </div>
  )
}

export default Footer