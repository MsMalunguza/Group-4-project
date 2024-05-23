import React, { useState } from 'react';

const PromoCode = () => {
  const [promoCode, setPromoCode] = useState('');

  const handleApplyPromo = () => {
    alert(`Promo code ${promoCode} applied!`);
    setPromoCode('');
  };

  return (
    <div className="flex justify-between py-2 mt-4">
      <input 
        type="text" 
        value={promoCode} 
        onChange={(e) => setPromoCode(e.target.value)} 
        placeholder="Please enter promo code" 
        className="flex-1 p-2 border border-gray-300 mr-2"
      />
      <button onClick={handleApplyPromo} className="bg-yellow-500 text-white px-4">Apply Discount</button>
    </div>
  );
};

export default PromoCode;