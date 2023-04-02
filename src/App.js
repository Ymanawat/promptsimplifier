import { useState } from "react";
import "./App.css";
import TagSelector from "./Components/TagSelector";
import logo from "./Images/Logo.png";

function App() {
  const [artMedium, setArtMedium] = useState("");
  const [subject, setSubject] = useState("");
  const [action, setAction] = useState("");
  const [attire, setAttire] = useState("");
  const [background, setBackground] = useState("");
  const [artist, setArtist] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [Loading, setLoading] = useState(false);
  const [imageR, setImage] = useState(null);

  const prompt = `${artMedium} ${subject} ${action} ${attire} ${background} ${artist}`;
  const inputValueWithPrompt = inputValue.startsWith(prompt)
    ? inputValue
    : `${prompt} ${inputValue}`;

  const generate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      data: [inputValue],
    };
    const promptRes = await fetch(
      "https://daspartho-prompt-extend.hf.space/api/predict",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (promptRes) {
      const data = await promptRes.json();
      const newPrompt = {
        text_prompts: [
          {
            text: `${data.data[0]}`,
          },
        ],
      };
      const response = await fetch(
        "https://api.stability.ai/v1/generation/stable-diffusion-v1-5/text-to-image",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "sk-dUgP0fk9HgAHX7yLADMOvD9YCOgPuSPDMwYLJKP3RDlWn44m",
          },
          body: JSON.stringify(newPrompt),
        }
      );
      if (response) {
        const json = await response.json();
        const imageData = json.artifacts[0].base64;
        const img = new Image();
        img.src = `data:image/png;base64,${imageData}`;
        setImage(img);
        setLoading(false);
      }
    }
  };

  return (
    <>
      <div style={{ margin: "32px" }}>
        <img src={logo} alt="Logo" />
      </div>

      <div className="main">
        <form onSubmit={generate}>
          <input
            type="text"
            className="InputField"
            value={inputValueWithPrompt === prompt ? "" : inputValueWithPrompt}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Your Simplified Prompt Here"
          />

          <div className="container">
            <TagSelector
              label="Art Medium"
              tags={["Illustration", "Photo", "Digital Art", "Painting"]}
              onChange={setArtMedium}
            />
            <TagSelector
              label="Subject"
              tags={["Person", "Men", "Women", "Dog"]}
              onChange={setSubject}
            />
            <TagSelector
              label="Action"
              tags={["Standing", "Running", "Fighting", "Dancing"]}
              onChange={setAction}
            />
            <TagSelector
              label="Attire"
              tags={["Casual", "Saree", "Hoodie", "Suit"]}
              onChange={setAttire}
            />
            <TagSelector
              label="Background"
              tags={["Sunny", "Cloudy", "Rainy", "Hilly"]}
              onChange={setBackground}
            />
            <TagSelector
              label="Artist"
              tags={[
                "Greg rutkowski",
                "Ross draws",
                "Ghibhli Studios",
                "Ily Kuvshinov",
              ]}
              onChange={setArtist}
            />
          </div>

          {!Loading ? (
            <button type="submit" className="generate-button">
              Generate Image
            </button>
          ) : (
            <div className="generate-button">Loading...</div>
          )}
        </form>
        {imageR && (
          <img style={{ height: "500px", width: "500px" }} src={imageR.src} />
        )}
      </div>
    </>
  );
}

export default App;
