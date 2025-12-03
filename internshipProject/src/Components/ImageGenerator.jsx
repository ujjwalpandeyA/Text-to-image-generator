import React, { useState } from "react";
import axios from "axios";
import "../CSS/ImageGenerator.css";

function ImageGenerator() {
  const [newImage, setNewImgage] = useState(null);
  const [inputText, setInputText] = useState(null);

  const options = {
    method: "POST",
    url: "https://ai-text-to-image-generator-api.p.rapidapi.com/realistic",
    headers: {
      "x-rapidapi-key": "d33c9e580emsheac29dc9aa04380p1ff4aajsn7232dce3b8fa",
      "x-rapidapi-host": "ai-text-to-image-generator-api.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: {
      inputs: inputText,
    },
  };

  let GetImage = function () {
    try {
      async function GenImg() {
        // console.log("Function Called")
        const response = await axios.request(options);
        console.log(response.data);
        setNewImgage(response.data.url);
        // console.log("FUnction WOrking")
      }
      GenImg();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="image-generate-container">
        <h1 id='generate-main-text'>Generate Image Here</h1>

        <div className="input-field-box">

          <label for="message" className="instruction-text-area">
            <h3 id="instruction-text">Write your Prompt below</h3>
          </label>

          <textarea id="message" rows="4" className="prompt-input-box"
            placeholder="Write Prompt here..." 
            onChange={(event) =>setInputText(event.target.value)}>
          </textarea>

          <button onClick={GetImage} type="button" className="button-field">
            Generate
          </button>

        </div>
        
        <div className="image-generate-output-field">
          <img className="image-generate-img" src={newImage} />
        </div>

      </div>
    </>
  );
}

export default ImageGenerator;