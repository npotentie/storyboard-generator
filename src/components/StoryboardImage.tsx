import Image from "next/image";
import Link from "next/link";

interface StoryboardImageProps {
    src: string;
    num: number;
}

const StoryboardImage: React.FC<StoryboardImageProps> = ({ src, num }) => {
    return (
        <>
        <div className="image">
            <Image
                src={src}
                alt={`Storyboard Image ${num}`}
                width={512}
                height={512}
            />
            <Link className="button" href={src} download={`Storyboard Image ${num}`} target="_blank">Download afbeelding</Link>
        </div>
        <style jsx>{`
            .image {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 16px;
            }
        `}</style>
        </>
    )
}

export default StoryboardImage;