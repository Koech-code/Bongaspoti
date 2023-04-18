import React from "react";

const AthleteInformation = ({formData, setFormData}) => {
  return (
    <div>
      <div className=" mr-auto ml-10">
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="events" className="block font-medium mb-2">
              Events
            </label>
            <input
              type="text"
              id="events"
              name="events"
              value={formData.events}
              onChange={(event) =>
                setFormData({...formData, events: event.target.value})
              }
              required
              placeholder="The events you participate in"
              className="w-full border-gray-400 border-solid border-2 rounded-md px-3 py-2 focus:outline-none focus:border-blue-600"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AthleteInformation;
