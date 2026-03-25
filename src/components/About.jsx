import { motion } from 'framer-motion';
import { FaGraduationCap, FaAws, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { personalInfo, stats, education, certifications } from '../data/portfolioData';
import useLeetCodeStats from '../hooks/useLeetCodeStats';
import useGeeksForGeeksStats from '../hooks/useGeeksForGeeksStats';

const About = () => {
    const { solvedCount: leetcodeCount } = useLeetCodeStats('Rajjaiswal23_27');
    const { solvedCount: gfgCount } = useGeeksForGeeksStats('rajjaiswal23');

    return (
        <section id="about" className="section section--alt">
            <div className="container">
                <SectionTitle number="01.">About Me</SectionTitle>

                <div className="about__content">
                    <motion.div
                        className="about__image-container"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="about__image-backdrop"></div>
                        <div className="about__image-wrapper">
                            <img src="/profile.jpeg" alt="Raj Jaiswal" className="about__image" />
                        </div>
                    </motion.div>

                    <motion.div
                        className="about__bio-container"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="about__bio">
                            I'm a Computer Science undergraduate focused on{' '}
                            <span className="about__bio-highlight">backend engineering</span> and{' '}
                            <span className="about__bio-highlight">distributed systems</span>. I work primarily with Java and the Spring ecosystem to design services that are modular, fault-tolerant, and built for scale — from event-driven payment pipelines to real-time collaboration platforms.
                        </p>
                        <p className="about__bio">
                            I've engineered <span className="about__bio-highlight">microservices architectures</span> with Apache Kafka for asynchronous communication, implemented <span className="about__bio-highlight">idempotent transaction handling</span> for financial systems, and designed <span className="about__bio-highlight">recursive data models</span> for complex content hierarchies. My approach to software is rooted in clean architecture, system design thinking, and writing code that other engineers can confidently build on.
                        </p>
                        <p className="about__bio">
                            Beyond backend, I'm certified as an{' '}
                            <span className="about__bio-highlight">AWS Cloud Practitioner</span> and an{' '}
                            <span className="about__bio-highlight">OCI AI Foundations Associate</span>, and actively work with cloud-native tooling — Docker, EC2, S3, and API Gateway. I've solved{' '}
                            <span className="about__bio-highlight">{leetcodeCount ? leetcodeCount : '680'}+ data structures and algorithms problems</span> across LeetCode and GeeksforGeeks, sharpening the problem-solving instincts that drive every system I build.
                        </p>
                    </motion.div>
                </div>

                {/* Stats */}
                <motion.div
                    className="about__stats"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* LeetCode Card */}
                    <motion.div
                        className="about__stat-card glass-card"
                        whileHover={{ scale: 1.03 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="about__stat-number gradient-text">{leetcodeCount ? leetcodeCount : '680'}+</div>
                        <div className="about__stat-label">LeetCode Solved</div>
                    </motion.div>

                    {/* GeeksForGeeks Card */}
                    <motion.div
                        className="about__stat-card glass-card"
                        whileHover={{ scale: 1.03 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="about__stat-number gradient-text" style={{ color: '#2f8d46' }}>{gfgCount ? gfgCount : '130'}+</div>
                        <div className="about__stat-label">GeeksforGeeks Solved</div>
                    </motion.div>

                    {/* Systems Engineered Card */}
                    <motion.div
                        className="about__stat-card glass-card"
                        whileHover={{ scale: 1.03 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="about__stat-number gradient-text">3</div>
                        <div className="about__stat-label">Systems Engineered</div>
                    </motion.div>
                </motion.div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="about__education-title">
                        <span>/</span> Certifications
                    </div>

                    <div className="about__education-list">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                className="about__education-item glass-card"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span className="about__edu-icon" style={{ fontSize: '1.6rem' }}>{cert.icon}</span>
                                    <div className="about__edu-info">
                                        <div className="about__edu-school">
                                            {cert.link ? (
                                                <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'inline-flex', alignItems: 'center', gap: '6px' }} className="cert-link">
                                                    {cert.title} <FaExternalLinkAlt style={{ fontSize: '0.7em', opacity: 0.7 }} />
                                                </a>
                                            ) : (
                                                cert.title
                                            )}
                                        </div>
                                        <div className="about__edu-degree">{cert.issuer}</div>
                                    </div>
                                </div>
                                {cert.date && (
                                    <div className="about__edu-meta">
                                        <span className="about__edu-duration">{cert.date}</span>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{ marginTop: '48px' }}
                >
                    <div className="about__education-title">
                        <span>/</span> Education
                    </div>

                    <div className="about__education-list">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                className="about__education-item glass-card"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <FaGraduationCap className="about__edu-icon" />
                                    <div className="about__edu-info">
                                        <div className="about__edu-school">{edu.institution}</div>
                                        <div className="about__edu-degree">{edu.degree}</div>
                                    </div>
                                </div>
                                <div className="about__edu-meta" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                                    <span className="about__edu-duration">{edu.duration}</span>
                                    {edu.score && (
                                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-1)', background: 'rgba(0, 212, 255, 0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                                            {edu.score}
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
