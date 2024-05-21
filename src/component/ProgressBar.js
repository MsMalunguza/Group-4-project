import React from 'react';

const ProgressBar = () => {
    return (
        <div className="progress-bar">
            <div className="progress-step">
                <div className="circle"></div>
                <p>Order confirmed</p>
                <div className="line"></div>
            </div>
            <div className="progress-step">
                <div className="circle"></div>
                <p>Picked by courier</p>
                <div className="line"></div>
            </div>
            <div className="progress-step">
                <div className="circle"></div>
                <p>On the way</p>
                <div className="line gray"></div>
            </div>
            <div className="progress-step">
                <div className="circle gray"></div>
                <p>Ready for pickup</p>
            </div>
        </div>
    );
};

export default ProgressBar;
