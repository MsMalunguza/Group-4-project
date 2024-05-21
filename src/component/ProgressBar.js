import React from 'react';

const ProgressBar = () => {
    return (
        <div className="flex justify-between items-center mb-6 relative">
            <div className="flex-1 text-center relative">
                <div className="bg-orange-500 w-6 h-6 rounded-full mx-auto z-10"></div>
                <p className="mt-2 text-gray-700">Order confirmed</p>
                <div className="absolute top-1/2 w-full h-0.5 bg-orange-500 left-0"></div>
            </div>
            <div className="flex-1 text-center relative">
                <div className="bg-orange-500 w-6 h-6 rounded-full mx-auto z-10"></div>
                <p className="mt-2 text-gray-700">Picked by courier</p>
                <div className="absolute top-1/2 w-full h-0.5 bg-orange-500 left-0"></div>
            </div>
            <div className="flex-1 text-center relative">
                <div className="bg-orange-500 w-6 h-6 rounded-full mx-auto z-10"></div>
                <p className="mt-2 text-gray-700">On the way</p>
                <div className="absolute top-1/2 w-full h-0.5 bg-gray-300 left-0"></div>
            </div>
            <div className="flex-1 text-center relative">
                <div className="bg-gray-300 w-6 h-6 rounded-full mx-auto z-10"></div>
                <p className="mt-2 text-gray-700">Ready for pickup</p>
            </div>
        </div>
    );
};

export default ProgressBar;