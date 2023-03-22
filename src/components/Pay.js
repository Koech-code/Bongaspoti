import React, { useState } from 'react';

const Pay = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={togglePopup}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Open Popup
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>

          <div className="bg-white rounded-lg p-8 z-10">
            <h2 className="text-2xl font-bold mb-4">Popup Title</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              onClick={togglePopup}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Close Popup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pay;