import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { TbBrandLeetcode } from 'react-icons/tb';
import { personalInfo } from '../data/portfolioData';

// Typewriter Hook
const useTypewriter = (texts, speed = 100, pause = 2000) => {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(currentText.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
                if (charIndex + 1 === currentText.length) {
                    setTimeout(() => setIsDeleting(true), pause);
                }
            } else {
                setDisplayText(currentText.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
                if (charIndex - 1 === 0) {
                    setIsDeleting(false);
                    setTextIndex(prev => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? speed / 2 : speed);
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

    return displayText;
};

// Particle Star Field
const StarField = () => {
    const stars = Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        duration: Math.random() * 4 + 2,
        delay: Math.random() * 5,
    }));

    return (
        <div className="hero__stars" aria-hidden="true">
            {stars.map(star => (
                <div
                    key={star.id}
                    className="hero__star"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animationDuration: `${star.duration}s`,
                        animationDelay: `${star.delay}s`,
                    }}
                />
            ))}
        </div>
    );
};

const heroSocialLinks = [
    { icon: <FaGithub />, href: personalInfo.github, label: 'GitHub' },
    { icon: <FaLinkedin />, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: <TbBrandLeetcode />, href: personalInfo.leetcode, label: 'LeetCode' },
    { icon: <FaEnvelope />, href: `mailto:${personalInfo.email}`, label: 'Email' },
];

const Hero = () => {
    const typewriterText = useTypewriter(personalInfo.roles, 80, 2000);

    return (
        <section id="hero" className="hero">
            {/* Star field */}
            <StarField />

            {/* Ambient blobs */}
            <motion.div
                className="hero__blob hero__blob--1"
                animate={{ x: [0, 80, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="hero__blob hero__blob--2"
                animate={{ x: [0, -80, 0], y: [0, 60, 0], scale: [1, 1.4, 1] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Split Layout */}
            <div className="hero__split">
                {/* Left: Text content */}
                <div className="hero__left">
                    <motion.p
                        className="hero__greeting"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hi, I'm
                    </motion.p>

                    <motion.h1
                        className="hero__name"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35, type: 'spring', stiffness: 80 }}
                    >
                        <span className="gradient-text">{personalInfo.name}.</span>
                    </motion.h1>

                    <motion.div
                        className="hero__typewriter-container"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h2 className="hero__typewriter">
                            <span className="hero__typewriter-text">{typewriterText}</span>
                            <span className="hero__cursor"></span>
                        </h2>
                    </motion.div>

                    <motion.p
                        className="hero__tagline"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.65, duration: 0.6 }}
                    >
                        I design, build, and ship distributed systems that scale.
                    </motion.p>

                    {/* CTA Row */}
                    <motion.div
                        className="hero__cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <a href={personalInfo.resumeLink} target="_blank" rel="noopener noreferrer" className="hero__cta-btn hero__cta-btn--primary">
                            Resume
                        </a>
                        <a href="#contact" className="hero__cta-btn hero__cta-btn--outline">
                            Contact Me
                        </a>
                    </motion.div>

                    {/* Social Icons */}
                    <motion.div
                        className="hero__social-row"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                    >
                        {heroSocialLinks.map((link, i) => (
                            <motion.a
                                key={i}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={link.label}
                                className="hero__social-icon"
                                whileHover={{ scale: 1.2, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.1 + i * 0.08 }}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Right: Floating tech stack visual */}
                <motion.div
                    className="hero__right"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <div className="hero__tech-cloud">
                        {[
                            { label: 'Java', color: '#f89820' },
                            { label: 'Spring Boot', color: '#6db33f' },
                            { label: 'Apache Kafka', color: 'var(--accent-2)' },
                            { label: 'PostgreSQL', color: '#336791' },
                            { label: 'Redis', color: '#dc382d' },
                            { label: 'Docker', color: '#2496ed' },
                            { label: 'AWS', color: '#ff9900' },
                            { label: 'Microservices', color: 'var(--accent-1)' },
                            { label: 'Spring Security', color: '#6db33f' },
                            { label: 'JWT', color: 'var(--accent-2)' },
                            { label: 'REST APIs', color: 'var(--text-secondary)' },
                            { label: 'JPA / Hibernate', color: 'var(--text-secondary)' },
                        ].map((tech, i) => (
                            <motion.div
                                key={i}
                                className="hero__tech-pill"
                                style={{ '--pill-color': tech.color }}
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.7 + i * 0.06, type: 'spring', stiffness: 120 }}
                                whileHover={{ scale: 1.12, y: -4 }}
                            >
                                {tech.label}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="hero__scroll-indicator"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <FaChevronDown />
            </motion.div>
        </section>
    );
};

export default Hero;
