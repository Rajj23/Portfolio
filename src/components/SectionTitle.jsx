const SectionTitle = ({ number, children }) => {
    return (
        <div className="section-title">
            <span className="section-title__number">{number}</span>
            <h2 className="section-title__text">{children}</h2>
            <div className="section-title__line"></div>
        </div>
    );
};

export default SectionTitle;
