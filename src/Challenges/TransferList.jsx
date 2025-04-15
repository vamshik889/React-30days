import React, { useEffect, useState } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const TransferList = () => {
  const [left, setLeft] = useState({
    reading: false,
    writing: false,
    coding: false,
    playing: false,
  });
  const [right, setRight] = useState({
    node: false,
    react: false,
    express: false,
    mongodb: false,
  });

  const handleChangeLeft = (event) => {
    const { name, checked } = event.target;
    setLeft({ ...left, [name]: checked });
  };
  const handleChangeRight = (event) => {
    const { name, checked } = event.target;
    setRight({ ...right, [name]: checked });
  };

  const handleDoubleArrow = (event) => {
    const name = event.currentTarget.name;

    if (name === "left-double") {
      setLeft((prev) => ({ ...prev, ...right }));
      setRight(() => ({}));
    }
    if (name === "right-double") {
      setRight((prev) => ({ ...prev, ...left }));
      setLeft(() => ({}));
    }
  };
  const handleSingleArrow = (event) => {
    const { name } = event.currentTarget;

    if (name === "left") {
      //bring the checked right items and show in the left panel
      const checkedRight = {};
      const rightCopy = { ...right };
      for (let key in rightCopy) {
        if (rightCopy[key] === true) {
          checkedRight[key] = true;
          delete rightCopy[key];
        }
      }
      setLeft((prev) => ({ ...prev, ...checkedRight }));
      setRight(rightCopy);
    }
    if (name === "right") {
      //bring the checked right items and show in the left panel
      const checkedLeft = {};
      const leftCopy = { ...left };
      for (let key in leftCopy) {
        if (leftCopy[key] === true) {
          checkedLeft[key] = true;
          delete leftCopy[key];
        }
      }
      setRight((prev) => ({ ...prev, ...checkedLeft }));
      setLeft(leftCopy);
    }
  };

  // useEffect(() => {
  //   console.log("left", left);
  //   console.log("right", right);
  // });
  return (
    <div className="container"
    style={{display:"flex",gap:"10px",border:"2px solid black"}}
    >
      <div className="left"
          style={{display:"flex",gap:"10px",flexDirection:"column",border:"1px solid black",padding:"5px"}}

      >
        {Object.keys(left).map((key, index) => (
          <label key={index}>
            {key}
            <input
              type="checkbox"
              onChange={handleChangeLeft}
              name={key}
              checked={left[key]}
            />
          </label>
        ))}
      </div>
      <div className="btns"
          style={{display:"flex",flexDirection:"column",gap:"10px",padding:"5px"}}

      >
        <button
          name="left-double"
          onClick={handleDoubleArrow}
          disabled={Object.keys(right).length === 0}
        >
          <MdKeyboardDoubleArrowLeft />
        </button>
        <button
          name="left"
          onClick={handleSingleArrow}
          disabled={Object.keys(right).length === 0}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button
          name="right"
          onClick={handleSingleArrow}
          disabled={Object.keys(left).length === 0}
        >
          <MdOutlineKeyboardArrowRight />
        </button>

        <button
          name="right-double"
          onClick={handleDoubleArrow}
          disabled={Object.keys(left).length === 0}
        >
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>
      <div className="right"
          style={{display:"flex",gap:"10px",flexDirection:"column",border:"1px solid black",padding:"5px"}}

      >
        {Object.keys(right).map((key, index) => (
          <label key={index}>
            {key}
            <input
              type="checkbox"
              onChange={handleChangeRight}
              name={key}
              checked={right[key]}
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default TransferList;
