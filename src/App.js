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
          label="Emotions"
          tags={["happy", "sad", "angry"]}
          onTagSelect={() => {}}
          onChange={setEmotion}
        />
        <TagSelector
          label="Color"
          tags={["red", "green", "blue"]}
          onTagSelect={() => {}}
          onChange={setColor}
        />
        <TagSelector
          label="Fruit"
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
