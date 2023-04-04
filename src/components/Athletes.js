import React from "react";
import athlete from "../images/Frame 13.png";
import knowathletefooter from "../images/knowAthleteFooter.png";
import Footer from "./Footer";
import {useNavigate} from "react-router-dom";
import bestathlete from "../images/eliudkipchoge.jpg";
const Athlete = () => {
  const navigate = useNavigate();

  const navigateRegistrationPage = () => {
    // 👇️ navigate to /profiles
    navigate("/registration");
  };

  const data = [
    {
      id: 1,
      image: bestathlete,
      col2: "Collins Otieno",
      col3: "Fall 2024",
      col4: "Fall 2024",
      col5: "Fall 2024",
      col6: "Personal Bests: 200m: 24.87 S | 400m: 56.59 S",
      col7: "Freshman",
      col8: "Fall 2024",
    },
    {
      id: 3,
      image: bestathlete,
      col2: "Collins Otieno",
      col3: "Fall 2024",
      col4: "Fall 2024",
      col5: "Fall 2024",
      col6: "Personal Bests: 200m: 24.87 S | 400m: 56.59 S",
      col7: "Freshman",
      col8: "Fall 2024",
    },
    {
      id: 4,
      image: bestathlete,
      col2: "Collins Otieno",
      col3: "Fall 2024",
      col4: "Fall 2024",
      col5: "Fall 2024",
      col6: "Personal Bests: 200m: 24.87 S | 400m: 56.59 S",
      col7: "Freshman",
      col8: "Fall 2024",
    },
    {
      id: 5,
      image: bestathlete,
      col2: "Collins Otieno",
      col3: "Fall 2024",
      col4: "Fall 2024",
      col5: "Fall 2024",
      col6: "Personal Bests: 200m: 24.87 S | 400m: 56.59 S",
      col7: "Freshman",
      col8: "Fall 2024",
    },
    {
      id: 6,
      image: bestathlete,
      col2: "Collins Otieno",
      col3: "Fall 2024",
      col4: "Fall 2024",
      col5: "Fall 2024",
      col6: "Personal Bests: 200m: 24.87 S | 400m: 56.59 S",
      col7: "Freshman",
      col8: "Fall 2024",
    },
    {
      id: 7,
      image: bestathlete,
      col2: "Collins Otieno",
      col3: "Fall 2024",
      col4: "Fall 2024",
      col5: "Fall 2024",
      col6: "Personal Bests: 200m: 24.87 S | 400m: 56.59 S",
      col7: "Freshman",
      col8: "Fall 2024",
    },
    {
      id: 8,
      image: bestathlete,
      col2: "Collins Otieno",
      col3: "Fall 2024",
      col4: "Fall 2024",
      col5: "Fall 2024",
      col6: "Personal Bests: 200m: 24.87 S | 400m: 56.59 S",
      col7: "Freshman",
      col8: "Fall 2024",
    },
    {
      id: 9,
      image: bestathlete,
      col2: "Collins Otieno",
      col3: "Fall 2024",
      col4: "Fall 2024",
      col5: "Fall 2024",
      col6: "Personal Bests: 200m: 24.87 S | 400m: 56.59 S",
      col7: "Freshman",
      col8: "Fall 2024",
    },
    {
      id: 10,
      image: bestathlete,
      col2: "Collins Otieno",
      col3: "Fall 2024",
      col4: "Fall 2024",
      col5: "Fall 2024",
      col6: "Personal Bests: 200m: 24.87 S | 400m: 56.59 S",
      col7: "Freshman",
      col8: "Fall 2024",
    },
    {
      id: 11,
      image: bestathlete,
      col2: "Collins Otieno",
      col3: "Fall 2024",
      col4: "Fall 2024",
      col5: "Fall 2024",
      col6: "Personal Bests: 200m: 24.87 S | 400m: 56.59 S",
      col7: "Freshman",
      col8: "Fall 2024",
    },
  ];

  return (
    <div className="sm:w-full sm:h-full md:w-full md:h-full lg:w-full lg:h-full sm:text-center ">
      <p className="bg-[#22354D] md:px-8 lg:px-24 sm:text-1xl text-white md:text-4xl font-bold text-center md:mt-2 mb-8 md:mb-12 p-24">
        Get to know our athletes
      </p>
      <div className="overflow-x-auto sm:text-sm md:text-sm">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="p-4"></th>
              <th className="p-4">Column 2</th>
              <th className="p-4">Column 3</th>
              <th className="p-4">Column 4</th>
              <th className="p-4">Column 5</th>
              <th className="p-4">Column 6</th>
              <th className="p-4">Column 7</th>
              <th className="p-4">Column 8</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="p-4">
                  <img
                    src={item.image}
                    alt=""
                    className="rounded-full w-10 h-10"
                  />
                </td>
                <td className="p-4">{item.col2}</td>
                <td className="p-4">{item.col3}</td>
                <td className="p-4">{item.col4}</td>
                <td className="p-4">{item.col5}</td>
                <td className="p-4">{item.col6}</td>
                <td className="p-4">{item.col7}</td>
                <td className="p-4">{item.col8}</td>
              </tr>
            ))}
            <hr />
          </tbody>
          {/* <hr/> */}
        </table>
      </div>

      <Footer />
    </div>
  );
};

export default Athlete;
