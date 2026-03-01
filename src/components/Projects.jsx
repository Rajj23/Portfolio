import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { projects } from '../data/portfolioData';

// Mini architecture diagram inside the placeholder
const ProjectVisual = ({ project, index }) => {
    const diagrams = [
        ['API Gateway', 'Wallet Service', 'Kafka', 'Redis', 'Saga Pattern'],
        ['JWT Filter', 'TaskTrie', 'WebSocket', 'RBAC', 'Scheduler'],
        ['Workspace', 'Document', 'Block Tree', 'RBAC', 'PostgreSQL'],
    ];
    const nodes = diagrams[index] || diagrams[0];

    return (
        <div className="project-card__visual">
            <div className="project-card__image-wrapper">
                <div className="project-card__overlay"></div>
                {project.image ? (
                    <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="project-card__screenshot"
                    />
                ) : (
                    <div className="project-card__arch-diagram">
                        <span className="project-card__arch-title">{project.title}</span>
                        <div className="project-card__arch-nodes">
                            {nodes.map((node, i) => (
                                <motion.span
                                    key={i}
                                    className="project-card__arch-node"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.08 }}
                                >
                                    {node}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className="project-card__glow"></div>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="section section--alt">
            <div className="container">
                <SectionTitle number="03.">Engineering Projects</SectionTitle>

                <div className="projects__list">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`project-card ${index % 2 === 1 ? 'project-card--reversed' : ''}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Visual */}
                            <ProjectVisual project={project} index={index} />

                            {/* Content */}
                            <div className="project-card__content">
                                <p className="project-card__label">
                                    {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                                </p>
                                <h3 className="project-card__title">{project.title}</h3>
                                <p style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '0.85rem',
                                    color: 'var(--accent-2)',
                                    marginBottom: '16px',
                                    fontWeight: 500
                                }}>
                                    {project.subtitle}
                                </p>

                                <div className="project-card__description glass-card">
                                    <ul>
                                        {project.description.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <ul className="project-card__tech">
                                    {project.tech.map((tech, i) => (
                                        <li key={i} className="project-card__tech-tag">{tech}</li>
                                    ))}
                                </ul>

                                {/* Links */}
                                <div className="project-card__links">
                                    {project.githubLink !== undefined && (
                                        <a
                                            href={project.githubLink || '#'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-card__link"
                                        >
                                            <FaGithub className="project-card__link-icon" size={18} />
                                            <span>Source</span>
                                        </a>
                                    )}
                                    {project.liveLink !== undefined && (
                                        <a
                                            href={project.liveLink || '#'}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-card__link"
                                        >
                                            <FaExternalLinkAlt className="project-card__link-icon" size={16} />
                                            <span>Live</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
