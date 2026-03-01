import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { TbBrandLeetcode } from 'react-icons/tb';
import { SiGeeksforgeeks } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';

const socialLinks = [
    { icon: <FaGithub />, url: personalInfo.github },
    { icon: <FaLinkedin />, url: personalInfo.linkedin },
    { icon: <FaInstagram />, url: personalInfo.instagram },
    { icon: <TbBrandLeetcode />, url: personalInfo.leetcode },
    { icon: <SiGeeksforgeeks />, url: personalInfo.gfg },
    { icon: <FaEnvelope />, url: `mailto:${personalInfo.email}` },
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__socials">
                {socialLinks.map((link, i) => (
                    <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__social-link"
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
            <div className="footer__credit">
                <p>
                    Designed & Built by{' '}
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                        {personalInfo.name}
                    </a>
                </p>
                <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
