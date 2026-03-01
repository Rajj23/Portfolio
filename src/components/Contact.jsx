import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

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
                <p className="contact__label">04. What's Next?</p>
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
            </motion.div>
        </section>
    );
};

export default Contact;
