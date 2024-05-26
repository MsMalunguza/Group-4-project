import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsSearch } from 'react-icons/bs';

const SearchForm = () => {
  const { register, handleSubmit } = useForm();
  const [suggestions, setSuggestions] = useState([]);
  const [query, setQuery] = useState('');

  const products = [
    "Laptop",
    "Smartphone",
    "Headphones",
    "Camera",
    "Television",
    "T-shirt",
    "Jeans",
    "Jacket",
    "Sneakers",
    "Dress",
    "Notebook",
    "Pen",
    "Pencil",
    "Eraser",
    "Highlighter",
    "Bandages",
    "Painkillers",
    "Thermometer",
    "Vitamins",
    "First Aid Kit",
    "Novel",
    "Textbook",
    "Comics",
    "Magazine",
    "Dictionary",
    "Necklace",
    "Watch",
    "Sunglasses",
    "Handbag",
    "Belt",
    "Toy Car",
    "Doll",
    "Puzzle",
    "Lego Set",
    "pills",
    "meals",
    "Action Figure"
  ];

  const onSubmit = (data) => {
    // Handle the form submission
    console.log('Search Query:', data.searchQuery);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value.length > 2) {
      const filteredSuggestions = products.filter(product =>
        product.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-4/12 relative">
      <input
        type="text"
        placeholder="Search..."
        {...register("searchQuery", { required: true })}
        value={query}
        onChange={handleInputChange}
        className="border p-2 rounded-l-md w-full"
      />
      <button
        type="submit"
        className="bg-yellow-500 text-white px-4 py-2 rounded-r-md hover:bg-gray-400"
      >
        <BsSearch className="text-lg" />
      </button>
      {suggestions.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md mt-1 max-h-60 overflow-y-auto z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="p-2 cursor-pointer hover:bg-gray-200"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

export default SearchForm;
