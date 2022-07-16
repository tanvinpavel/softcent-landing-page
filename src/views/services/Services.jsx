import React from 'react';
import './services.css';

const Service = () => {
    return (
        <div className="service-section">
            <div className="container">
                <div className='our-product-heading services-heading'>
                    <p className="section-heading">What We Do</p>
                    <img className="heading-img" src="./img/Underline.png" alt="" srcset=""/>
                </div>
                <div className="address">
                    <div class="firstdiv">
                        <div class="mainbrand">
                            <div className="brndimg"><img src="./img/branding.png" alt="" srcset=""/></div>
                            <div className="brandtext"><h2 style={{fontFamily:"Nunito"}}>Branding</h2></div>
                        </div>
                        
                        <p>Brand Strategy </p>
                        <p>Social media</p>
                        <p>Marketing Assets</p>
                        <p>Presentations</p>
                        <p>Build MVP Version</p>
                        <p>Pitch Deck</p>
                    
                        
                    </div>
                    <div class="secoundDiv">
                        <div class="mainbrand">
                            <div className="brndimg"><img src="./img/UX.png" alt="" srcset=""/></div>
                            <div className="brandtext"> <h2 style={{fontFamily:"Nunito"}}>Ui Design</h2></div>
                        </div>
                    
                        <p>User Interface</p>
                        <p>User Experience</p>
                        <p>Design System</p>
                        <p>Wireframe</p>
                        <p>Prototype</p>
                        <p>Website & Mobile App</p>
                        <p>IOS + Android</p>
                    </div>
                    <div class="thirdDiv">
                        <div class="mainbrand">
                            <div className="brndimg"><img src="./img/UX.png" alt="" srcset=""/></div>
                            <div className="brandtext"><h2 style={{fontFamily:"Nunito"}}>Development</h2></div>
                        </div>
                        
                        <p>Front End (HTML, CSS, React)</p>
                        <p>Backend (Node.js, MongoDB)</p>
                        <p>iOS (Swift)</p>
                        <p>Android (Kotlin, Flutter)</p>
                        <p>Blockchain Development (NFT)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;