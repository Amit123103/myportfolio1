import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChartLine, FaCertificate } from 'react-icons/fa';
import { projectsData } from '../data/projects';
import { certificatesData } from '../data/certificates';
import CertificateGrid from '../components/CertificateGrid';
import './Projects.css';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    // Stats calculation
    const categories = ['All', ...new Set(projectsData.map(p => p.category))];
    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(p => p.category === filter);

    const totalTech = new Set(projectsData.flatMap(p => p.tech || [])).size;

    return (
        <motion.div
            className="projects-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            {/* Project Hero / Header */}
            <div className="projects-hero">
                <motion.span
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Showcasing my technical journey
                </motion.span>
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    Built with <span className="highlight">Purpose</span>
                </motion.h1>

                {/* Stats Belt */}
                <div className="stats-belt">
                    <div className="stat-item">
                        <FaChartLine className="stat-icon" />
                        <div className="stat-info">
                            <span className="stat-value">{projectsData.length}</span>
                            <span className="stat-label">Projects</span>
                        </div>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat-item">
                        <FaCertificate className="stat-icon" />
                        <div className="stat-info">
                            <span className="stat-value">{certificatesData.length}</span>
                            <span className="stat-label">Certs</span>
                        </div>
                    </div>
                    <div className="stat-divider" />
                    <div className="stat-item">
                        <div className="stat-info">
                            <span className="stat-value">{totalTech}</span>
                            <span className="stat-label">Technologies</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filter Bar */}
            <div className="filter-bar">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`filter-btn ${filter === cat ? 'active' : ''}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Redesigned Project Grid */}
            <div className="projects-grid">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="project-card"
                            onClick={() => window.open(project.demo !== '#' ? project.demo : project.github, '_blank')}
                        >
                            <div className="card-inner">
                                <div className="project-image" style={{ backgroundImage: `url(${project.image})` }}>
                                    <div className="image-overlay">
                                        <div className="project-links">
                                            <a href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                                                <FaGithub />
                                            </a>
                                            {project.demo !== '#' && (
                                                <a href={project.demo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                                                    <FaExternalLinkAlt />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="project-info">
                                    <span className="project-category">{project.category}</span>
                                    <h3>{project.title}</h3>
                                    <div className="project-tech">
                                        {project.tech?.slice(0, 3).map(t => <span key={t}>{t}</span>)}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="certifications-wrapper">
                <CertificateGrid />
            </div>
        </motion.div>
    );
};

export default Projects;
