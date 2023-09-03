import React, { useState } from 'react';
import { FaSearch, FaHome } from 'react-icons/fa'; // Importing search and home icons from react-icons

export default function SearchBar({ onSearch, onBack }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="flex items-center">
      <div className="flex space-x-1">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search..."
        />
        <button onClick={handleSearch} className="px-4 text-white bg-gray-700 rounded-full ">
          <FaSearch className="w-5 h-5" />
        </button>
        {onBack && (
          <button onClick={onBack} className="px-4 text-white bg-gray-700 rounded-full ml-2">
            <FaHome className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
