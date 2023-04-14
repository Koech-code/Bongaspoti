import React, {useState} from "react";
import ImageOne from "../images/apple.jpg";
import ImageTwo from "../images/eliudkipchoge.jpg";
import ImageThree from "../images/home.png";

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
    <div className="justify-center mt-1 ">
      <div className="relative">
        <img src={images[currentImage]} alt="Slider" className="w-full h-64" />
        <div className="absolute inset-0 flex justify-between items-center">
          <button
            onClick={handlePrevious}
            className="text-white text-xl px-4 py-2 bg-[#D9D9D9] ml-2 hover:bg-[#14d474] rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
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
            className="text-white text-xl px-4 py-2 bg-[#D9D9D9] hover:bg-[#14d474] mr-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              class="w-6 h-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyTeam;
