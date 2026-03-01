import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from './SectionTitle';

const username = 'Rajj23';

const ACTIVITY_GRAPH_URL = `https://github-readme-activity-graph.vercel.app/graph?username=${username}&bg_color=0d0d1f&color=00d4ff&line=7c3aed&point=00d4ff&area=true&area_color=00d4ff&hide_border=true&radius=6`;

const STREAK_URL = `https://streak-stats.demolab.com/?user=${username}&theme=transparent&hide_border=true&ring=00d4ff&fire=7c3aed&currStreakLabel=00d4ff&sideLabels=ccd6f6&dates=8888a8&stroke=1a1a3e&background=00000000`;

const GitHubActivity = () => (
    <section id="github" className="section github-activity">
        <div className="container">
            <SectionTitle number="04.">GitHub Activity</SectionTitle>

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

                {/* Activity Graph (full-width) */}
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
                            src={ACTIVITY_GRAPH_URL}
                            alt="GitHub Activity Graph"
                            className="github-activity__graph-img"
                            loading="lazy"
                        />
                    </div>
                </motion.div>

                {/* Streak — centered below graph */}
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
                            src={STREAK_URL}
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

export default GitHubActivity;
