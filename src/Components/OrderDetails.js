
import React from 'react';

const OrderDetails = ({ details }) => {
    return (
        <div className="flex justify-between border border-gray-300 rounded-lg p-4 mb-6">
            <div className="flex flex-col">
                <p><strong>Order ID:</strong> {details.orderId}</p>
                <p><strong>Estimated Delivery time:</strong> {details.estimatedDelivery}</p>
            </div>
            <div className="flex flex-col text-right">
                <p><strong>Delivered BY:</strong> {details.DeliveredBy}, | {details.contact}</p>
                <p><strong>Status:</strong> {details.status}</p>
                <p><strong>Tracking #:</strong> {details.trackingNumber}</p>
            </div>
        </div>
    );
};

export default OrderDetails;
