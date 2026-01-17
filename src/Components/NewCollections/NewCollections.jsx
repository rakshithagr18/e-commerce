import React, { useRef } from 'react';
import './NewCollections.css';
import new_collection from '../Assets/Frontend_Assets/new_collections';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const NewCollections = () => {
    const sliderRef = useRef(null);

    const slideLeft = () => {
        sliderRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    };

    const slideRight = () => {
        sliderRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    };

    return (
        <section className="new-collections" id="new-collections">
            <h2>NEW COLLECTIONS</h2>
            <hr />

            <div className="slider-container">
                <button className="slider-btn left" onClick={slideLeft}>
                    <FaChevronLeft />
                </button>

                <div className="new-collections-row" ref={sliderRef}>
                    {new_collection.map((item) => (
                        <div className="nc-card" key={item.id}>
                            <div className="nc-img-box">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <h3 className="nc-name">{item.name}</h3>
                            <div className="nc-prices">
                                <span className="nc-old">₹{item.old_price}</span>
                                <span className="nc-new">₹{item.new_price}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="slider-btn right" onClick={slideRight}>
                    <FaChevronRight />
                </button>
            </div>
        </section>
    );
};

export default NewCollections;
