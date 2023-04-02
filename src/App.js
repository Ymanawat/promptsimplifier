import { useState } from "react";
import "./App.css";
import TagSelector from "./Components/TagSelector";

function App() {
  const [artMedium, setArtMedium] = useState("");
  const [subject, setSubject] = useState("");
  const [action, setAction] = useState("");
  const [attire, setAttire] = useState("");
  const [background, setBackground] = useState("");
  const [artist, setArtist] = useState("");
  const [inputValue, setInputValue] = useState("");

  const combinedString = `${artMedium}, ${subject}, ${action}, ${attire}, ${background}, ${artist}, ${inputValue}`;

  return (
    <div className="main">
      <input
        type="text"
        className="InputField"
        value={combinedString === ", , , , , , " ? "" : `${combinedString}${inputValue}`}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Your Simplified Prompt Here"
      />
      <div className="container">
        <TagSelector
          label="Art Medium"
          tags={["Illustration", "Photo", "Digital Art", "Painting"]}
          onTagSelect={() => {}}
          onChange={setArtMedium}
        />
        <TagSelector
          label="Subject"
          tags={["Person", "Men", "Women", "Dog"]}
          onTagSelect={() => {}}
          onChange={setSubject}
        />
        <TagSelector
          label="Action"
          tags={["Standing", "Running", "Fighting", "Dancing"]}
          onTagSelect={() => {}}
          onChange={setAction}
        />
        <TagSelector
          label="Attire"
          tags={["Casual", "Saree", "Hoodie", "Suit"]}
          onTagSelect={() => {}}
          onChange={setAttire}
        />
        <TagSelector
          label="Background"
          tags={["Sunny", "Cloudy", "Rainy", "Hilly"]}
          onTagSelect={() => {}}
          onChange={setBackground}
        />
        <TagSelector
          label="Artist"
          tags={["Greg rutkowski", "Ross draws", "Ghibhli Studios", "Ily Kuvshinov"]}
          onTagSelect={() => {}}
          onChange={setArtist}
        />
      </div>
      <button className="generate-button">
        <span>Generate Image</span>
      </button>
    </div>
  );
}

export default App;
