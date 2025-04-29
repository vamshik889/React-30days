import React, { useEffect, useRef, useState } from "react";
import styles from "./inputWithItems.module.css";
import Pill from "./Pill";

const InputWithItems = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  const inputRef = useRef(null);
  const [selectedUserSet, setSelectedUserSet] = useState(new Set());

  //here set is used because if we select a user with name john and when we search jo again we will be showing the john in the suggestion list to avoid it we need to compare everytime the selected user is present in the suggestion list which takes lot of time to tackle it we will be creating a set here

  //https://dummyjson.com/users/search?q=John

  const fetchUsers = () => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
      return;
    }

    fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => setSuggestions(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchUsers();
  }, [searchTerm]);

  const handleSelectUser = (user) => {
    setSelectedUsers([...selectedUsers, user]);
    setSelectedUserSet(new Set([...selectedUserSet, user.email]));
    setSearchTerm("");
    setSuggestions([]);
    inputRef.current.focus();
  };

  const handleRemoveUSer = (user) => {
    const updatedUsers = selectedUsers.filter(
      (selectedUser) => selectedUser.id !== user.id
    );
    setSelectedUsers(updatedUsers);
    const updatedEmails = new Set(selectedUserSet);
    updatedEmails.delete(user.email);
    setSelectedUserSet(updatedEmails);
  };
  const handleKeyDown = (event) => {
    console.log(event.key);
    if (
      event.key === "Backspace" &&
      event.target.value === "" &&
      selectedUsers.length > 0
    ) {
      const lastUser = selectedUsers[selectedUsers.length - 1];
      handleRemoveUSer(lastUser);
    }
  };
  return (
    <div className={styles.userSearchContainer}>
      <div className={styles.userSearchInput}>
        {
          /* Pills  */
          selectedUsers.map((user) => (
            <Pill
              key={user.email}
              image={user.image}
              text={`${user.firstName} ${user.lastName}`}
              onClick={() => handleRemoveUSer(user)}
            />
          ))
        }
        {/* input field suggestiosn */}
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ border: "none", outline: "none" }}
            placeholder="Search for a user"
            ref={inputRef}
            onKeyDown={handleKeyDown}
          />
          {/* search suggestions */}

          <ul className={styles.suggestionsList}>
            {suggestions?.users?.map((user, index) => {
              return !selectedUserSet.has(user.email) ? ( //if the user email is not present in the selectedUserSet then show those in the suggestions
                <li
                  key={user.email}
                  className={styles.listItem}
                  onClick={() => handleSelectUser(user)}
                >
                  <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                    style={{ height: "30px" }}
                  />
                  <span>
                    {user.firstName} {user.lastName}
                  </span>
                </li>
              ) : (
                <></>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InputWithItems;
