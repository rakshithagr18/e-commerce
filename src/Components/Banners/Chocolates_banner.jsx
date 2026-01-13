import React from 'react';
import banner_chocolates from '../Assets/Frontend_Assets/banner_chocolates.png';
import './BannerStyles.css';

const ChocolatesBanner = () => {
    return (
        <div className='banner'>
            <img src={banner_chocolates} alt="Chocolates" />
            <div className='banner-overlay'>
                <div className='banner-content'>
                    <h2 className='banner-title'>FLAT 10% OFF</h2>
                    <p className='banner-subtitle'>Terms and conditions available on selected products</p>
                    <button className='banner-btn'>EXPLORE MORE</button>
                </div>
            </div>
        </div>
    );
};

export default ChocolatesBanner;
