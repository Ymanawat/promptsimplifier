import { useState } from "react";
import "./App.css";
import TagSelector from "./Components/TagSelector";

function App() {
  const [selectedTags, setSelectedTags] = useState([]);

  function handleTagSelect(tag) {
    setSelectedTags((prevSelectedTags) => {
      const newSelectedTags = [...prevSelectedTags];
      const tagIndex = newSelectedTags.indexOf(tag);
      if (tagIndex !== -1) {
        newSelectedTags.splice(tagIndex, 1);
      } else {
        newSelectedTags.push(tag);
      }
      return newSelectedTags;
    });
  }

  return (
    <div className="main">
      <input
        type="text"
        className="InputField"
        value={selectedTags.join(", ")}
        onChange={(event) =>
          setSelectedTags(event.target.value.split(",").map((t) => t.trim()))
        }
      />
      <div className="container">
        <TagSelector
          label="Emotions"
          tags={["Happy", "Sad", "Angry", "Surprised", "Confused"]}
          onTagSelect={handleTagSelect}
          selectedTags={selectedTags}
        />
        <TagSelector
          label="Colors"
          tags={["Red", "Green", "Blue", "Yellow", "Purple"]}
          onTagSelect={handleTagSelect}
          selectedTags={selectedTags}
        />
        <TagSelector
          label="Fruits"
          tags={["Apple", "Banana", "Orange", "Mango", "Pineapple"]}
          onTagSelect={handleTagSelect}
          selectedTags={selectedTags}
        />
      </div>
    </div>
  );
}

export default App;
