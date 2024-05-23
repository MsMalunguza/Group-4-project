import React from 'react';

const ProgressBar = () => {
    return (
        <div className="progress-bar">
            <div className="progress-step completed">
                <i className="fas fa-check-circle icon"></i>
                <p>Order confirmed</p>
            </div>
            <div className="progress-step completed">
                <i className="fas fa-user-check icon"></i>
                <p>Picked by pachalo</p>
            </div>
            <div className="progress-step">
                <i className="fas fa-box-open icon"></i>
                <p>On the way</p>
            </div>
            <div className="progress-step">
                <i className="fas fa-clipboard-check icon"></i>
                <p>Ready for pickup</p>
            </div>
            <div className="progress-line"></div>
        </div>
    );
};

export default ProgressBar;