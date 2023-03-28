import { useState } from "react";
import Question from "./question";
import questions from "../questions.json";

const Form = () => {
    const [scene, setScene] = useState({
        setting: '',
        camera: '',
        emotions: '',
        details: '',
        lighting: '',
        colors: '',
        weather: '',
        props: '',
        composition: '',
        characters: '',
        clothing: '',
    });

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
      document.body.appendChild(img);
    };

    return (
        <form onSubmit={handleSubmit}>
          <Question
            question={questions.setting.question}
            description={questions.setting.description}
            name="setting"
            maxLength={questions.setting.limit}
            onChange={handleChange}
          />
          <Question
            question={questions.camera.question}
            description={questions.camera.description}
            name="camera"
            maxLength={questions.camera.limit}
            onChange={handleChange}
          />
          <Question
            question={questions.emotions.question}
            description={questions.emotions.description}
            name="emotions"
            maxLength={questions.emotions.limit}
            onChange={handleChange}
          />
          <Question
            question={questions.details.question}
            description={questions.details.description}
            name="details"
            maxLength={questions.details.limit}
            onChange={handleChange}
          />
          <Question
            question={questions.lighting.question}
            description={questions.lighting.description}
            name="lighting"
            maxLength={questions.lighting.limit}
            onChange={handleChange}
          />
          <Question
            question={questions.colors.question}
            description={questions.colors.description}
            name="colors"
            maxLength={questions.colors.limit}
            onChange={handleChange}
          />
          <Question
            question={questions.weather.question}
            description={questions.weather.description}
            name="weather"
            maxLength={questions.weather.limit}
            onChange={handleChange}
          />
          <Question
            question={questions.props.question}
            description={questions.props.description}
            name="props"
            maxLength={questions.props.limit}
            onChange={handleChange}
          />
          <Question
            question={questions.composition.question}
            description={questions.composition.description}
            name="composition"
            maxLength={questions.composition.limit}
            onChange={handleChange}
          />
          <Question
            question={questions.characters.question}
            description={questions.characters.description}
            name="characters"
            maxLength={questions.characters.limit}
            onChange={handleChange}
          />
          <Question
            question={questions.clothing.question}
            description={questions.clothing.description}
            name="clothing"
            maxLength={questions.clothing.limit}
            onChange={handleChange}
          />
          <div className="container">
            <button type="submit" className="button submit-button"><p>Next</p></button>
          </div>
        </form>
    )
}

export default Form;
