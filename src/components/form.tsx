import { useState } from "react";
import Image from "next/image";
import Question from "./question";
import questionsJSON from "../questions.json";

interface IQuestion {
  question: string,
  description: string,
  limit: number
}
type Questions = {[key: string]: IQuestion}
const questions: Questions = questionsJSON

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

      let gptPrompt = `
You are an AI that generates prompts to be used to generate a single scene image in a storyboard using dall-e.

 - The prompt should be a maximum of 800 characters, and is should be in english.
 - The prompt should be generated from answers to a questionaire.
 - The prompt should depict people if they're specified, not characters or figures.
 - The prompt should aim to create a pholorealistic image.
 - After prompt you should specify the camera settings used, like this: "Camera: Sigma {number}mm f/{number}"
 - You should determine the camera settings based on the questionaire, and replcae the {number}s yourself
      
Here is the questionaire:
      `

      for (const questionKey in questions) {
        const question = questions[questionKey];

        if (scene[questionKey]) {
          gptPrompt+= `
  
Question: ${question.question}
Description: ${question.description}
Answer: ${scene[questionKey]}
          `
        }
      }

      gptPrompt+= `

The generated prompt (in english):
[insert]
          `

      setLoading(true)

      const gptResponse = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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'
        },
        body: JSON.stringify({
          model: 'text-davinci-003',
          prompt: gptPrompt,
          suffix: '',
          temperature: 0.7,
          max_tokens: 256,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0
        })
      });
      
      const gptData = await gptResponse.json();
      console.log(gptPrompt)
      console.log(gptData.choices[0].text,)
  
      // Make API call to DALL-E API with sceneArray as prompt
      const response = await fetch('https://api.openai.com/v1/images/generations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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',
        },
        body: JSON.stringify({
          'model': 'image-alpha-001',
          'prompt': gptData.choices[0].text,
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
                <Image src="/loader.svg" alt="Laden" width={20} height={20} />
              ) : (
                "Genereren"
              )}
            </button>
          </div>
        </form>
    )
}

export default Form;
