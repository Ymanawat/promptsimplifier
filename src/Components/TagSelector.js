import { useState } from "react";
import "./TagSelector.css";

function TagSelector({ label, tags, onChange }) {
  const [selected, setSelected] = useState(null);
  const [inputValue, setInputValue] = useState("");

  function handleTagClick(tag) {
    setSelected((prevSelected) => {
      if (tag === prevSelected) {
        // if the clicked tag is already selected, clear the selection
        setSelected(null);
        return null;
      } else {
        // otherwise, select the clicked tag and clear any previously selected tag
        setSelected(tag);
        return tag;
      }
    });

    const result = tag ? `${tag}, ${inputValue}` : "";
    onChange(result);
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
    let result = event.target.value;
    if (selected) {
      result = `${selected} ${event.target.value}`;
    }
    onChange(result);
  }

  return (
    <div className="tag-container">
      <label className="tag-label">{label}</label>
      {tags.map((tag) => (
        <button
          key={tag}
          className={selected === tag ? "tag selected" : "tag"}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </button>
      ))}
      <input
        type="text"
        className="tag-input"
        value={inputValue}
        placeholder="Custom Input"
        onChange={handleInputChange}
      />
    </div>
  );
}

export default TagSelector;
