import React from 'react';

const ProductList = ({ items }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {items.map((item, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md flex items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;