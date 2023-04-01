import React, { useState } from 'react';
import Slider from "react-slick";

import PersonalInformation from './PersonalInformation';
import ContactDetails from './ContactDetails';
import AthleteInformation from './AthleteInformation';
import AcademicInformation from './AcademicInformation';
import EstablishContact from './EstablishContact';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


 const MyProfile = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
    <Slider {...settings} className="mt-8 border-none focus:border-none">
      <div>
        <PersonalInformation />
      </div>
      <div>
        <ContactDetails />
      </div>
      <div>
        <AthleteInformation />
      </div>
      <div>
        <AcademicInformation />
      </div>
      <div>
        <EstablishContact />
      </div>
    </Slider>
  </div>
  
  );
};

export default MyProfile;