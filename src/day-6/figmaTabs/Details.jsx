import React, { useEffect, useState } from "react";

const Details = ({ data, userid }) => {
   // const {id,name,job,image,text} = data[0]
   const  [userDetails,setUserDetails] = useState(null)
   console.log(data)
  useEffect(() => {
     const user = userid?data.find((e)=>e.id===userid):data[0];
     setUserDetails(user);
     console.log(user)
  }, [userid,data]);

  if(!userDetails){
    return <div>Loading...</div>
  }

  return (
    
    <div>

          <div key={userDetails.id}>
            <img src={userDetails.image} style={{height:200,width:250}}></img>
            <p>{userDetails.name}</p>
            <p>{userDetails.job}</p>
            <p>{userDetails.text}</p>
          </div>
        
    </div>
  );
};

export default Details;
