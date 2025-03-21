import React, { useEffect, useRef, useState } from "react";

const Timer1 = () => {
  const [time, setTime] = useState(5);
  const ref = useRef(null)
  
  useEffect(() => {
     ref.current = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(ref.current);
          return 0;
        } else {
          return prev - 1;
        }
      });
    }, 1000);
    return () => {
      clearInterval(ref.current);
      
    };
  }, []);

  return <div>{time}</div>;
};

export default Timer1;
