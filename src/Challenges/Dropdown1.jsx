import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import UserPill from "./UserPill";

const Dropdown1 = () => {
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [hasFetched, setHasFetched] = useState(false);
  const [selectedUsers, setSelectedusers] = useState([]);

  const URL = "https://dummyjson.com/users";

  const fetchUsersData = async () => {
    try {
      const res = await axios.get(URL);
      setUsers(res.data.users);
      setFilteredUsers(res.data.users); // Initially show all
      setHasFetched(true);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch once on input focus
  const handleFocus = () => {
    if (!hasFetched) {
      fetchUsersData();
    }
  };
  useEffect(() => {
    console.log(selectedUsers);
  }, [selectedUsers]);

  const handleSelect = (id) => {
    const isUserSelected = selectedUsers.some((user) => user.id === id);
    if (!isUserSelected) {
      const user = users.find((user) => user.id === id);
      setSelectedusers((prev) => {
        return [...prev, user];
      });
    }
  };
  // Update input text and trigger filter
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
  const handleRemoval = useCallback((id)=>{
    const updated = selectedUsers.filter((user)=>user.id !== id);
    setSelectedusers(updated)
  })

  return (
    <div>
      <input
        type="text"
        placeholder="Search a user..."
        value={text}
        onChange={handleChange}
        onFocus={handleFocus}
        style={{width:"200px"}}
      />
      <div>
        {
          selectedUsers && selectedUsers.map((user)=><UserPill key={user.id} user={user} handleRemoval={handleRemoval}/>)
        }
      </div>

      <ul
        style={{
          height: "400px",
          overflowY: "scroll",
          listStyle: "none",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <li
              key={user.id}
              style={{
                height: "40px",
                backgroundColor: "blue",
                padding: "5px",
                color: "white",
              }}
              onClick={() => handleSelect(user.id)}
            >
              {user.firstName + " " + user.lastName}
            </li>
          ))
        ) : (
          <li style={{ padding: "5px" }}>Loading...</li>
        )}
      </ul>
    </div>
  );
};

export default Dropdown1;
