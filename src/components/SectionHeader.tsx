interface SectionHeaderProps {
    title: string;
    description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
    return (
        <div className="container">
            <h1 className="title">{title}</h1>
            {description && <p>{description}</p>}
        </div>
    );
};

export default SectionHeader;