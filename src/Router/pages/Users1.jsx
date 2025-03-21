import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users1 = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchusers();
  }, []);
  const fetchusers = async () => {
    try {
      const res = await fetch("https://reqres.in/api/users?page=2");
      const data = await res.json();
      setUsers(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {users.length > 0 ? (
        users.map((user) => {
          return (
            <div key={user.id} style={{display:"flex" ,flexDirection:"column",gap:"10px"}}>
              <img src={user.avatar} alt={user.firstname}></img>
              <Link to={`${user.id}`}>{user.first_name}</Link>
            </div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Users1;
