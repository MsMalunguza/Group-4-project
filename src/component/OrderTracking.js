import React from 'react';
import OrderDetails from './OrderDetails';
import ProgressBar from './ProgressBar';
import ProductList from './ProductList';

const orderDetails = {
    orderId: 'PMT 1',
    estimatedDelivery: '27 May 2024',
    DeliveredBy: 'PACHALO',
    contact: '0999473426',
    status: 'Picked by the pachalo',
    trackingNumber: 'BED/COM/14/22',
    items: [
        {
            name: 'Dell Laptop with 500GB HDD 8GB RAM',
            price: 'MWK 950,000',
            image: 'https://th.bing.com/th/id/OIP.EcV18qtw-8fLEwAuobRPxgAAAA?rs=1&pid=ImgDetMain'
        },
        {
            name: 'HP Laptop with 500GB HDD 8GB RAM',
            price: 'MWK 1,000,050',
            image: 'https://th.bing.com/th/id/OIP.992DqR-QTcbBODsiyJ1HTAAAAA?w=474&h=402&rs=1&pid=ImgDetMain'
        },
        {
            name: 'ACER Laptop with 500GB HDD 8GB RAM',
            price: 'MWK 650,000',
            image: 'https://th.bing.com/th/id/OIP.gzzxfzqRZzfbWSn5iU41lQHaEz?w=310&h=201&c=7&r=0&o=5&pid=1.7'
        }
    ]
};

const OrderTracking = () => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
                <h2 className="text-xl font-semibold mb-4">My Orders / Tracking</h2>
                <OrderDetails details={orderDetails} />
                <ProgressBar />
                <ProductList items={orderDetails.items} />
                <div className="text-right mt-4">
                    <button className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                        Back to orders
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderTracking;
