// src/SearchBar.js
import React, { useState } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = async (event) => {
        const value = event.target.value;
        setQuery(value);

        if (value.length > 2) {
            setLoading(true);
            // Simulate an API call
            setTimeout(() => {
                setSuggestions(['calculator', 'laptop', 'books']);
                setLoading(false);
            }, 1000);
        } else {
            setSuggestions([]);
        }
    };

    const handleClear = () => {
        setQuery('');
        setSuggestions([]);
    };

    const handleSearch = () => {
        console.log('Searching for:', query);
        // Implement search functionality here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white w-full max-w-screen-md rounded-md border border-gray-300 shadow-md overflow-hidden">
                <div className="flex items-center">
                    <button className="px-4 py-3 text-gray-500 focus:outline-none" onClick={handleClear}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M18.364 5.636a2 2 0 00-2.828 0L12 9.172 9.172 6.364a2 2 0 00-2.828 2.828L9.172 12l-2.808 2.808a2 2 0 102.828 2.828L12 14.828l2.828 2.808a2 2 0 102.828-2.828L14.828 12l2.808-2.808a2 2 0 000-2.828z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                    <input
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        placeholder="Search"
                        className="w-full py-3 pl-3 pr-10 text-lg text-gray-900 bg-gray-100 focus:outline-none"
                    />
                    <button onClick={handleSearch} className="px-4 py-3 bg-red-600 text-white text-lg font-bold hover:bg-red-700 focus:outline-none">
                        Search
                    </button>
                </div>
                {loading && (
                    <div className="flex justify-center py-2">
                        <div className="w-4 h-4 border-t-2 border-b-2 border-gray-900 rounded-full animate-spin"></div>
                    </div>
                )}
                {suggestions.length > 0 && (
                    <ul className="py-2">
                        {suggestions.map((suggestion, index) => (
                            <li
                                key={index}
                                className="px-4 py-3 text-lg text-gray-900 hover:bg-gray-200 cursor-pointer"
                                onClick={() => setQuery(suggestion)}
                            >
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
