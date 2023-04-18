import React from "react";

const EstablishContact = ({formData, setFormData}) => {
  return (
    <div>
      <div className="ml-5 mr-5">
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" for="contact">
              How do you prefer to receive your consultation?
            </label>
            <div className="relative">
              <select
                className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none"
                id="home"
                value={formData.consultationMeans}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    consultationMeans: event.target.value,
                  })
                }
              >
                <option disabled selected>
                  Please Select
                </option>
                <option>Email</option>
                <option>Phone call</option>
                <option>In person</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block font-medium mb-2">
              How do you prefer to receive your AwesomeName?
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.communicationMeans}
              onChange={(event) =>
                setFormData({
                  ...formData,
                  communicationMeans: event.target.value,
                })
              }
              required
              className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              for="language"
            >
              In which language do you want us to contact you with
            </label>
            <div className="relative">
              <select
                className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none"
                id="city"
                value={formData.contactLanguage}
                onChange={(event) =>
                  setFormData({
                    ...formData,
                    contactLanguage: event.target.value,
                  })
                }
                required
              >
                <option disabled selected>
                  Please Select
                </option>
                <option>English</option>
                <option>Kiswahili</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EstablishContact;
