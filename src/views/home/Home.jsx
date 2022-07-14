import React from 'react';
import Header from '../header/Header';
import './home.css';

const Home = () => {
    return (
        <section className='home-section'>
            <div className='container'>
                <Header/>
                <div className='home-container'>
                    <div className="left-area">
                        <div className='main-heading'>
                            <span>Software services for</span>
                            <img src="./img/Underline.png" alt="" />
                            <span>startups without</span>
                            <span>limits..</span>
                        </div>
                        <p className='pp'>
                        We believe that great design should not be out of reach, so our services <br/> are less than half the price of a full-time designer.
                        </p>
                    </div>
                    <div className="right-area"></div>
                </div>
                <div className='video-section'>
                    <img id='video-img' src="./img/Video-Image.png" alt="" />
                    <img id='video-icon' src="./img/Video-Icon.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Home;