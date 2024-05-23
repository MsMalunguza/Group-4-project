import React, { useRef } from 'react';

const ProductList = ({ items }) => {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className="relative overflow-hidden">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                <button
                    onClick={scrollLeft}
                    className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                <button
                    onClick={scrollRight}
                    className="bg-gray-700 text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
            <div ref={scrollContainerRef} className="overflow-x-auto whitespace-nowrap scroll-smooth">
                <div className="flex space-x-4">
                    {items.map((item, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center inline-block w-72">
                            <div className="flex justify-center items-center h-32 mb-4">
                                <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h3>
                                <p className="text-gray-600">{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;