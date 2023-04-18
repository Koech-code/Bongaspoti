import React from "react";

const AcademicInformation = ({formData, setFormData}) => {
  return (
    <div>
      <div className=" ml-5 mr-5">
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="year" className="block font-medium mb-2">
              Year of Graduation
            </label>
            <input
              type="number"
              id="year"
              name="year"
              value={formData.graduationYear}
              onChange={(event) =>
                setFormData({...formData, graduationYear: event.target.value})
              }
              required
              className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="certificate" className="block font-medium mb-2">
              Did you or will you receive a high school certificate after 12 or
              13 years
            </label>
            <input
              type="text"
              id="certificate"
              name="cerificate"
              value={formData.certificate}
              onChange={(event) =>
                setFormData({...formData, certificate: event.target.value})
              }
              required
              className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
            />
          </div>
          {/* <div className="flex justify-between"> */}

          <div className="mb-4 ml-2 self-end">
            <label className="block text-gray-700 font-bold mb-2" for="city">
              Have you repeated a grade level or had a break in your studies
              since Form 1?
            </label>
            <div className="relative">
              <select
                className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none"
                id="city"
                value={formData.repeated}
                onChange={(event) =>
                  setFormData({...formData, repeated: event.target.value})
                }
              >
                <option disabled selected>
                  Repeated
                </option>
                <option>Yes</option>
                <option>No</option>
                <option>I didn't go to school</option>
              </select>
            </div>
          </div>
          {/* </div> */}
        </form>
      </div>
    </div>
  );
};

export default AcademicInformation;
