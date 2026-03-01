import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
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

const Hero = () => {
    const typewriterText = useTypewriter(personalInfo.roles, 80, 2000);

    return (
        <section id="hero" className="hero">
            {/* Animated Blobs */}
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
            <motion.div
                className="hero__blob hero__blob--3"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Content */}
            <div className="hero__content">
                <motion.p
                    className="hero__greeting"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Hi, I'm
                </motion.p>

                <motion.h1
                    className="hero__name"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
                >
                    <span className="gradient-text">{personalInfo.name}.</span>
                </motion.h1>

                <motion.div
                    className="hero__typewriter-container"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <h2 className="hero__typewriter">
                        <span className="hero__typewriter-text">{typewriterText}</span>
                        <span className="hero__cursor"></span>
                    </h2>
                </motion.div>

                {/* Clean one-liner */}
                <motion.p
                    className="hero__tagline"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    I design, build, and ship distributed systems that scale.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="hero__cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <a href="#projects" className="hero__cta-btn hero__cta-btn--primary">
                        View My Work
                    </a>
                    <a href="#contact" className="hero__cta-btn hero__cta-btn--outline">
                        Get In Touch
                    </a>
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
