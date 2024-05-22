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
            image: 'https://www.bing.com/images/search?view=detailV2&ccid=HxChc%2bDv&id=28969CAFE97DD2BA36EB9DB19262E1FBCB7CECF8&thid=OIP.HxChc-Dv79wFzp0X1BtNZgHaHa&mediaurl=https%3a%2f%2fimagehost.vendio.com%2fa%2f35071122%2faview%2fHP840G1.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.1f10a173e0efefdc05ce9d17d41b4d66%3frik%3d%252bOx8y%252fvhYpKxnQ%26pid%3dImgRaw%26r%3d0&exph=1500&expw=1500&q=HP+Laptop+with+500GB+HDD+8GB+RAM&simid=608014052454443654&FORM=IRPRST&ck=FF98518A496A41CE35892400E1D0535C&selectedIndex=3&itb=0'
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
