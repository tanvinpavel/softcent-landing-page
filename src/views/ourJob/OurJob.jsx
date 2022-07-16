import React from 'react';
import './ourJob.css';

const OurJob = () => {
    return (
        <div className='ourJob-section'>
            <div className="container">
                <div className='ourJob-heading'>
                    <p className='section-heading'>Our Customers</p>
                    <img className='heading-img' src="./img/Underline.png" alt="" />
                </div>
                <div className='ourJob-main'>
                    <div className='col'>
                        <div className='col-heading'>
                            <img src="./img/branding.png" alt="" />
                            <p>Branding</p>
                        </div>
                        <div className='ourJob-properties'>
                            <p>Brand Strategy</p>
                            <p>Social media</p>
                            <p>Marketing Assets</p>
                            <p>Presentations</p>
                            <p>Build MVP Version</p>
                            <p>Pitch Deck</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='col-heading'>
                            <img src="./img/branding.png" alt="" />
                            <p>Design</p>
                        </div>
                        <div className='ourJob-properties'>
                        <p>User Interface</p>
                        <p>User Experience</p>
                        <p>Design System</p>
                        <p>Wireframe</p>
                        <p>Prototype</p>
                        <p>Website & Mobile App</p>
                        <p>IOS + Android</p>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='col-heading'>
                            <img src="./img/branding.png" alt="" />
                            <p>Development</p>
                        </div>
                        <div className='ourJob-properties'>
                        <p>Front End (HTML, CSS, React)</p>
                        <p>Backend (Node.js, MongoDB)</p>
                        <p>iOS (Swift)</p>
                        <p>Android (Kotlin, Flutter)</p>
                        <p>Blockchain Development (NFT)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurJob;