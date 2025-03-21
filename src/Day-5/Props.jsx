import React from "react";

const Props = (props) => {
  return (
    <div>
      <h1>Skills</h1>
      <ul>
        {props?.skills.map((skill, ind) => {
          return <li key={ind}>{skill}</li>;
        })}
      </ul>
    </div>
  );
};

export default Props;
