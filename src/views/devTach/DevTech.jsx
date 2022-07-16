import React, { useState } from 'react';
import './devTach.css';

const DevTech = () => {
    const [] = useState(false);
    return (
        <div className='dev-tech-section'>
            <div className="container">
                <div className='dev-tech-heading'>
                    <p className='section-heading'>Our Customers</p>
                    <img className='heading-img' src="./img/Underline.png" alt="" />
                </div>
                <ul className='nav'>
                    <li>
                        <a href="#a">Programming Languages</a>
                        <hr />
                    </li>
                    <li>
                        <a href='#b'>Frameworks</a>
                        <hr />
                    </li>
                    <li>
                        <a href='#c'>Database</a>
                        <hr />
                    </li>
                    <li>
                        <a href='#d'>Mobile Platforms</a>
                        <hr />
                    </li>
                </ul>
                <div className='brands'>
                    <div><img src="./img/tech-logo-1.png" alt="" /></div>
                    <div><img src="./img/tech-logo-2.png" alt="" /></div>
                    <div><img src="./img/tech-logo-3.png" alt="" /></div>
                    <div><img src="./img/tech-logo-4.png" alt="" /></div>
                    <div><img src="./img/tech-logo-5.png" alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default DevTech;