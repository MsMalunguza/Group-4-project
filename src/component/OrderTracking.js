import React from 'react';
import OrderDetails from './OrderDetails';
import ProgressBar from './ProgressBar';
import ProductList from './ProductList';

const orderDetails = {
    orderId: 'PMT 1',
    estimatedDelivery: '27 May 2024',
    shippingBy: 'PACHALO',
    contact: '0999473426',
    status: 'Picked by the pachalo',
    trackingNumber: 'BED/COM/14/22',
    items: [
        {
            name: 'Dell Laptop with 500GB HDD 8GB RAM',
            price: '$950',
            image: 'https://th.bing.com/th/id/OIP.EcV18qtw-8fLEwAuobRPxgAAAA?rs=1&pid=ImgDetMain'
        },
        {
            name: 'HP Laptop with 500GB HDD 8GB RAM',
            price: '$850',
            image: 'https://th.bing.com/th/id/OIP.992DqR-QTcbBODsiyJ1HTAAAAA?w=474&h=402&rs=1&pid=ImgDetMain'
        },
        {
            name: 'ACER Laptop with 500GB HDD 8GB RAM',
            price: '$650',
            image: 'https://th.bing.com/th/id/OIP.gzzxfzqRZzfbWSn5iU41lQHaEz?w=310&h=201&c=7&r=0&o=5&pid=1.7'
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