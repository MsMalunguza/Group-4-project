import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';

const products = [
  { id: 1, name: 'T-Shirt', category: 'Clothing', price: 20 },
  { id: 2, name: 'Notebook', category: 'Stationery', price: 5 },
  { id: 3, name: 'Jeans', category: 'Clothing', price: 40 },
  { id: 4, name: 'Pen', category: 'Stationery', price: 2 },
  { id: 5, name: 'Lego Set', category: 'Toys', price: 50 },
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
    <Header></Header>
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
              {['All', 'Clothing', 'Stationery', 'Toys'].map(category => (
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
                <p className="text-lg font-semibold">${product.price}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}
