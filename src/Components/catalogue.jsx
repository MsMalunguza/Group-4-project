import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';

const products = [
  // Clothing
  { id: 1, name: 'T-Shirt', category: 'Clothing', price: 3000 },
  { id: 2, name: 'Jeans', category: 'Clothing', price: 4500 },
  { id: 3, name: 'Jacket', category: 'Clothing', price: 6000 },
  { id: 4, name: 'Shirt', category: 'Clothing', price: 3500 },
  { id: 5, name: 'Skirt', category: 'Clothing', price: 4000 },
  { id: 6, name: 'Dress', category: 'Clothing', price: 7000 },
  { id: 7, name: 'Sweater', category: 'Clothing', price: 5000 },
  { id: 8, name: 'Blouse', category: 'Clothing', price: 3000 },
  { id: 9, name: 'Trousers', category: 'Clothing', price: 5500 },
  { id: 10, name: 'Shorts', category: 'Clothing', price: 3000 },
  { id: 11, name: 'Socks', category: 'Clothing', price: 3500 },
  { id: 12, name: 'Cap', category: 'Clothing', price: 3000 },

  // Stationery
  { id: 13, name: 'Notebook', category: 'Stationery', price: 3000 },
  { id: 14, name: 'Pen', category: 'Stationery', price: 3500 },
  { id: 15, name: 'Pencil', category: 'Stationery', price: 3000 },
  { id: 16, name: 'Eraser', category: 'Stationery', price: 3000 },
  { id: 17, name: 'Marker', category: 'Stationery', price: 3000 },
  { id: 18, name: 'Ruler', category: 'Stationery', price: 3000 },
  { id: 19, name: 'Stapler', category: 'Stationery', price: 4000 },
  { id: 20, name: 'Scissors', category: 'Stationery', price: 3500 },
  { id: 21, name: 'Glue', category: 'Stationery', price: 3000 },
  { id: 22, name: 'Calculator', category: 'Stationery', price: 7000 },
  { id: 23, name: 'Folders', category: 'Stationery', price: 3000 },
  { id: 24, name: 'Highlighter', category: 'Stationery', price: 3000 },

  // Toys
  { id: 25, name: 'Lego Set', category: 'Toys', price: 5000 },
  { id: 26, name: 'Action Figure', category: 'Toys', price: 4000 },
  { id: 27, name: 'Puzzle', category: 'Toys', price: 3000 },
  { id: 28, name: 'Doll', category: 'Toys', price: 3500 },
  { id: 29, name: 'Car Toy', category: 'Toys', price: 3000 },
  { id: 30, name: 'Board Game', category: 'Toys', price: 6000 },
  { id: 31, name: 'Building Blocks', category: 'Toys', price: 3000 },
  { id: 32, name: 'Ball', category: 'Toys', price: 3000 },
  { id: 33, name: 'Train Set', category: 'Toys', price: 5500 },
  { id: 34, name: 'Remote Control Car', category: 'Toys', price: 7000 },
  { id: 35, name: 'Stuffed Animal', category: 'Toys', price: 3000 },
  { id: 36, name: 'Yo-Yo', category: 'Toys', price: 3000 },

  // Food
  { id: 37, name: 'Rice', category: 'Food', price: 3000 },
  { id: 38, name: 'Bread', category: 'Food', price: 3500 },
  { id: 39, name: 'Milk', category: 'Food', price: 4000 },
  { id: 40, name: 'Eggs', category: 'Food', price: 5000 },
  { id: 41, name: 'Cheese', category: 'Food', price: 6000 },
  { id: 42, name: 'Chicken', category: 'Food', price: 7000 },
  { id: 43, name: 'Fish', category: 'Food', price: 8000 },
  { id: 44, name: 'Apples', category: 'Food', price: 3000 },
  { id: 45, name: 'Bananas', category: 'Food', price: 3500 },
  { id: 46, name: 'Oranges', category: 'Food', price: 4000 },
  { id: 47, name: 'Tomatoes', category: 'Food', price: 3000 },
  { id: 48, name: 'Potatoes', category: 'Food', price: 3000 },

  // Accessories
  { id: 49, name: 'Watch', category: 'Accessories', price: 10000 },
  { id: 50, name: 'Belt', category: 'Accessories', price: 5000 },
  { id: 51, name: 'Sunglasses', category: 'Accessories', price: 8000 },
  { id: 52, name: 'Hat', category: 'Accessories', price: 4000 },
  { id: 53, name: 'Scarf', category: 'Accessories', price: 3000 },
  { id: 54, name: 'Gloves', category: 'Accessories', price: 3000 },
  { id: 55, name: 'Wallet', category: 'Accessories', price: 7000 },
  { id: 56, name: 'Keychain', category: 'Accessories', price: 3000 },
  { id: 57, name: 'Earrings', category: 'Accessories', price: 6000 },
  { id: 58, name: 'Necklace', category: 'Accessories', price: 9000 },
  { id: 59, name: 'Bracelet', category: 'Accessories', price: 4000 },
  { id: 60, name: 'Ring', category: 'Accessories', price: 3000 },

  // Electronics
  { id: 61, name: 'Smartphone', category: 'Electronics', price: 30000 },
  { id: 62, name: 'Laptop', category: 'Electronics', price: 50000 },
  { id: 63, name: 'Tablet', category: 'Electronics', price: 35000 },
  { id: 64, name: 'Smartwatch', category: 'Electronics', price: 15000 },
  { id: 65, name: 'Headphones', category: 'Electronics', price: 8000 },
  { id: 66, name: 'Speaker', category: 'Electronics', price: 12000 },
  { id: 67, name: 'Camera', category: 'Electronics', price: 20000 },
  { id: 68, name: 'Printer', category: 'Electronics', price: 10000 },
  { id: 69, name: 'Monitor', category: 'Electronics', price: 25000 },
  { id: 70, name: 'Mouse', category: 'Electronics', price: 3000 },
  { id: 71, name: 'Keyboard', category: 'Electronics', price: 4000 },
  { id: 72, name: 'USB Drive', category: 'Electronics', price: 3000 },

  // Medications
  { id: 73, name: 'Aspirin', category: 'Medications', price: 3000 },
  { id: 74, name: 'Ibuprofen', category: 'Medications', price: 3000 },
  { id: 75, name: 'Paracetamol', category: 'Medications', price: 3000 },
  { id: 76, name: 'Cough Syrup', category: 'Medications', price: 5000 },
  { id: 77, name: 'Antibiotics', category: 'Medications', price: 7000 },
  { id: 78, name: 'Vitamins', category: 'Medications', price: 6000 },
  { id: 79, name: 'Allergy Medicine', category: 'Medications', price: 3000 },
];

export default function Catalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearchTerm;
  });

  return (
    <>
      <Header />
      <div className="h-screen flex flex-col items-center p-4 bg-gray-100">
        <header className="flex items-center justify-between w-full p-4 bg-white shadow">
          <h1 className="text-2xl font-bold">Catalog</h1>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search products..."
              className="p-2 border rounded"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <FaSearch />
          </div>
        </header>

        <div className="flex flex-col md:flex-row w-full mt-4">
          <aside className="w-full md:w-1/4 p-4 bg-white shadow rounded">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>
            <div>
              <h3 className="font-medium mb-2">Category</h3>
              <ul>
                {['All', 'Clothing', 'Stationery', 'Toys', 'Food', 'Accessories', 'Electronics', 'Medications'].map(category => (
                  <li key={category} className="mb-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="mr-2"
                      />
                      {category}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <main className="w-full md:w-3/4 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map(product => (
                <div key={product.id} className="p-4 bg-white shadow rounded">
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <p className="text-lg font-semibold">{product.price} MWK</p>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
      
    </>
  );
}
