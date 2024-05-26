import React from 'react';

const ProductModal = ({ product, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-lg w-1/2">
        <button onClick={onClose} className="absolute top-0 right-0 p-2 text-xl">×</button>
        <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        <p className="text-gray-700 mb-2"><strong>Category:</strong> {product.category}</p>
        <p className="text-gray-700 mb-2"><strong>Price:</strong> {product.price} MWK</p>
      </div>
    </div>
  );
};

export default ProductModal;
