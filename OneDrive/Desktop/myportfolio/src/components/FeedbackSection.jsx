import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import './FeedbackSection.css';

const FeedbackSection = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [comment, setComment] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (rating === 0) {
            setStatus('Please select a rating.');
            return;
        }

        setStatus('Sending...');

        try {
            await emailjs.send(
                'service_hgbss5n',
                'template_7el8g1s',
                {
                    rating: rating,
                    comment: comment,
                    from_name: 'Portfolio Visitor',
                },
                '0uaE9NgAzOusvs7Jp'
            );

            setStatus('Thank you for your feedback! 🚀');
            setRating(0);
            setComment('');
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus(`Failed: ${error.text || error.message || 'Check keys'}`);
        }
    };

    return (
        <section className="feedback-section">
            <motion.div
                className="feedback-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2>Rate My Portfolio</h2>
                <p>Your feedback helps me improve!</p>

                <div className="star-rating">
                    {[...Array(5)].map((_, index) => {
                        const ratingValue = index + 1;
                        return (
                            <label key={index}>
                                <input
                                    type="radio"
                                    name="rating"
                                    value={ratingValue}
                                    onClick={() => setRating(ratingValue)}
                                />
                                <FaStar
                                    className="star"
                                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                    size={30}
                                    onMouseEnter={() => setHover(ratingValue)}
                                    onMouseLeave={() => setHover(0)}
                                />
                            </label>
                        );
                    })}
                </div>

                <form onSubmit={handleSubmit} className="feedback-form">
                    <textarea
                        placeholder="Any suggestions? (Optional)"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        rows="4"
                    />
                    <button type="submit" className="submit-btn" disabled={status === 'Sending...'}>
                        {status === 'Sending...' ? 'Sending...' : 'Send Feedback'}
                    </button>
                    {status && <p className="status-msg">{status}</p>}
                </form>
            </motion.div>
        </section>
    );
};

export default FeedbackSection;
