import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { achievements } from '../data/portfolioData';
import useLeetCodeStats from '../hooks/useLeetCodeStats';
import useGeeksForGeeksStats from '../hooks/useGeeksForGeeksStats';

const Achievements = () => {
    const { solvedCount, contestRating } = useLeetCodeStats('Rajjaiswal23_27');
    const { solvedCount: gfgCount } = useGeeksForGeeksStats('rajjaiswal23');
    const currentMonthYear = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date());

    return (
        <section id="achievements" className="section section--alt">
            <div className="container">
                <SectionTitle number="04.">Achievements</SectionTitle>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                    {achievements.map((item, index) => {
                        let dynamicTitle = item.title;
                        let dynamicDate = item.date;

                        if (item.platform === 'LeetCode' || item.platform === 'GeeksforGeeks') {
                            dynamicDate = currentMonthYear;
                        }

                        if (item.title.includes('Contest Rating') && contestRating) {
                            dynamicTitle = `LeetCode Contest Rating ${contestRating}`;
                        } else if (item.title.includes('Questions Solved') && item.platform === 'LeetCode' && solvedCount) {
                            dynamicTitle = `LeetCode ${solvedCount}+ Questions Solved`;
                        } else if (item.title.includes('Problems Solved') && item.platform === 'GeeksforGeeks' && gfgCount) {
                            dynamicTitle = `GeeksforGeeks ${gfgCount}+ Problems Solved`;
                        }

                        return (
                        <motion.div
                            key={index}
                            className="glass-card"
                            style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px', minHeight: '220px' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div style={{ fontSize: '2rem', color: 'var(--accent-1)' }}>
                                    {item.icon}
                                </div>
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--accent-2)', background: 'rgba(124, 58, 237, 0.1)', padding: '4px 10px', borderRadius: '4px' }}>
                                    {dynamicDate}
                                </span>
                            </div>
                            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginTop: '8px', lineHeight: '1.4' }}>{dynamicTitle}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', flex: 1 }}>{item.description}</p>
                            <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', fontSize: '0.85rem', color: 'var(--accent-1)', fontWeight: '600' }}>
                                {item.platform}
                            </div>
                        </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
