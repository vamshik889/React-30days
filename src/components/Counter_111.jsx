import React, { useEffect, useRef, useState } from "react";

const Counter_111 = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  let timerId = useRef(null);
  console.log("component rendered");

  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    clearInterval(timerId.current);

    setIsRunning(false);
  };
  const handleReset = () => {
    clearInterval(timerId.current);

    setIsRunning(false);
    setTime(0);
  };
  useEffect(() => {
    if (!isRunning) {
      clearInterval(timerId.current);
      return;
    }
    timerId.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timerId.current);

      console.log("cleanup triggered");
    };
  }, [isRunning]);

  return (
    <div>
      <h3>{time}</h3>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter_111;
