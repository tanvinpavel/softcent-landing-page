import React from 'react';
import './ourProduct.css'

const OurProduct = () => {
    return (
        <div className='our-product-section'>
            <div className='container'>
                <div className="our-product-top">
                    <div className="our-product-heading">
                        <p className='section-heading'>Our Product</p>
                        <img className='heading-img' src="./img/Underline.png" alt="" />
                    </div>
                </div>
                <div className="our-product-bottom">
                    <div>
                        <p>We believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.</p>
                    </div>
                    <div>
                        <button className='my-btn'>See More</button>
                    </div>
                </div>
            </div>
                <div className="products p-section-top">
                    <div className="product-left">
                        <div className='product-info'>
                            <h1>SwipeXYZ Product</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <button className='my-btn'>View product</button>
                        </div>
                    </div>
                    <div className="product-right">
                        <img src="./img/product_3.png" alt="" />
                    </div>
                </div>
                <div className="products p-section-bottom">
                    <div className="product-right">
                        <img src="./img/product_4.png" alt="" />
                    </div>
                    <div className="product-left">
                        <div className='product-info'>
                            <h1>SwipeXYZ Product</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <button className='my-btn'>View product</button>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default OurProduct;