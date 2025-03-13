import React, { useState } from "react";
import { motion } from "framer-motion";
React;
const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.example.com/search?q=${query}`);
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setResults(data.items || []);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="container mx-auto p-6"
    >
      <motion.div 
        className="flex items-center space-x-2"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="p-2 border rounded w-full"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Search
        </button>
      </motion.div>
      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {results.map((item, index) => (
          <motion.div 
            key={index} 
            className="p-4 border rounded shadow"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="font-bold">{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SearchComponent;
