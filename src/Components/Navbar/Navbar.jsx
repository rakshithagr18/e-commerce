// src/Components/Navbar/Navbar.jsx
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../Assets/Frontend_Assets/logo.png";
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const cartCount = 0;

    const location = useLocation();

    // Auto close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const handleMenuClick = (menuName) => {
        setMenu(menuName);
        setIsMenuOpen(false); // Close menu after clicking
    };

    return (
        <div className="navbar">
            {/* Logo */}
            <div className="nav-logo">
                <img src={logo} alt="RNuts & Bites Logo" />
                <p>R NUTS & BITES</p>
            </div>

            {/* Login & Cart */}
            <div className="nav-login-cart">
                <Link to="/login">
                    <button>Login</button>
                </Link>

                <div className="nav-cart">
                    <Link to="/cart">
                        <img src={cart_icon} alt="Cart" />
                    </Link>
                    <span className="cart-count">{cartCount}</span>
                </div>

                {/* Hamburger menu */}
                <div
                    className="hamburger"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                    {isMenuOpen ? "✕" : "☰"}
                </div>
            </div>

            {/* Menu Links */}
            <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                <li onClick={() => handleMenuClick("shop")}>
                    <Link to="/">SHOP</Link>
                    {menu === "shop" && <hr />}
                </li>
                <li onClick={() => handleMenuClick("dryfruits")}>
                    <Link to="/dry-fruits">DRY FRUITS</Link>
                    {menu === "dryfruits" && <hr />}
                </li>
                <li onClick={() => handleMenuClick("chocolates")}>
                    <Link to="/chocolates">CHOCOLATES</Link>
                    {menu === "chocolates" && <hr />}
                </li>
                <li onClick={() => handleMenuClick("confectionary")}>
                    <Link to="/confectionary">CONFECTIONARY</Link>
                    {menu === "confectionary" && <hr />}
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
