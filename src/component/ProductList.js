import React from 'react';

const ProductList = ({ items }) => {
    return (
        <div className="product-list">
            {items.map((item, index) => (
                <div key={index} className="product-card">
                    <div className="product-image-container">
                        <img src={item.image} alt={item.name} className="product-image" />
                    </div>
                    <div className="product-info">
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
