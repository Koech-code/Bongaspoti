import React from "react";

function ContactDetails({formData, setFormData}) {
  return (
    <div>
      <div className=" mr-auto  ml-10">
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(event) =>
                setFormData({...formData, email: event.target.value})
              }
              required
              placeholder="nixon@gmail.com"
              className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phonenumber" className="block font-medium mb-2">
              Phone Number
            </label>
            <input
              type="number"
              id="phonenumber"
              name="phonenumber"
              value={formData.phoneNumber}
              onChange={(event) =>
                setFormData({...formData, phoneNumber: event.target.value})
              }
              required
              placeholder="0700222738"
              className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactDetails;
