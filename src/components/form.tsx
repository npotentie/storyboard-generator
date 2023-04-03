import { useState } from "react";
import Image from "next/image";
import Question from "./question";
import questions from "../questions.json";

const Form = () => {
    const [scene, setScene] = useState(
      Object.fromEntries(Object.entries(questions).map(([questionKey]) => [questionKey, ""]))
    );
    const [isLoading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setScene({
            ...scene,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      const sceneArray = Object.values(scene);
      console.log(sceneArray);
  
      // Make API call to DALL-E API with sceneArray as prompt
      setLoading(true)
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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',
        },
        body: JSON.stringify({
          'model': 'image-alpha-001',
          'prompt': sceneArray.join(' '),
          'num_images': 1,
          'size': '512x512',
        }),
      });
  
      const data = await response.json();
      console.log(data.data[0].url);
      const img = document.createElement("img");
      img.src = data.data[0].url;
      img.classList.add("storyboard-image");
      // append to main content
      const main = document.querySelector(".main-content");
      main?.appendChild(img);
      setLoading(false)
      
    };
      
    return (
      
        <form onSubmit={handleSubmit}>
          {Object.entries(questions).map(([questionKey, question]) => (
            <Question
              key={questionKey}
              question={question.question}
              description={question.description}
              name={questionKey}
              maxLength={question.limit}
              onChange={handleChange}
            />
          ))}
          <div className="container">
            <button type="submit" className="button submit-button" disabled={isLoading}>
              {isLoading ? (
                <Image src="/loader.svg" alt="Loading" width={20} height={20} />
              ) : (
                "Generate"
              )}
            </button>
          </div>
        </form>
    )
}

export default Form;
