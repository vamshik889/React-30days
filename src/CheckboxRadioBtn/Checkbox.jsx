import React, { useEffect, useState } from "react";

const Checkbox = () => {
  const [check, setCheck] = useState({
    reading: false,
    writing: false,
    coding: false,
  });
  const [selected, setSelected] = useState([]);

  const handleChange = (event) => {
    const checked = event.target.checked;
    let name = event.target.name;
    setCheck({ ...check, [name]: checked });
  };

  useEffect(() => {
    const updated = Object.keys(check).filter((item) => check[item] === true);
    setSelected(updated);
  }, [check]);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label>
          
          Reading
          <input
            type="checkbox"
            name="reading"
            checked={check.reading}
            onChange={handleChange}
          />
        </label>
        <label>
          
          Writing
          <input
            type="checkbox"
            name="writing"
            checked={check.writing}
            onChange={handleChange}
          />
        </label>
        <label>
          Coding
          <input
            type="checkbox"
            name="coding"
            checked={check.coding}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        {selected.length > 0
          ? selected.map((item, i) => <li key={i}>{item}</li>)
          : "No selected items"}
      </div>
    </>
  );
};

export default Checkbox;
