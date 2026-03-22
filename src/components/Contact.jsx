import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { TbBrandLeetcode } from 'react-icons/tb';
import { SiGeeksforgeeks } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';

const contactLinks = [
    { icon: <FaGithub size={22} />, href: personalInfo.github, label: 'GitHub', color: '#e8e8f0' },
    { icon: <FaLinkedin size={22} />, href: personalInfo.linkedin, label: 'LinkedIn', color: '#0a66c2' },
    { icon: <TbBrandLeetcode size={22} />, href: personalInfo.leetcode, label: 'LeetCode', color: '#ffa116' },
    { icon: <SiGeeksforgeeks size={22} />, href: personalInfo.gfg, label: 'GeeksforGeeks', color: '#2f8d46' },
    { icon: <FaEnvelope size={22} />, href: `mailto:${personalInfo.email}`, label: 'Email', color: '#00d4ff' },
];

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            {/* Glowing Circle */}
            <div className="contact__glow"></div>

            <motion.div
                className="container"
                style={{ position: 'relative', zIndex: 1 }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="contact__label">What's Next?</p>
                <h2 className="contact__heading">Let's Connect</h2>
                <p className="contact__text">
                    I'm actively seeking SDE internship and full-time opportunities where I can contribute to building systems at scale. If you're looking for someone who cares deeply about clean architecture and shipping reliable software — let's talk.
                </p>

                <motion.a
                    href={`mailto:${personalInfo.email}`}
                    className="contact__btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Say Hello
                </motion.a>

                {/* Social Links Row */}
                <motion.div
                    className="contact__social-row"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {contactLinks.map((link, i) => (
                        <motion.a
                            key={i}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            className="contact__social-icon"
                            style={{ '--icon-color': link.color }}
                            whileHover={{ scale: 1.2, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.08 }}
                        >
                            {link.icon}
                        </motion.a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Contact;
