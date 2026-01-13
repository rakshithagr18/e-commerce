import React from 'react';
import './CSS/shopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/Frontend_Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
    const context = React.useContext(ShopContext);
    const all_product = context?.all_product || [];

    // Filter products by category
    const filtered_products = all_product.filter(item => props.category === item.category);

    return (
        <div className='shop-category'>
            <div className='banner-container'>
                {props.banner}
            </div>
            <div className='shop-category-indexSort'>
                <p>
                    <span>Showing 1-12</span> out of {filtered_products.length} products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className='shop-category-products'>
                {filtered_products.length > 0 ? (
                    filtered_products.map((item, index) => (
                        <Item
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </div>
    );
};

export default ShopCategory;
