import React from 'react';

const OrderDetails = ({ details }) => {
    return (
        <div className="order-details">
            <div className="order-info">
                <p><strong>Order ID:</strong> {details.orderId}</p>
                <p><strong>Estimated Delivery time:</strong> {details.estimatedDelivery}</p>
            </div>
            <div className="shipping-info">
                <p><strong>Shipping BY:</strong> {details.shippingBy}, | {details.contact}</p>
                <p><strong>Status:</strong> {details.status}</p>
                <p><strong>Tracking #:</strong> {details.trackingNumber}</p>
            </div>
        </div>
    );
};

export default OrderDetails