import React from 'react';
import { FaCheckCircle, FaUserCheck, FaBoxOpen, FaClipboardCheck } from 'react-icons/fa';

const ProgressBar = () => {
    return (
        <div className="relative flex items-center justify-between mb-6 py-4">
            <div className="flex-1 text-center relative z-10">
                <FaCheckCircle className="text-orange-500 text-2xl mb-2" />
                <p className="text-gray-600">Order confirmed</p>
            </div>
            <div className="flex-1 text-center relative z-10">
                <FaUserCheck className="text-orange-500 text-2xl mb-2" />
                <p className="text-gray-600">Picked by pachalo</p>
            </div>
            <div className="flex-1 text-center relative z-10">
                <FaBoxOpen className="text-orange-500 text-2xl mb-2" />
                <p className="text-gray-600">On the way</p>
            </div>
            <div className="flex-1 text-center relative z-10">
                <FaClipboardCheck className="text-orange-500 text-2xl mb-2" />
                <p className="text-gray-600">Ready for pickup</p>
            </div>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-orange-500 z-0"></div>
        </div>
    );
};

export default ProgressBar;
