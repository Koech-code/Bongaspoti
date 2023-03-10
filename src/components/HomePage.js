import React, { useState, useEffect } from 'react';


const HomePage = () => {
   const [events, setEvents] = useState([]);
 
   useEffect(() => {
     fetch('http://127.0.0.1:8000/api/events/all_events/')
       .then((response) => response.json())
       .then((data) => {
         console.log(data);
         setEvents(data);
       })
       .catch((err) => {
         console.log(err.message);
       });
   }, []);
 
   return (
      
         <div className="flex flex-wrap">
      
      {events.map((item) => (
        <div key={item.id} className="w-full md:w-1/2 lg:w-1/3 p-4">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-4">
              <h2 className="text-lg font-medium mb-2">{item.title}</h2>
              <img src={`http://127.0.0.1:8000${item.image}`} alt="event" />
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
        
    </div>
     
   );
 };
 
 export default HomePage;
 