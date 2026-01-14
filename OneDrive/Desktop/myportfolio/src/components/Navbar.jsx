import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">PORTFOLIO</div>
            <ul className="nav-links">
                {['Home', 'Projects', 'Journey', 'Contact'].map((item) => (
                    <li key={item}>
                        <NavLink
                            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            {item}
                            <motion.div className="underline" layoutId="underline" />
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
