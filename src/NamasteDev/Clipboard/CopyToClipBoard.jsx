import { useRef, useState } from "react";

function CopyClipboard() {
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);
  let ref = useRef(null)
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if(ref.current){
        clearTimeout(ref.current)
      }
     ref.current =  setTimeout(() => {
        setCopied(false);
        setText("")
      }, 3000);
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className="copyToClipboard">
      <h1>Copy to Clipboard</h1>
      <p>Click the button to copy the text</p>

      <div className="copyToClipboard-container">
        <div className="form">
          <label htmlFor="text">
            Enter your text : <input
              type="text"
              id="text"
              value={text}
              onChange={(e)=>setText(e.target.value)}
              data-testid="input-field"
              placeholder="Type Something"
            />
          </label>
          <button
            onClick={() => {
              handleCopy();
            }}
            className="btn"
            data-testid="copy-button"
            disabled= {!text.trim()}
            style={{marginLeft:"5px"}}
          >
            Copy
          </button>
          {copied && <p style={{ background: "green" }}>Copied!</p>}
        </div>
      </div>
    </div>
  );
}

export default CopyClipboard;
