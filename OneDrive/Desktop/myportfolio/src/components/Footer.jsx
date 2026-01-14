import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Amit's Portfolio</h3>
                    <p>
                        Showcasing my journey in Machine Learning and Web Development.
                        Let's build something amazing together.
                    </p>
                </div>

                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/journey">Journey</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-section social">
                    <h3>Connect</h3>
                    <div className="social-icons-footer">
                        <a href="https://www.instagram.com/amit.kumar_270/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                        <a href="https://github.com/Amit123103" target="_blank" rel="noreferrer"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/amit-akhil/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    </div>
                    <p className="email">amitsingh6394366374@gmail.com</p>
                </div>

                <div className="footer-section qr-code-section">
                    <h3>Join Instagram</h3>
                    <div className="qr-container">
                        {/* Placeholder QR Code - In production use a real generated one */}
                        <img
                            src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.instagram.com/amit.kumar_270/"
                            alt="Instagram QR Code"
                        />
                        <p>Scan to Follow</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Amit Kumar. All rights reserved.</p>
                <div className="app-badges">
                    {/* Visual flair to match the user's reference image app store buttons, but linking to portfolio or just aesthetic */}
                    <span className="badge">Machine Learning</span>
                    <span className="badge">Web Dev</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
