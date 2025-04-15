import React, { useEffect, useState } from "react";

const SelectAllCheckBox = () => {
  // State to manage "Select All" checkbox
  const [selectAll, setSelectAll] = useState(false);

  // State to manage individual checkboxes
  const [check, setCheck] = useState({
    reading: false,
    writing: false,
    coding: false,
  });

  // Handler for "Select All" checkbox toggle
  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll); // Update selectAll state

    // Update all individual checkboxes based on selectAll status
    const updated = Object.keys(check).reduce((acc, key) => {
      acc[key] = newSelectAll;
      return acc;
    }, {});
    setCheck(updated); // Set all checkboxes accordingly
  };

  // Handler for individual checkbox change
  const handleChange = (event) => {
    const { name, checked } = event.target;

    // Update the specific checkbox while keeping others unchanged
    setCheck((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  // Effect to sync "Select All" checkbox when individual checkboxes are manually changed
  useEffect(() => {
    const allChecked = Object.values(check).every(Boolean); // Check if all are true

    // Only update selectAll if needed (avoid infinite loop)
    if (selectAll !== allChecked) {
      setSelectAll(allChecked);
    }
  }, [check]); // Runs whenever any individual checkbox changes

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {/* Select All Checkbox */}
      <label>
        Select All
        <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
      </label>

      {/* Individual Checkboxes */}
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
  );
};

export default SelectAllCheckBox;
