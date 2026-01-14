import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectDetail = () => {
    const { id } = useParams();

    return (
        <motion.div
            style={{ padding: '4rem', textAlign: 'center' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1>Project {id}</h1>
            <p>Details about the project go here.</p>
            <Link to="/projects" style={{ marginTop: '2rem', display: 'inline-block', color: 'var(--accent-color)' }}>Back to Projects</Link>
        </motion.div>
    );
};

export default ProjectDetail;
