import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { TbBrandLeetcode } from 'react-icons/tb';
import { SiGeeksforgeeks } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';

const links = [
    { icon: <FaGithub />, href: personalInfo.github, label: 'GitHub', color: '#e8e8f0' },
    { icon: <FaLinkedin />, href: personalInfo.linkedin, label: 'LinkedIn', color: '#0a66c2' },
    { icon: <TbBrandLeetcode />, href: personalInfo.leetcode, label: 'LeetCode', color: '#ffa116' },
    { icon: <SiGeeksforgeeks />, href: personalInfo.gfg, label: 'GeeksforGeeks', color: '#2f8d46' },
    { icon: <FaEnvelope />, href: `mailto:${personalInfo.email}`, label: 'Email', color: '#00d4ff' },
];

const SocialSidebar = () => {
    return (
        <motion.div
            className="social-sidebar"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
        >
            <ul className="social-sidebar__list">
                {links.map((link, i) => (
                    <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.3 + i * 0.1 }}
                        className="social-sidebar__item"
                    >
                        <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            className="social-sidebar__link"
                            style={{ '--hover-color': link.color }}
                        >
                            {link.icon}
                        </a>
                    </motion.li>
                ))}
            </ul>
            <div className="social-sidebar__line" />
        </motion.div>
    );
};

export default SocialSidebar;
