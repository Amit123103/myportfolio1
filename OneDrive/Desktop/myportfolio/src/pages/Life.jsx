import React from 'react';
import { motion } from 'framer-motion';
import { lifeData } from '../data/life';
import './Life.css';

const Life = () => {
    return (
        <motion.div
            className="life-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="life-header">
                <h1>My Journey</h1>
                <p>Beyond the code: Traveling, Living, and Experiencing.</p>
            </div>

            <div className="timeline-grid">
                {lifeData.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className="life-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                    >
                        <div className="life-image">
                            <img src={item.image} alt={item.title} />
                            <div className="date-badge">{item.date}</div>
                        </div>
                        <div className="life-content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Life;
