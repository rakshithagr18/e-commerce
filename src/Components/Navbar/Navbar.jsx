import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../Assets/Frontend_Assets/logo.png";
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const dropdownRef = useRef(null);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Close menu on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="navbar">
            {/* Logo */}
            <div className="nav-logo">
                <img src={logo} alt="R Nuts & Bites" />
                <p>R NUTS & BITES</p>
            </div>

            {/* Login + Cart + Hamburger */}
            <div className="nav-login-cart">
                <Link to="/login">
                    <button>Login</button>
                </Link>

                <div className="nav-cart">
                    <Link to="/cart">
                        <img src={cart_icon} alt="Cart" />
                    </Link>
                    <span className="cart-count">0</span>
                </div>

                <div
                    className="hamburger"
                    onClick={() => setIsMenuOpen(prev => !prev)}
                >
                    ☰
                </div>
            </div>

            {/* Dropdown Menu */}
            <ul
                ref={dropdownRef}
                className={`nav-menu-dropdown ${isMenuOpen ? "active" : ""}`}
            >
                <li><Link to="/">SHOP</Link></li>
                <li><Link to="/dry-fruits">DRY FRUITS</Link></li>
                <li><Link to="/chocolates">CHOCOLATES</Link></li>
                <li><Link to="/confectionary">CONFECTIONARY</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;
