import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HomeDashboard from '../components/HomeDashboard';
import FeedbackSection from '../components/FeedbackSection';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {

    return (
        <motion.div
            className="home-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <div className="hero-section">
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.05, duration: 0.3 }}
                >
                    AMIT KUMAR <br /> Aspiring Machine Learning Engineer
                </motion.h1>
                <motion.p
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                >
                    I’m a hands-on ML student who loves building end-to-end projects—from data
                    cleaning to training models and presenting results. I learn best by shipping.
                </motion.p>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: 'spring' }}
                >
                    <Link to="/projects" className="cta-button">
                        View Work
                    </Link>
                </motion.div>
            </div>

            {/* Advanced Dashboard Section - MOVED TO TOP CENTER */}
            <HomeDashboard />

            {/* Coding Profiles Section */}
            <section className="profiles-section">
                <h2>Coding Profiles</h2>
                <div className="profiles-grid">
                    <motion.a
                        href="https://leetcode.com/Amit_123103/ "
                        target="_blank"
                        rel="noreferrer"
                        className="profile-card leetcode"
                        whileHover={{ y: -5 }}
                    >
                        <h3>LeetCode</h3>
                        <p>Evaluate my algorithmic skills</p>
                    </motion.a>
                    <motion.a
                        href="https://www.hackerrank.com/profile/akmtsu34"
                        target="_blank"
                        rel="noreferrer"
                        className="profile-card hackerrank"
                        whileHover={{ y: -5 }}
                    >
                        <h3>HackerRank</h3>
                        <p>Check out my problem solving</p>
                    </motion.a>
                    <motion.a
                        href="https://github.com/Amit123103"
                        target="_blank"
                        rel="noreferrer"
                        className="profile-card github-profile"
                        whileHover={{ y: -5 }}
                    >
                        <h3>GitHub</h3>
                        <p>View my source code & repos</p>
                    </motion.a>
                </div>
            </section>

            <section className="about-section">
                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <h2>About Me</h2>
                        <p>
                            I’m a project-focused builder who enjoys turning ideas into real, working outcomes. I like
                            breaking complex problems into clear steps, collaborating across teams, and shipping solutions
                            that are practical and measurable. I’m especially interested in technology-driven work—where product
                            thinking, data, and execution come together.
                        </p>
                        <p>
                            I’m a Machine Learning student focused on building data-driven solutions
                            that solve real problems. I enjoy working end-to-end—from data cleaning and feature
                            engineering to model training, evaluation, and deployment. I’m especially interested in applying
                            ML to practical use cases and continuously improving model performance through experimentation.
                        </p>
                    </motion.div>

                    <motion.div
                        className="about-images"
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <div
                            className="image-card tech-img-1"
                            style={{ backgroundImage: "url('https://i.vgy.me/tA7cfs.jpg')" }}
                        >

                        </div>
                        <div
                            className="image-card tech-img-2"
                            style={{ backgroundImage: "url('https://i.vgy.me/ipu2Pj.jpg')" }}
                        >

                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Feedback Section */}
            <FeedbackSection />

            <Footer />
        </motion.div>
    );
};

export default Home;
