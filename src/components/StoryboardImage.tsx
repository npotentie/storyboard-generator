import Image from "next/image";

interface StoryboardImageProps {
    src: string;
    num: number;
}

const StoryboardImage: React.FC<StoryboardImageProps> = ({ src, num }) => {
    return (
        <div className="container">
            <Image
                src={src}
                alt={`Storyboard Image ${num}`}
                width={512}
                height={512}
            />
            <a href={src} download={`Storyboard Image ${num}`} target="_blank">Download Image</a>
        </div>
    )
}

export default StoryboardImage;