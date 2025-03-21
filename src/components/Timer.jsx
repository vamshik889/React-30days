import React, { useEffect, useState } from "react";

const Timer = () => {
  let [time, setTime] = useState(5);
  const [isrunning, setIsrunning] = useState(false);
  let intervalId = null;
  useEffect(() => {
    if (isrunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(intervalId); // Stop when time reaches 0
            setIsrunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isrunning]);
  const start = () => {
    if (time === 0) {
      setTime(5);
    }
    setIsrunning(true);
  };
  const stop = () => {
    setIsrunning(false);
  };
  const reset = () => {
    setIsrunning(false);
    setTime(5);
  };

  return (
    <div>
      <h1>{time}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Timer;
