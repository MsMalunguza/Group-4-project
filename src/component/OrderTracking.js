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
        {
            name: 'Dell Laptop with 500GB HDD 8GB RAM',
            price: '$950',
            image: 'https://example.com/images/dell-laptop.jpg'
        },
        {
            name: 'HP Laptop with 500GB HDD 8GB RAM',
            price: '$850',
            image: 'https://example.com/images/hp-laptop.jpg'
        },
        {
            name: 'ACER Laptop with 500GB HDD 8GB RAM',
            price: '$650',
            image: 'https://example.com/images/acer-laptop.jpg'
        }
    ]
};

const OrderTracking = () => {
    return (
        <div className="container">
            <div className="order-tracking card">
                <h2>My Orders / Tracking</h2>
                <OrderDetails details={orderDetails} />
                <ProgressBar />
                <ProductList items={orderDetails.items} />
                <div className="text-right">
                    <button className="button">Back to orders</button>
                </div>
            </div>
        </div>
    );
};

export default OrderTracking;
