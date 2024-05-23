import React from 'react';
import CartItem from './CartItem';
import PromoCode from './PromoCode';

const Cart = ({ items, updateQuantity, removeItem, calculateTotal }) => {
  return (
    <div className="w-1/2 mx-auto border border-gray-300 p-5 shadow-md">
      <div className='flex justify-between p-3 font-bold border-b border-gray-300'>
        <div className='w-1/5 text-center'>PRODUCTS</div>
        <div className='w-1/5 text-center'>SIZE</div>
        <div className='w-1/5 text-center'>QUALITY</div>
        <div className='w-1/5 text-center'>REMOVE</div>
        <div className='w-1/5 text-center'>PRICE</div>
      </div>
      {items.map(item => (
        <CartItem 
          key={item.id} 
          item={item} 
          updateQuantity={updateQuantity} 
          removeItem={removeItem} 
        />
      ))}
      <div className="mt-5">
        <div className="flex justify-between py-2">
          <span>Discount</span>
          <span>Mkw0.00</span>
        </div>
        <div className="flex justify-between py-2">
          <span>Delivery</span>
          <span>Mkw0.00</span>
        </div>
        <div className="flex justify-between py-2">
          <span>Subtotal</span>
          <span>Mkw{calculateTotal()}</span>
        </div>
        <div className="flex justify-between py-2 font-bold">
          <span>Total</span>
          <span>Mkw{calculateTotal()}</span>
        </div>
        <PromoCode />
        <button className="w-full py-2 mt-5 bg-yellow-500 text-white">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
