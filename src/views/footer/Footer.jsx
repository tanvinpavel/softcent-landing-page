import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div>
             <footer id="footer">
        <div id="container">
        <div id="looking">
            <div id="flex-container">
                <div id="text">
                    <p>Looking for a Software Partner?</p>
                </div>
                <div id="btn">
                    <p>start a project</p>
                </div>
            </div>

        </div>

       
        <div id="address">
            <div class="sample">
                <img src="./img/logo.png" alt="" srcset=""/>
                <p>Get a fully stacked design team that will give you accessible design, exhaustive research, and an outstanding experience.</p>
                
                <h5>Email: info@softcent.eu</h5>
                <h5 style={{marginTop:"10px"}}>Phone: +(372) 57836500</h5>
                <div id="icon">
                    <i style={{color:"blue", marginRight:"10px"}} class="fa-brands fa-facebook"></i>
                    <i style={{marginRight:"10px"}}  class="fa-brands fa-whatsapp"></i>
                    <i  style={{marginRight:"10px"}} class="fa-brands fa-twitter"></i>
                    <i style={{marginRight:"10px"}}  class="fa-brands fa-instagram"></i>
                    
                </div>
            </div>
            <div class="sample2">
                <h2 style={{fontFamily:"Nunito"}}>Compnay</h2>
                
                <p>About us</p>
                <p>Ourportfolio</p>
                <p>Our Product</p>
                <p>Our Team</p>
                <p>Our Priceing</p>
                <p>Testimonials</p>
                <p>Contact Us</p>
                
            </div>
            <div class="sample3">
                <h2 style={{fontFamily:"Nunito"}}>Our Service</h2>
                <p>Marketing</p>
                <p>UI/UX Design</p>
                <p>Graphic Design </p>
                <p>Development</p>
                <p>New Products</p>
            </div>
            <div class="sample4">
                <h2 style={{fontFamily:"Nunito"}}>Supports</h2>
                <p>FAQs</p>
                <p>Support Policy</p>
                <p>Privacy Policy</p>
                <p>Trams of Service</p>
                <p>Refund Policy</p>
            </div>
        </div>

        <div id="hr">
            <hr/>
        </div>

        <div id="allright">
            <h3>© 2022, Softcent EU, A European IT company</h3>
        </div>
    </div>
    </footer>
    
        </div>
    );
};

export default Footer;