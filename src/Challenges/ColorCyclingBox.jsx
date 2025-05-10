import React from "react";
import useColor from "./useColor";

const ColorCyclingBox = () => {
    const colors = [
    { bg: "green", label: "green" },
    { bg: "red", label: "red" },
    { bg: "blue", label: "blue" },
    { bg: "yellow", label: "yellow" },
  ];
    const [index,changeColor] = useColor(...colors);
    console.log("render")
  
  return (
    <>
      <h1>Color Cycling Box</h1>
      <div
        style={{
          backgroundColor: "grey",
          height: "500px",
          width: "350px",
          border: "1px solid black",
          display: "flex",
          flexDirection:"column",
          gap:"10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "200px",
            width: "200px",
            border: "1px solid white",
            borderRadius: "5px",
            backgroundColor: `${colors[index].bg}`,
          }}
          label={`${colors[index].label}`}
        ></div>
        <button
        onClick={changeColor}
        >Change color</button>
      </div>
    </>
  );
};

export default ColorCyclingBox;
