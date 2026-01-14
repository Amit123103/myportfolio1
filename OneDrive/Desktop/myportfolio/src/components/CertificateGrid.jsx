import React from 'react';
import { motion } from 'framer-motion';
import './CertificateGrid.css';

import { certificatesData } from '../data/certificates';
import './CertificateGrid.css';

const CertificateGrid = () => {
    return (
        <div className="certificate-section">
            <h2 className="section-title">Certifications</h2>
            <div className="cert-grid">
                {certificatesData.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        className="cert-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="cert-image">
                            <img src={cert.image} alt={cert.title} />
                        </div>
                        <div className="cert-info">
                            <h3>{cert.title}</h3>
                            <p>{cert.issuer} • {cert.date}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CertificateGrid;
