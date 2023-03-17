import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SearchResults from "./SearchResults";


function Search({ query }) {
    const [results, setResults] = useState([]);

  useEffect(() => {
    async function getSearchResults() {
      const response = await axios.get(
        `http://127.0.0.1:8000/search?q=${query}`, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: `Token ${localStorage.getItem('token')}`,
              },
        },
      );
      setResults(response.data.results);
    }
    getSearchResults();
  }, [query]);
//     const [results, setResults] = useState([])
//     const [query, setQuery] = useState('')

//   useEffect(()=>{
//     if(query){
//       axios.get(`https://search?q=${query}`)
//       .then(response=>{
//         setResults(response.data);
//       })
//       .catch(error=>{
//         console.log(error)
//       });
//     }
//   }, [query]);

//   const handleInputChange = event =>{
//     setQuery(event.target.value);
//   };

//   const handleSubmit = event =>{
//     event.preventDefault();
//     // Do nothing if query is empty
//     if (query){
//       axios.get(`https://search?q=${query}`)
//       .then(response=>{
//         setResults(response.data);
//       })
//       .catch(error=>{
//         console.log(error);
//       });
//     }
//   }

  return (
    <div>
        
          <form >
            <div className="relative">
            <input
                type="text"
                // value={query}
                // onChange = {handleInputChange}
                placeholder="Search"
                className="bg-white text-gray-900 rounded-full focus:border-none py-2 pr-4 pl-10 block w-full leading-5 border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
                <button type="submit" className="border-none">
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
            <button type="reset" className="absolute right-0 top-0 mt-3 mr-12 bg-green-600">
      <svg className="h-4 w-4 fill-current " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 0c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm5.3 14.7c-.4.4-1 .4-1.4 0l-3.9-3.9-3.9 3.9c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l3.9-3.9-3.9-3.9c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l3.9 3.9 3.9-3.9c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-3.9 3.9 3.9 3.9c.4.4.4 1 0 1.4z"/></svg>
    </button>
            </div>
        </form>
        <div>
      <h2 className="text-xl font-medium mb-4">Search Results</h2>
      <SearchResults results={results} />
    </div>
    </div>
  )
}

export default Search