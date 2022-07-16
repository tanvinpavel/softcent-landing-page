import React from 'react';
import './portfolio.css';

const Portfolio = () => {
    return (
        <div id="portfolioSection">
        <div id="container">
            <div id="herodiv">
            <div id="bannertxt"><h3>Our Portfolio</h3>
            <img src="./img/Underline.png" alt="" srcset=""/>
            </div>
            <div id="aroowsign">
                <div><p><i style={{marginRight:"10px"}} class="fa-solid fa-arrow-left"></i></p></div>
                <div><p><i id="sd" style={{color : "#2D5BFF"}} class="fa-solid fa-circle-arrow-right"></i></p></div>
            </div>
        </div>
    <div id="imgsection">
            <div class="imgtDiv">
                <img src="./img/portfolio_1.png" alt="" srcset=""/>
                <h4 >Color System Design</h4>
            </div>
            <div class="imgtDiv">
                <img src="./img/portfolio_2.png" alt="" srcset=""/>
                <h4>Logo Design</h4>
            </div>
            <div class="imgtDiv">
                <img src="./img/portfolio_1.png" alt="" srcset=""/>
                <h4>UI/UX Design</h4>
            </div>
    </div>
    
    <div id="seeAll">
        <div id="txt"><p>See All Protfolio</p></div>
    </div>
    
       </div>
    
    </div>
    );
};

export default Portfolio;