interface SectionHeaderProps {
    title: string;
    description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
    const desc = description?.replaceAll("\n", "<br/>");
    return (
        <>
            <div className="container">
                <h1 className="title">{title}</h1>
                {description && <p>{desc}</p>}
            </div>
            <style jsx>{`
                .container p {
                    font-family: Open Sans Regular;
                    font-size: 14px;
                    line-height: 19.07px;
                    color: #000000;
                }
            `}</style>
        </>
    );
};

export default SectionHeader;