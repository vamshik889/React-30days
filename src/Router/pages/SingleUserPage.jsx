import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleUserPage = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const param = useParams();
  console.log(param);

  const fetchUser = async (param) => {
    try {
      let data = await fetch(`https://reqres.in/api/users/${param.id}`);
      let user = await data.json();
      setUser(user.data); //here we are getting the object which has data key which holds the user data
      setLoading(false);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser(param);
    console.log(user);
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading user details...</p>
      ) : (
        <div style={{display:"flex",gap:"5px",flexDirection:"column", height:"300px",width:"200px"}}>
          <img   src={user.avatar} alt={user.first_name} style={{height:"80%"}}/>
          <h4>{user.first_name +" " + user.last_name}</h4>
          <h5>{user.email}</h5>

          <p></p>
          <Link to={"/users"}>Go Back</Link>
        </div>
      )}
    </>
  );
};

export default SingleUserPage;
