import React, { useState } from "react";

function SearchResult() {
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
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  async function handleSearch(event) {
    event.preventDefault();

    // Send a search query to your backend API using the searchTerm state variable
    const response = await fetch(`http://127.0.0.1:8000/search?q=${searchTerm}`);
    const data = await response.json();

    // Update the searchResults state variable with the API response
    setSearchResults(data);
  }

  return (
    <div>
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>

    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {searchResults.map((result) => (
        <div
          key={result.title}
          className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
        >
          <img
            src={result.image}
            alt=""
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h2 className="font-bold text-2xl mb-2">{result.title}</h2>
            <p className="text-gray-700 text-base">{result.description}</p>
          </div>
        </div>
      ))}
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

