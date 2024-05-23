import React from 'react';

const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-200">
      <div className="w-1/5 text-center">{item.description}</div>
      <div className="w-1/5 text-center">{item.size}</div>
      <div className="w-1/5 flex justify-center items-center">
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 border border-gray-300">-</button>
        <span className="mx-2">{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 border border-gray-300">+</button>
      </div>
      <div className="w-1/5 text-center">
        <button onClick={() => removeItem(item.id)} className="text-yellow-500">remove</button>
      </div>
      <div className="w-1/5 text-center">Mkw{item.price}</div>
    </div>
  );
};

export default CartItem;