import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Achievements', to: 'achievements' },
    { name: 'GitHub', to: 'github' },
    { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
        >
            <div className="navbar__inner">
                {/* Logo */}
                <Link
                    to="hero"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="navbar__logo"
                >
                    <span className="gradient-text">&lt;Raj /&gt;</span>
                </Link>

                {/* Desktop Links */}
                <div className="navbar__links">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="navbar__link"
                            style={{ cursor: 'pointer' }}
                        >
                            <motion.span
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                            >
                                {link.name}
                            </motion.span>
                        </Link>
                    ))}
                    <ThemeToggle />
                    <motion.a
                        href={personalInfo.resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navbar__resume"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        RESUME
                    </motion.a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="navbar__mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="navbar__mobile-menu navbar__mobile-menu--open"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="navbar__mobile-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <ThemeToggle />
                        <a
                            href={personalInfo.resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="navbar__resume"
                            onClick={() => setIsOpen(false)}
                        >
                            RESUME
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
