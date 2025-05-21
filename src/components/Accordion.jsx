import React, { useState } from "react";

//Basic Accordion
const Accordion = () => {
    const style = {
       
    border:"1px solid black",
    width:"300px",
    margin:"5px",
    padding:"10px",
    cursor:"pointer"
    }
 
  const [itemIndex, setItemIndex] = useState(null);
  const data = [
    {
      title: "React js",
      content: "React js content ",
    },
    {
      title: "Node js",
      content: "Node js content ",
    },
    {
      title: "Express js",
      content: "Express js content ",
    },
  ];

  const handleClick = (index) => {
    if (itemIndex === index) {
      setItemIndex(null);
    } else {
      setItemIndex(index);
    }
  };

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} onClick={() => handleClick(index)}
        style={style}
        >
          <p>{item.title}<span style={{display:"inline-block",marginLeft:"200px"}}>{itemIndex === index?"⬆️":"⬇️"}</span></p> 
          {itemIndex === index && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
