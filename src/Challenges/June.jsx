import React, { useEffect, useState } from "react";

const June = () => {
  const array = ["reading", "writig", "playing", "cooking"];
  const initialState = array.reduce((acc, ele) => {
    acc[ele] = false;
    return acc;
  }, {});
  const [checkedItems, setCheckedItems] = useState(initialState);
  const [selectAll, setSelectAll] = useState(false);
  const listStyle = {
    listStyleType: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    margin: "10px",
  };

  const individuallySelectAll = () => {
    const selectedAllIndividually = Object.values(checkedItems).every(Boolean);
    if (selectedAllIndividually !== selectAll) {
      setSelectAll(!selectAll);
    }
  };
  useEffect(() => {
    individuallySelectAll();
  }, [checkedItems]);

  const handleSelectAll = (e) => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    const newIndividualChecked = Object.keys(checkedItems).reduce(
      (acc, cur) => {
        acc[cur] = newSelectAll;
        return acc;
      },
      {}
    );
    setCheckedItems(newIndividualChecked);
  };
  const handleSelect = (e) => {
    const { name, checked } = e.target;
    setCheckedItems((prev) => ({ ...prev, [name]: checked }));
  };
  return (
    <div>
      <ul>
        <li style={listStyle}>
          <label htmlFor="">Select All</label>
          <input
            type="checkbox"
            onChange={handleSelectAll}
            name="selectAll"
            checked={selectAll}
          />
        </li>

        {array.map((ele, ind) => {
          return (
            <li key={ind} style={listStyle}>
              <label>{ele}</label>
              <input
                type="checkbox"
                onChange={handleSelect}
                name={ele}
                checked={checkedItems[ele]}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default June;
