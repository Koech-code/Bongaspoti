import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


function SearchResult() {
  const navigate = useNavigate();

  // const [searchTerm, setSearchTerm] = useState("");
  // const [results, setResults] = useState([]);

  // const handleSearch = async (e) => {
  //   e.preventDefault();

  //   const response = await fetch(`http://127.0.0.1:8000/search?q=${searchTerm}`);
  //   const data = await response.json();

  //   setResults(data);
  // };

  // return (
  //   <div className="p-4">
  //     <form onSubmit={handleSearch}>
  //       <input
  //         type="text"
  //         placeholder="Search..."
  //         className="border border-gray-300 p-2 rounded-md w-full"
  //         value={searchTerm}
  //         onChange={(e) => setSearchTerm(e.target.value)}
  //       />
  //       <button
  //         type="submit"
  //         className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-2"
  //       >
  //         Search
  //       </button>
  //     </form>
  //     <ul className="mt-4">
  //       {results.map((result) => (
  //         <div key={result.data.id}>
  //           <li>{result.data.description}</li>
  //         </div>
          
  //       ))}
  //     </ul>
  //   </div>
  // );
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  // const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://127.0.0.1:8000/search?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        setResults(data);
    })
    .catch((err) => {
        console.log(err.message);
    });
      // .then((response) => response.json())
      // .then((data) => setResults(data.results))
      // console.lo(data)
      // .catch((error) => console.log(error));
    // history.push
    navigate(`/search?q=${query}`);
  

  
  };

  const handleReset =(reset) =>{
    setQuery('')
  }

  return (
    <div>
                <form onSubmit={handleSubmit} >
            <div className="relative">
            <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                placeholder="Search"
                className="bg-white text-gray-900 rounded-full focus:border-none py-2 pr-4 pl-10 block w-full leading-5 border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                <button type="submit"  className="border-none">
                <svg
                    className="h-5 w-5 text-green-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                </button>
      
            </div>
            <button type="reset" onClick={handleReset} className="absolute right-0 top-0 mt-3 mr-12 bg-green-600">
      <svg className="h-4 w-4 fill-current " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 0c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm5.3 14.7c-.4.4-1 .4-1.4 0l-3.9-3.9-3.9 3.9c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l3.9-3.9-3.9-3.9c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l3.9 3.9 3.9-3.9c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-3.9 3.9 3.9 3.9c.4.4.4 1 0 1.4z"/></svg>
    </button>
            </div>
        </form>
    {/* <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form> */}
      <div>
      {results.map(result => {
        if (result.model === 'Event') {
          return (
            <div key={result.model}>
              <h2>Events</h2>
              {result.data.map(event => (
                <div key={event.title}>
                  <h3>{event.title}</h3>
                  {event.image && <img src={event.image} alt={event.title} />}
                  <p>{event.description}</p>
                  {event.time && <p>Time: {event.time}</p>}
                  <p>Timestamp: {event.timestamp}</p>
                </div>
              ))}
            </div>
          );
        }
        if (result.model === 'Message') {
          return (
            <div key={result.model}>
              <h2>Messages</h2>
              <p>No messages.</p>
            </div>
          );
        }
        if (result.model === 'Profile') {
          return (
            <div key={result.model}>
              <h2>Profiles</h2>
              <p>No profiles.</p>
            </div>
          );
        }
        return null;
      })}
    </div>
  </div>
  );
}

export default SearchResult;

// import { useState } from 'react';

// function SearchResults() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   async function handleSearch(event) {
//     event.preventDefault();

//     // Send a search query to your backend API using the searchTerm state variable
//     const response = await fetch(`/api/search?q=${searchTerm}`);
//     const data = await response.json();

//     // Update the searchResults state variable with the API response
//     setSearchResults(data);
//   }

//   return (
//     <div>
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(event) => setSearchTerm(event.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>

//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
//         {searchResults.map((result) => (
//           <div
//             key={result.title}
//             className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
//           >
//             <img
//               src={result.image}
//               alt=""
//               className="h-48 w-full object-cover"
//             />
//             <div className="p-4">
//               <h2 className="font-bold text-2xl mb-2">{result.title}</h2>
//               <p className="text-gray-700 text-base">{result.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

