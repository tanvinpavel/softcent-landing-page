import React from 'react';
import "./aboutUs.css";

const AboutUs = () => {
    return (
        <div id="aboutus">
    <div id="container">
        <div id="workflowbanner">
            <h2 style={{fontFamily:"Overlock"}}>
                Talk About Us!
            </h2>
            <img src="./img/Underline.png" alt="" srcset=""/>
        </div>

        <div id="workflowDiv">
            <div class="aboutDiv1">
              <p><i  class="fa-solid fa-quote-left quote"></i>We had a bit of a slow and bumpy start, but after changing the designer on their side everything 
                went in a very good direction. The designers were talented and easy to work with.<i class="fa-solid fa-quote-right quote"></i></p>

                <div id="sofcentceo">
                    <div><img src="./img/Ellipse_person.png" alt=""/></div>
                    <div id="coText"><h3 style={{fontFamily:"Nunito"}}>Shuvo Roy</h3>
                    <p style={{margin: "-21px 0px"}}>Softcent Co-Founder</p>
                    </div>
                </div>

            </div>
            
            <div class="aboutDiv2">
             <img  src="./img/Ellipse_6.png" alt="" srcset=""/>
            </div>
        </div>
        </div>
</div>
    );
};

export default AboutUs;