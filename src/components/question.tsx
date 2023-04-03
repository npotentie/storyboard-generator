import { useRef, useState } from "react";

interface QuestionProps {
    question: string;
    description?: string;
    name: string;
    maxLength: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Question: React.FC<QuestionProps> = ({ question, description, name, maxLength, onChange }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [anwser, setAnswer] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value);
        onChange(event);
    };

    return (
        <div className="container">
            <div className="question">
                <div className="header">{question}</div>
                {description && <div className="description">{description}</div>}
            </div> 
            <label>
            <input
                type="text"
                name={name}
                value={anwser}
                onChange={handleChange}
                maxLength={maxLength}
                ref={inputRef}
                className="input-field"
                placeholder={`Max ${maxLength} characters.`}
            />
            </label>
        </div>
    );
};

export default Question;
