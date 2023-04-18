import React, {useState} from "react";

function PersonalInformation({formData, setFormData, updateValidationStatus}) {
  return (
    <div className="">
      <div className=" ml-5 mr-5">
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="firstname" className="block font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              value={formData.firtsname}
              onChange={(event) => {
                const inputVal = event.target.value;
                setFormData({...formData, firtsname: inputVal});
                updateValidationStatus(inputVal !== "");
              }}
              className="w-96 border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastname" className="block font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="firstname"
              value={formData.lastname}
              onChange={(event) => {
                const inputVal = event.target.value;
                setFormData({...formData, lastname: inputVal});
                updateValidationStatus(inputVal !== "");
              }}
              className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" for="country">
              Home Country
            </label>
            <div className="relative">
              <select
                className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none"
                id="home"
                name="county"
                value={formData.county}
                onChange={(event) => {
                  const inputVal = event.target.value;
                  setFormData({...formData, county: inputVal});
                  updateValidationStatus(inputVal !== "");
                }}
                required
              >
                <option disabled selected>
                  Home
                </option>
                <option>Kenya</option>
                <option>USA</option>
                <option>Japan</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" for="city">
              City
            </label>
            <div className="relative">
              <select
                className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none"
                id="city"
                name="city"
                value={formData.city}
                onChange={(event) => {
                  const inputVal = event.target.value;
                  setFormData({...formData, city: inputVal});
                  updateValidationStatus(inputVal !== "");
                }}
                required
              >
                <option disabled selected>
                  City
                </option>
                <option>Bomet</option>
                <option>Eldoret</option>
                <option>Nairobi</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalInformation;
