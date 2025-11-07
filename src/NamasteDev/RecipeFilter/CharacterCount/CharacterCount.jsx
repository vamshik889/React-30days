import React, { useState } from "react";

const CharacterCount = () => {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");
  let message;
  if (!value) {
  message = "Please set a max length first";
} else if (text.length > Number(value)) {
  message = `Limit exceed by ${text.length - value} characters!`;
} else if (text.length === Number(value) - 1) {
  message = "You are close to the limit";
} else {
  message = "";
}

  return (
    <div>
      <h1>Character count</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label>
          Max length:{" "}
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
        <p>{`${text.length} / ${value}`}</p>
        {message}
      </div>
    </div>
  );
};

export default CharacterCount;
