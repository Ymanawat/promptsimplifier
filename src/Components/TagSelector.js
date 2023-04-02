import { useState } from 'react';
import './TagSelector.css'

function TagSelector({ label, tags, onTagSelect, selectedTags }) {
  const [selected, setSelected] = useState(null);

  function handleTagClick(tag) {
    if (tag === selected) {
      // if the clicked tag is already selected, clear the selection
      setSelected(null);
      onTagSelect(null);
    } else {
      // otherwise, select the clicked tag and clear any previously selected tag
      setSelected(tag);
      onTagSelect(tag);
    }
  }

  return (
    <div className='tag-container'>
      <label className='tag-label'>{label}</label>
      {tags.map((tag) => (
        <button
          key={tag}
          className={selected === tag ? 'tag selected' : 'tag'}
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

export default TagSelector;
