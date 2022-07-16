import React from 'react';
import './header.css';

const Header = () => {
    return (
        <header className='header-container'>
            <div className="logo">
                <img src="./img/logo.png" alt="logo" />
            </div>
            <div className="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#home">About</a></li>
                    <li><a href="#home">Work</a></li>
                    <li><a href="#home">Premium products</a></li>
                    <li><a href="#home">Blog</a></li>
                    <li><a className='header-btn' href="#home">Start a project</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;