import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { skills } from '../data/portfolioData';

const SkillCategory = ({ category, delayOffset }) => (
    <motion.div
        className="skills__category"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delayOffset, duration: 0.5 }}
    >
        <h3 className="skills__category-title">
            <span className="skills__category-line"></span>
            {category.title}
        </h3>

        <div className="skills__grid">
            {category.items.map((skill, index) => (
                <motion.div
                    key={index}
                    className="skills__item glass-card"
                    whileHover={{ scale: 1.05, y: -4 }}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: delayOffset + index * 0.03 }}
                >
                    <span className="skills__item-icon">{skill.icon}</span>
                    <span className="skills__item-name">{skill.name}</span>
                </motion.div>
            ))}
        </div>
    </motion.div>
);

const Skills = () => {
    const categories = Object.values(skills);

    return (
        <section id="skills" className="section" style={{ position: 'relative' }}>
            {/* Subtle Grid Background */}
            <div className="skills__grid-bg"></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <SectionTitle number="02.">Technical Skills</SectionTitle>

                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    {categories.map((category, index) => (
                        <SkillCategory
                            key={category.title}
                            category={category}
                            delayOffset={0.1 + index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
