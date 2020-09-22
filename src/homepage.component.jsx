import React from 'react';

import "./homepage.styles.scss";

const HomePage = () => (
    <div className = "homepage">
        <div className = "directory-menu">
            <div className = "menu-item">
                <div className = "content">
                    <h1 classNam = "title">Hats</h1>
                    <span className = "subtitle">Show Now</span>
                </div>
            </div>
            <div className = "menu-item">
                <div className = "content">
                    <h1 classNam = "title">Jackets</h1>
                    <span className = "subtitle">Show Now</span>
                </div>
            </div>
            <div className = "menu-item">
                <div className = "content">
                    <h1 classNam = "title">Sneakers</h1>
                    <span className = "subtitle">Show Now</span>
                </div>
            </div>
            <div className = "menu-item">
                <div className = "content">
                    <h1 classNam = "title">Womens</h1>
                    <span className = "subtitle">Show Now</span>
                </div>
            </div>
            <div className = "menu-item">
                <div className = "content">
                    <h1 classNam = "title">Mens</h1>
                    <span className = "subtitle">Show Now</span>
                </div>
            </div>
        </div>
    </div>


);

export default HomePage;