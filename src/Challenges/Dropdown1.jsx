import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import UserPill from "./UserPill"; // Make sure this component exists

const Dropdown1 = () => {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const URL = "https://dummyjson.com/users";

  const fetchUsersData = async () => {
    try {
      const res = await axios.get(URL);
      setUsers(res.data.users);
      setFilteredUsers(res.data.users); // initially show all
      setHasFetched(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFocus = () => {
    if (!hasFetched) fetchUsersData();
  };

  const handleSelect = (id) => {
    const isAlreadySelected = selectedUsers.some((user) => user.id === id);
    if (!isAlreadySelected) {
      const user = users.find((u) => u.id === id);
      if (user) {
        setSelectedUsers((prev) => [...prev, user]);
        setText(""); // clear search box after select
      }
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);

    const lower = value.toLowerCase();
    const filtered = users.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      return fullName.includes(lower);
    });

    setFilteredUsers(filtered);
  };

  const handleRemoval = useCallback((id) => {
    setSelectedUsers((prev) => prev.filter((user) => user.id !== id));
  }, []);

  return (
    <div style={{ width: "300px", margin: "20px auto", fontFamily: "sans-serif" }}>
      <input
        type="text"
        placeholder="Search a user..."
        value={text}
        onChange={handleChange}
        onFocus={handleFocus}
        style={{
          width: "100%",
          padding: "8px",
          fontSize: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />

      <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px", gap: "8px" }}>
        {selectedUsers.map((user) => (
          <UserPill key={user.id} user={user} handleRemoval={handleRemoval} />
        ))}
      </div>

      <ul
        style={{
          height: "300px",
          overflowY: "auto",
          listStyle: "none",
          padding: 0,
          marginTop: "10px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      >
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => {
            const isSelected = selectedUsers.some((u) => u.id === user.id);
            if (isSelected) return null;

            return (
              <li
                key={user.id}
                style={{
                  padding: "10px",
                  backgroundColor: "#f0f0f0",
                  borderBottom: "1px solid #ddd",
                  cursor: "pointer",
                }}
                onClick={() => handleSelect(user.id)}
              >
                {user.firstName + " " + user.lastName}
              </li>
            );
          })
        ) : text.length > 0 ? (
          <li style={{ padding: "10px", color: "#888" }}>
            No results found for "{text}"
          </li>
        ) : null}
      </ul>
    </div>
  );
};

export default Dropdown1;
