import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaDiscord } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await emailjs.send(
                'YOUR_SERVICE_ID', // Replace with your Service ID
                'YOUR_TEMPLATE_ID', // Replace with your Template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_name: 'Amit',
                },
                'YOUR_PUBLIC_KEY' // Replace with your Public Key
            );

            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
        }
    };

    return (
        <motion.div
            className="contact-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <div className="contact-content">
                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.05, duration: 0.3 }}
                >
                    Get In Touch
                </motion.h2>

                <p>Have a project in mind or just want to say hi?</p>

                <div className="contact-grid">
                    {/* Social Logic */}
                    <div className="social-section">
                        <h3>Find me on</h3>
                        <div className="social-icons">
                            <a href="https://github.com/Amit123103" target="_blank" rel="noreferrer" className="social-icon github">
                                <FaGithub /> <span>GitHub</span>
                            </a>
                            <a href="https://www.instagram.com/amit.kumar_270/" target="_blank" rel="noreferrer" className="social-icon instagram">
                                <FaInstagram /> <span>Instagram</span>
                            </a>
                            <a href="https://www.linkedin.com/in/amit-akhil/" target="_blank" rel="noreferrer" className="social-icon linkedin">
                                <FaLinkedin /> <span>LinkedIn</span>
                            </a>
                            <a href="https://discord.gg/your-invite-code" target="_blank" rel="noreferrer" className="social-icon discord">
                                <FaDiscord /> <span>Discord</span>
                            </a>
                        </div>

                        <div className="direct-email">
                            <h3>Or email directly</h3>
                            <a href="mailto:amitsingh6394366374@gmail.com" className="email-link">
                                <FaEnvelope /> amitsingh...@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Email Form */}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Your Email"
                                required
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                placeholder="Your Message"
                                required
                                rows="5"
                                value={formData.message}
                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'success' && <p className="success-msg">Message sent successfully!</p>}
                        {status === 'error' && <p className="error-msg">Failed to send. Please try again.</p>}
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
