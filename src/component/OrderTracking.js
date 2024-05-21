import React from 'react';
import OrderDetails from './OrderDetails';
import ProgressBar from './ProgressBar';
import ProductList from './ProductList';

const orderDetails = {
    orderId: 'OD45345345435',
    estimatedDelivery: '29 Nov 2019',
    shippingBy: 'BLUEDART',
    contact: '+1598675986',
    status: 'Picked by the courier',
    trackingNumber: 'BD045903594059',
    items: [
        { name: 'Dell Laptop with 500GB HDD 8GB RAM', price: '$950', image: 'https://via.placeholder.com/100' },
        { name: 'HP Laptop with 500GB HDD 8GB RAM', price: '$850', image: 'https://via.placeholder.com/100' },
        { name: 'ACER Laptop with 500GB HDD 8GB RAM', price: '$650', image: 'https://via.placeholder.com/100' }
    ]
};

const OrderTracking = () => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4">My Orders / Tracking</h2>
                <OrderDetails details={orderDetails} />
                <ProgressBar />
                <ProductList items={orderDetails.items} />
                <div className="text-right mt-6">
                    <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Back to orders</button>
                </div>
            </div>
        </div>
    );
};

export default OrderTracking;