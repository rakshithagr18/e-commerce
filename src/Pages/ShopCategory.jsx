import React, { useContext, useState, useRef, useEffect } from "react";
import "./CSS/shopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/Frontend_Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);
    const [openSort, setOpenSort] = useState(false);
    const [selectedSort, setSelectedSort] = useState("Sort by");
    const dropdownRef = useRef(null);

    // Filter by category
    const filtered_products = all_product.filter(
        (item) => item.category === props.category
    );

    // Sorting logic
    const sortedProducts = [...filtered_products].sort((a, b) => {
        if (selectedSort === "Price: Low to High") {
            return a.new_price - b.new_price;
        }
        if (selectedSort === "Price: High to Low") {
            return b.new_price - a.new_price;
        }
        if (selectedSort === "Newest First") {
            return b.id - a.id;
        }
        return 0;
    });

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpenSort(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSortSelect = (option) => {
        setSelectedSort(option);
        setOpenSort(false); // auto close
    };

    return (
        <div className="shop-category">
            <div className="banner-container">{props.banner}</div>

            {/* SORT BAR */}
            <div className="shop-category-indexSort">
                <p>
                    <span>Showing 1–{sortedProducts.length}</span> out of{" "}
                    {sortedProducts.length} products
                </p>

                {/* SORT DROPDOWN */}
                <div className="sort-wrapper" ref={dropdownRef}>
                    <div
                        className="shopcategory-sort"
                        onClick={() => setOpenSort(!openSort)}
                    >
                        {selectedSort}
                        <img src={dropdown_icon} alt="dropdown" />
                    </div>

                    {openSort && (
                        <ul className="sort-dropdown">
                            <li onClick={() => handleSortSelect("Price: Low to High")}>
                                Price: Low to High
                            </li>
                            <li onClick={() => handleSortSelect("Price: High to Low")}>
                                Price: High to Low
                            </li>
                            <li onClick={() => handleSortSelect("Newest First")}>
                                Newest First
                            </li>
                        </ul>
                    )}
                </div>
            </div>

            {/* PRODUCTS */}
            <div className="shop-category-products">
                {sortedProducts.map((item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    );
};

export default ShopCategory;
