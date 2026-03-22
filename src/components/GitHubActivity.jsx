import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const username = 'Rajj23';

const getGraphUrls = (isDark) => {
    if (isDark) {
        return {
            activity: `https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=0F172A&color=3B82F6&line=22D3EE&point=3B82F6&area=true&area_color=3B82F6&hide_border=true&radius=6`,
            streak: `https://streak-stats.demolab.com/?user=${username}&theme=transparent&hide_border=true&ring=3B82F6&fire=22D3EE&currStreakLabel=3B82F6&sideLabels=F8FAFC&dates=94A3B8&stroke=1E293B&background=00000000`,
        };
    }
    return {
        activity: `https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=F8FAFC&color=2563EB&line=0891B2&point=2563EB&area=true&area_color=2563EB&hide_border=true&radius=6`,
        streak: `https://streak-stats.demolab.com/?user=${username}&theme=transparent&hide_border=true&ring=2563EB&fire=0891B2&currStreakLabel=2563EB&sideLabels=0F172A&dates=475569&stroke=E2E8F0&background=00000000`,
    };
};

const GitHubActivity = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const checkTheme = () => {
            const theme = document.documentElement.getAttribute('data-theme');
            setIsDark(theme !== 'light');
        };

        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
        return () => observer.disconnect();
    }, []);

    const urls = getGraphUrls(isDark);

    return (
        <section id="github" className="section github-activity">
            <div className="container">
                <SectionTitle number="05.">GitHub Activity</SectionTitle>

                <motion.div
                    className="github-activity__wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Header */}
                    <div className="github-activity__header">
                        <div className="github-activity__profile">
                            <FaGithub className="github-activity__icon" />
                            <span className="github-activity__username">@{username}</span>
                        </div>
                        <a
                            href={`https://github.com/${username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-activity__link"
                        >
                            View Profile <FaExternalLinkAlt size={11} />
                        </a>
                    </div>

                    {/* Activity Graph */}
                    <motion.div
                        className="github-activity__graph glass-card"
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        <p className="github-activity__label">Contribution Activity</p>
                        <div className="github-activity__img-wrap">
                            <img
                                key={isDark ? 'dark' : 'light'}
                                src={urls.activity}
                                alt="GitHub Activity Graph"
                                className="github-activity__graph-img"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>

                    {/* Streak */}
                    <motion.div
                        className="github-activity__streak-wrap"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <div className="github-activity__stat-card glass-card">
                            <p className="github-activity__label">Streak</p>
                            <img
                                key={isDark ? 'dark-streak' : 'light-streak'}
                                src={urls.streak}
                                alt="GitHub Streak"
                                className="github-activity__streak-img"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default GitHubActivity;
