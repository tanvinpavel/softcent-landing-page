import React from 'react';
import './customer.css';

const Customer = () => {
    return (
        <div className='customer-section'>
            <div className="container">
                <div className='customer-heading'>
                    <p className='section-heading'>Our Customers</p>
                    <img className='heading-img' src="./img/Underline.png" alt="" />
                </div>
                <div className='brands'>
                    <div><img src="./img/brand-1.png" alt="" /></div>
                    <div><img src="./img/brand-2.png" alt="" /></div>
                    <div><img src="./img/brand-3.png" alt="" /></div>
                    <div><img src="./img/brand-4.png" alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default Customer;