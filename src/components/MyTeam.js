import React, {useState} from "react";
import ImageOne from "../images/myTeam.png";
import ImageTwo from "../images/eliudkipchoge.jpg";
import ImageThree from "../images/home.png";
import Footer from "./Footer";
const images = [ImageOne, ImageTwo, ImageThree];

const MyTeam = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  const handlePrevious = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  return (
    <div className="sm:w-full sm:h-full md:w-full md:h-full lg:w-full lg:h-full sm:text-center">
      <div class="mx-auto max-w-4xl mt-2 ">
        <div class="relative">
          <div class="overflow-hidden">
            <div class="flex">
              <div class="w-full h-full object-cover flex-shrink-0">
                <img
                  src={images[currentImage]}
                  alt="Image 1"
                  class="w-full h-full"
                />
              </div>
            </div>
          </div>
          <div class="absolute inset-0 flex justify-between items-center">
            <button
              onClick={handlePrevious}
              className="text-white text-xl px-2 py-0 bg-[#D9D9D9] ml-2 hover:bg-[#14d474] rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 26 22"
                stroke-width="1.5"
                stroke="black"
                className="w-6 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="text-white text-xl px-2 py-0 bg-[#D9D9D9] hover:bg-[#14d474] mr-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 26 22"
                stroke-width="1.5"
                stroke="black"
                className="w-6 h-10"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </div>
          <div class="absolute text-center bottom-0 left-0 w-full  py-2 px-4 mb-10">
            <p class="text-white text-lg">
              <span className="font-bold">Collins Kibet</span> - Head of
              Operations
            </p>
          </div>
        </div>
        <div className="flex justify-center m-4">
          <img
            src={images[currentImage]}
            alt="Image 1"
            class="w-12 h-12 opacity-60 rounded-full mr-4 object-cover center"
          />
          <img
            src={images[currentImage]}
            alt="Image 1"
            class="w-12 h-12 rounded-full mr-4 object-cover center"
          />
          <img
            src={images[currentImage]}
            alt="Image 1"
            class="w-12 h-12 opacity-60 rounded-full mr-4 object-cover center"
          />
        </div>
      </div>
      <div class="flex justify-center mt-2 mb-2">
        <div class="w-1/3">
          <p className="text-center">
            At the helm of our organization is our Head of Operations, Collins
            Kibet. Collins has an extensive background in both sports and
            education, making him the perfect person to lead our team. He was a
            standout athlete in their own right, excelling in 400m and 800m at
            University of Arizona. They know firsthand the challenges that
            student-athletes face in trying to balance their athletic and
            academic commitments.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyTeam;
