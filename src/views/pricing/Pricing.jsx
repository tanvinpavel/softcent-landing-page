import React from 'react';
import './pricing.css';

const Pricepackage = () => {
    return ( 
        <div className="price-Section">
            <div className="container">
                <div className="customer-heading">
                    <h2 className="section-heading">Pricing Package Choose Your Plan</h2>
                    <img className="heading-img" src="./img/Underline.png" alt="" srcset=""/>
                    <p className="pricing-dialog">We believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.</p>
                    <div className="subs-btn">
                        <div className="pricing-btn gray"><p>Monthly</p></div>
                        <div className="pricing-btn blue" ><p>Yearly</p></div>
                    </div>
                </div>

           
        <div className="pricing-card">
            <div class="card card-gray">
                    <div class="inner-container">
                    <div class="card-header">
                        <div className="card-hading">
                            <h2>Marketing</h2>
                            <hr/>
                        </div> 
                        <div><h4>$899/mo</h4></div> 
                    </div>
                    
                    <div className="pricing-level">
                        <p><i class="fa-solid fa-check"></i> Dedicated Designer</p>
                        <p><i class="fa-solid fa-check"></i> Unlimited requests</p>
                        <p><i class="fa-solid fa-check"></i> Unlimited brand profiles</p>
                        <p><i class="fa-solid fa-check"></i> Native source files</p>
                        <p><i class="fa-solid fa-check"></i> Real-time collaboration</p>
                        <p><i class="fa-solid fa-check"></i> Banner Ads</p>
                        <p><i class="fa-solid fa-check"></i> Clothing & Merchandise Design</p>
                        <p><i class="fa-solid fa-check"></i> Packaging & Label</p>
                        <p><i class="fa-solid fa-check"></i> Logo & Brand Guide</p>
                    </div>
                    <button className="card-btn">$899/mo</button>
                </div>
            </div>

            <div class="card card-blue">
                <div class="inner-container">
                <div class="card-header">
                    <div className="card-hading">
                        <h2>UI/UX Design</h2>
                        <hr/>
                    </div>
                    
                    <div><h4>$899/mo</h4></div>
                </div>
               
                <div className='pricing-level'>
                    <p><i class="fa-solid fa-check"></i> Dedicated Designer</p>
                    <p><i class="fa-solid fa-check"></i> Unlimited requests</p>
                    <p><i class="fa-solid fa-check"></i> Unlimited brand profiles</p>
                    <p><i class="fa-solid fa-check"></i> Native source files</p>
                    <p><i class="fa-solid fa-check"></i> Real-time collaboration</p>
                    <p><i class="fa-solid fa-check"></i> Banner Ads</p>
                    <p><i class="fa-solid fa-check"></i> Clothing & Merchandise Design</p>
                    <p><i class="fa-solid fa-check"></i> Packaging & Label</p>
                    <p><i class="fa-solid fa-check"></i> Logo & Brand Guide</p>
                </div>
                
                <button className="card-btn">$899/mo</button>
                </div>
            </div>

            <div class="card card-gray">
                <div class="inner-container">
                <div class="card-header">
                    <div className="card-hading">
                        <h2>Development</h2>
                        <hr/>
                    </div>
                    <div><h4>$899/mo</h4></div>
                </div>
                <div className='pricing-level'>
                    <p><i class="fa-solid fa-check"></i> Dedicated Designer</p>
                    <p><i class="fa-solid fa-check"></i> Unlimited requests</p>
                    <p><i class="fa-solid fa-check"></i> Unlimited brand profiles</p>
                    <p><i class="fa-solid fa-check"></i> Native source files</p>
                    <p><i class="fa-solid fa-check"></i> Real-time collaboration</p>
                    <p><i class="fa-solid fa-check"></i> Banner Ads</p>
                    <p><i class="fa-solid fa-check"></i> Clothing & Merchandise Design</p>
                    <p><i class="fa-solid fa-check"></i> Packaging & Label</p>
                    <p><i class="fa-solid fa-check"></i> Logo & Brand Guide</p>
                </div>
                <button className="card-btn">$899/mo</button>
            </div>
        </div>

    

       </div>
    </div>
    </div>
    );
};

export default Pricepackage;