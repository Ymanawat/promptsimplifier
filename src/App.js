import { useState } from "react";
import "./App.css";
import TagSelector from "./Components/TagSelector";

function App() {
  const [emotion, setEmotion] = useState("");
  const [color, setColor] = useState("");
  const [fruit, setFruit] = useState("");
  const [inputValue, setInputValue] = useState("");

  const combinedString = `${emotion} ${color} ${fruit} ${inputValue}`;

  return (
    <div className="main">
      <input
        type="text"
        className="InputField"
        value={inputValue}
        onChange={(e) => setInputValue(combinedString)}
        placeholder={combinedString}
      />
      <div className="container">
        <TagSelector
          label="Select an emotion:"
          tags={["happy", "sad", "angry"]}
          onTagSelect={() => {}}
          onChange={setEmotion}
        />
        <TagSelector
          label="Select a color:"
          tags={["red", "green", "blue"]}
          onTagSelect={() => {}}
          onChange={setColor}
        />
        <TagSelector
          label="Select a fruit:"
          tags={["apple", "banana", "orange"]}
          onTagSelect={() => {}}
          onChange={setFruit}
        />
      </div>
      <button className="generate-button">
        <span>Generate Image</span>
      </button>
    </div>
  );
}

export default App;
