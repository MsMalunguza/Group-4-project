import React from 'react';

const OrderDetails = ({ details }) => {
    return (
        <div className="order-details mb-6 border-b border-gray-300 pb-4">
            <div className="flex justify-between items-center mb-2">
                <div>
                    <p><strong>Order ID:</strong> {details.orderId}</p>
                    <p><strong>Estimated Delivery time:</strong> {details.estimatedDelivery}</p>
                </div>
                <div className="text-right">
                    <p><strong>Shipping BY:</strong> {details.shippingBy}, | {details.contact}</p>
                    <p><strong>Status:</strong> {details.status}</p>
                    <p><strong>Tracking #:</strong> {details.trackingNumber}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
