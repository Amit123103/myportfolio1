import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import CustomCursor from './CustomCursor';
import AnimatedBackground from './AnimatedBackground';
import Navbar from './Navbar';
import Chatbot from './Chatbot';
import './Layout.css';

const Layout = () => {
    const location = useLocation();

    return (
        <>
            <CustomCursor />
            <AnimatedBackground />
            <Navbar />
            <Chatbot />
            <main className="main-content">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        style={{ width: '100%' }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>
        </>
    );
};

export default Layout;
