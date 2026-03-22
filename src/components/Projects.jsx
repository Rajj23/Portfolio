import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { projects } from '../data/portfolioData';

const ProjectCard = ({ project, index }) => (
    <motion.div
        className="project-grid-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        whileHover="hover"
    >
        {/* Image / Visual */}
        <div className="project-grid-card__img-wrap">
            {project.image ? (
                <motion.img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="project-grid-card__img"
                    variants={{
                        hover: { scale: 1.07 },
                    }}
                    transition={{ duration: 0.4 }}
                />
            ) : (
                /* Fallback: stylised arch diagram */
                <div className="project-grid-card__fallback">
                    <span className="project-grid-card__fallback-title">{project.title}</span>
                    <div className="project-grid-card__fallback-nodes">
                        {project.tech.slice(0, 5).map((t, i) => (
                            <span key={i} className="project-grid-card__fallback-node">{t}</span>
                        ))}
                    </div>
                </div>
            )}

            {/* Gradient overlay on hover */}
            <motion.div
                className="project-grid-card__overlay"
                initial={{ opacity: 0.45 }}
                variants={{ hover: { opacity: 0.72 } }}
                transition={{ duration: 0.3 }}
            />

            {/* Title block pinned to bottom (always visible) */}
            <div className="project-grid-card__label-block">
                <h3 className="project-grid-card__title">{project.title}</h3>
                <p className="project-grid-card__subtitle">{project.subtitle}</p>
            </div>

            {/* Action links — slide up on hover */}
            <motion.div
                className="project-grid-card__actions"
                initial={{ y: 60, opacity: 0 }}
                variants={{ hover: { y: 0, opacity: 1 } }}
                transition={{ duration: 0.3 }}
            >
                {project.githubLink !== undefined && (
                    <a
                        href={project.githubLink || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-grid-card__action-btn"
                        onClick={e => e.stopPropagation()}
                    >
                        <FaGithub size={15} /> Source
                    </a>
                )}
                {project.liveLink !== undefined && (
                    <a
                        href={project.liveLink || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-grid-card__action-btn project-grid-card__action-btn--live"
                        onClick={e => e.stopPropagation()}
                    >
                        <FaExternalLinkAlt size={13} /> Live
                    </a>
                )}
            </motion.div>
        </div>

        {/* Tech tags below the card */}
        <div className="project-grid-card__tech">
            {project.tech.slice(0, 4).map((t, i) => (
                <span key={i} className="project-grid-card__tech-tag">{t}</span>
            ))}
            {project.tech.length > 4 && (
                <span className="project-grid-card__tech-tag project-grid-card__tech-tag--more">
                    +{project.tech.length - 4}
                </span>
            )}
        </div>
    </motion.div>
);

const Projects = () => (
    <section id="projects" className="section">
        <div className="container">
            <SectionTitle number="03.">Engineering Projects</SectionTitle>

            <div className="project-grid">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
