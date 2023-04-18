import {useState, useEffect} from "react";

function SearchResults({results}) {
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    setShowResults(true);
  }, []);

  return (
    <div
      className={`${
        showResults ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      } transition duration-500 ease-in-out transform mb-4`}
    >
      <div className="bg-white rounded-lg shadow-lg p-6">
        {results.map((result, id) => (
          <div key={id}>
            <h3 className="text-lg font-medium mb-2">{result.title}</h3>
            <p className="text-gray-700">{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
