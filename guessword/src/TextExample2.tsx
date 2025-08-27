import React, { useEffect, useState } from "react";

const TextExample2 = () => {
  const [inputText, setInputText] = useState<string>("");
  const [displayText, setDisplayText] = useState<string>("Type something!");

  useEffect(() => {
    console.log(displayText);
    if (displayText !== "Type something!") {
      alert("Text change! " + "New Text: " + displayText);
    }
  }, [displayText]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const text = e.target;
    console.log(text.value);

    setInputText(text.value);
  };

  const handleDisplayText = () => {
    setDisplayText(inputText);
    setInputText("");
  };

  return (
    <div className="container bg-blue-600 text-white">
      TextExample2
      <div className="section-container text-white gap-2">
        <label>
          Input
          <input
            type="text"
            name="inputText"
            placeholder="Type something..."
            value={inputText}
            className="ml-2 text-black border-2 pl-2"
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleDisplayText}>Display Text</button>
        <p>Current Text: {displayText}</p>
      </div>
    </div>
  );
};

export default TextExample2;
