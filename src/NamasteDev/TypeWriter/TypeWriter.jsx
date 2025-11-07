import React, { useEffect, useRef, useState } from "react";

const TypeWriter = () => {
  const array = [
    "I am the text 1 and will be loaded in the form of typewriter effect",
    "Text 2 and will be loaded in the form of typewriter effect",
    "TEXT 3 WILL ALSO BE LOADED IN THE FORM OF TYPEWRITER EFFECT!!!",
  ];
  
  const [displayedText, setDisplayedText] = useState("");
  const [start, setStart] = useState(false);
  const [skip, setSkip] = useState(false);
  const [index, setIndex] = useState(0);
  const [number, setNumber] = useState(0);

  const intervalRef = useRef(null);
  const fullText = array[number];

  const handleNext = () => {
    if (number < array.length - 1) {
      setNumber((prev) => prev + 1);
    } else {
      setNumber(0);
    }
    setDisplayedText("");
    setIndex(0);
    setStart(false);
  };

  useEffect(() => {
    if (skip) {
      clearTimeout(intervalRef.current);
      setDisplayedText(fullText);
      setStart(false);
      setSkip(false);
    }
  }, [skip, fullText]);

  useEffect(() => {
    if (start) {
      if (index < fullText.length) {
        intervalRef.current = setTimeout(() => {
          setDisplayedText(fullText.slice(0, index + 1));
          setIndex((prev) => prev + 1);
        }, 100);
      } else {
        clearTimeout(intervalRef.current);
        setStart(false);
      }
    }
    return () => clearTimeout(intervalRef.current);
  }, [index, start, fullText]);

  const handleStart = () => {
    setDisplayedText("");
    setIndex(0);
    setStart(true);
    setSkip(false);
  };

  return (
    <div>
      <h1>Typewriter Effect</h1>
      <textarea value={displayedText} cols={100} rows={10} readOnly />
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={() => setSkip(true)}>Skip</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default TypeWriter;
