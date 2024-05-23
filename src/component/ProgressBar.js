import React from 'react';

const ProgressBar = () => {
    return (
        <div className="relative flex items-center justify-between mb-6 py-4">
            <div className="flex-1 text-center relative z-10">
                <i className="fas fa-check-circle text-orange-500 text-2xl mb-2"></i>
                <p className="text-gray-600">Order confirmed</p>
            </div>
            <div className="flex-1 text-center relative z-10">
                <i className="fas fa-user-check text-orange-500 text-2xl mb-2"></i>
                <p className="text-gray-600">Picked by pachalo</p>
            </div>
            <div className="flex-1 text-center relative z-10">
                <i className="fas fa-box-open text-orange-500 text-2xl mb-2"></i>
                <p className="text-gray-600">On the way</p>
            </div>
            <div className="flex-1 text-center relative z-10">
                <i className="fas fa-clipboard-check text-orange-500 text-2xl mb-2"></i>
                <p className="text-gray-600">Ready for pickup</p>
            </div>
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-orange-500 z-0"></div>
        </div>
    );
};

export default ProgressBar;
