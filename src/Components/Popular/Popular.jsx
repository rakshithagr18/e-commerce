import React from 'react';
import './Popular.css';
import data_product from '../Assets/Frontend_Assets/data';

const Popular = () => {
    return (
        <section className="popular">
            <h1>POPULAR IN DRY FRUITS</h1>
            <hr />

            <div className="popular-row">
                {data_product.map((item) => (
                    <div className="popular-card" key={item.id}>
                        <div className="image-container">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <h3>{item.name}</h3>
                        <div className="price">
                            <span className="old-price">₹{item.old_price}</span>
                            <span className="new-price">₹{item.new_price}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Popular;
