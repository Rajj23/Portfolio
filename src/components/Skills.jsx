import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { skills } from '../data/portfolioData';

const categories = Object.values(skills);

const Skills = () => {
    const [activeTab, setActiveTab] = useState(0);
    const currentCategory = categories[activeTab];

    return (
        <section id="skills" className="section" style={{ position: 'relative' }}>
            {/* Subtle Grid Background */}
            <div className="skills__grid-bg"></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <SectionTitle number="02.">Technical Skills</SectionTitle>

                {/* Tab Bar */}
                <div className="skills__tabs">
                    {categories.map((cat, i) => (
                        <button
                            key={cat.title}
                            className={`skills__tab ${activeTab === i ? 'skills__tab--active' : ''}`}
                            onClick={() => setActiveTab(i)}
                        >
                            {cat.title}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="skills__grid skills__grid--tab"
                        style={{ maxWidth: '1000px', margin: '0 auto' }}
                    >
                        {currentCategory.items.map((skill, index) => (
                            <motion.div
                                key={`${activeTab}-${index}`}
                                className="skills__item glass-card"
                                whileHover={{ scale: 1.07, y: -5 }}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.04 }}
                            >
                                <span className="skills__item-icon">{skill.icon}</span>
                                <span className="skills__item-name">{skill.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Skills;
