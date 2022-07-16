import React from 'react';
import './designTech.css';

const DesignTech = () => {
    return (
        <div className='design-tech-section'>
            <div className="container">
                <div className='design-tech-heading'>
                    <p className='section-heading'>Our Customers</p>
                    <img className='heading-img' src="./img/Underline.png" alt="" />
                </div>
                <div className='brands'>
                    <div><img src="./img/design-logo-1.png" alt="" /></div>
                    <div><img src="./img/design-logo-2.png" alt="" /></div>
                    <div><img src="./img/design-logo-3.png" alt="" /></div>
                    <div><img src="./img/design-logo-4.png" alt="" /></div>
                    <div><img src="./img/design-logo-5.png" alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default DesignTech;