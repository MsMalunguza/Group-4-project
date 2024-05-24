import { useState } from "react";
import Cart from './Cart'
import Header from "./Header";
import Footer from "./Footer";

export default function CartWrapper() {
    
  const [cartItems, setCartItems] = useState([
    { id: 1, description: 'HP Intel 13th Gen', size: 'M', quantity: 1, price: 500000 },
    { id: 2, description: 'Dell XPS 15.6', size: 'M', quantity: 1, price: 450000 },
    { id: 3, description: 'T-shirt', size: 'M', quantity: 1, price: 9000 },
  ]);

  const updateQuantity = (id, quantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const removeItem = id => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  <></>
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  return (
    <>
    <div>
        <Cart items={cartItems} updateQuantity={updateQuantity} removeItem={removeItem} calculateTotal={calculateTotal}></Cart>
    </div>

    <Footer></Footer>
    </>
  );
}