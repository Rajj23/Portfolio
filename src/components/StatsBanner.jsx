import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import useLeetCodeStats from '../hooks/useLeetCodeStats';

const useCountUp = (target, duration = 1800, startOnMount = false) => {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(startOnMount);

    useEffect(() => {
        if (!started) return;
        const numericTarget = parseInt(target.replace(/\D/g, ''), 10);
        if (isNaN(numericTarget)) {
            setCount(target);
            return;
        }
        let startTime = null;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * numericTarget));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(numericTarget);
        };
        requestAnimationFrame(step);
    }, [started, target, duration]);

    return { count, start: () => setStarted(true) };
};

const StatItem = ({ number, label, suffix = '' }) => {
    const { count, start } = useCountUp(number, 1800);
    const ref = useRef();
    const observed = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !observed.current) {
                    observed.current = true;
                    start();
                }
            },
            { threshold: 0.3 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [start]);

    const isNumeric = !isNaN(parseInt(number.replace(/\D/g, ''), 10));

    return (
        <motion.div
            ref={ref}
            className="stats-banner__item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <span className="stats-banner__number">
                {isNumeric ? `${count}${suffix}` : number}
            </span>
            <span className="stats-banner__label">{label}</span>
        </motion.div>
    );
};

const StatsBanner = () => {
    const { solvedCount, contestRating } = useLeetCodeStats('Rajjaiswal23_27');

    const stats = [
        { number: solvedCount ? String(solvedCount) : '680', label: 'Problems Solved', suffix: '+' },
        { number: '3', label: 'Systems Engineered', suffix: '' },
        { number: 'AWS', label: 'Cloud Certified', suffix: '' },
        { number: contestRating ? String(contestRating) : '1586', label: 'LeetCode Rating', suffix: '' },
    ];

    return (
        <div className="stats-banner">
            <div className="stats-banner__inner">
                {stats.map((stat, i) => (
                    <StatItem key={i} number={stat.number} label={stat.label} suffix={stat.suffix} />
                ))}
            </div>
        </div>
    );
};

export default StatsBanner;
