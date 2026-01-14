import React from 'react';
import {
    PieChart, Pie, Cell,
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, Legend, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import { skillsData } from '../data/skills';
import { skillsBarData } from '../data/skillsBar';
import { experienceData } from '../data/experience';
import './HomeDashboard.css';

const HomeDashboard = () => {
    const categoryStats = {};
    projectsData.forEach(p => {
        categoryStats[p.category] = (categoryStats[p.category] || 0) + 1;
    });
    const pieData = Object.keys(categoryStats).map((key, index) => ({
        name: key,
        value: categoryStats[key]
    }));

    const activityData = [
        { month: 'Jan', commits: 20, projects: 1 },
        { month: 'Feb', commits: 35, projects: 1 },
        { month: 'Mar', commits: 50, projects: 2 },
        { month: 'Apr', commits: 80, projects: 2 },
        { month: 'May', commits: 65, projects: 3 },
        { month: 'Jun', commits: 90, projects: 4 },
    ];

    const expChartData = experienceData.map(exp => ({
        name: exp.company,
        role: exp.role,
        years: 1
    }));

    const COLORS = ['#64ffda', '#ffcc00', '#61dafb', '#264de4', '#336791'];

    return (
        <div className="dashboard-wrapper">
            <motion.h2
                className="dashboard-title centrally-aligned"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                Portfolio Insights
            </motion.h2>

            <div className="dashboard-grid">
                {/* 1. Skill Proficiency (Bar Chart) */}
                <motion.div
                    className="chart-card glass-panel wide"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <h3>Technical Mastery</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={skillsBarData} layout="vertical" margin={{ left: 20, right: 20 }}>
                            <XAxis type="number" domain={[0, 100]} hide />
                            <YAxis
                                dataKey="name"
                                type="category"
                                stroke="#8892b0"
                                width={120}
                                tick={{ fontSize: 13 }}
                            />
                            <Tooltip
                                cursor={{ fill: 'rgba(100, 255, 218, 0.05)' }}
                                contentStyle={{ backgroundColor: '#112240', border: 'none', borderRadius: '5px' }}
                                itemStyle={{ color: '#64ffda' }}
                            />
                            <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={20}>
                                {skillsBarData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* 2. Project Distribution (Pie) */}
                <motion.div
                    className="chart-card glass-panel"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3>Project Domains</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <PieChart>
                            <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {pieData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                contentStyle={{ backgroundColor: '#112240', border: 'none', borderRadius: '5px' }}
                                itemStyle={{ color: '#64ffda' }}
                            />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </motion.div>

                {/* 3. Skills Radar Chart */}
                <motion.div
                    className="chart-card glass-panel"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h3>Expertise Radar</h3>
                    <ResponsiveContainer width="100%" height={250}>
                        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillsData}>
                            <PolarGrid stroke="#233554" />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: '#8892b0', fontSize: 10 }} />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                            <Radar
                                name="Proficiency"
                                dataKey="A"
                                stroke="#64ffda"
                                fill="#64ffda"
                                fillOpacity={0.5}
                            />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#112240', border: 'none', borderRadius: '5px' }}
                                itemStyle={{ color: '#64ffda' }}
                            />
                        </RadarChart>
                    </ResponsiveContainer>
                </motion.div>
            </div>
        </div>
    );
};

export default HomeDashboard;
