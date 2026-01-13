import React from 'react';
import banner_dryfruits from '../Assets/Frontend_Assets/banner_dryfruits.png';
import './BannerStyles.css';

const DryFruitsBanner = () => {
    return (
        <div className='banner'>
            <img src={banner_dryfruits} alt="Dry Fruits" />
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

export default DryFruitsBanner;
