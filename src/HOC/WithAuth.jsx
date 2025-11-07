import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const WithAuth = (WrappedComponent) => {
  return (...props )=>{
    const navigate = useNavigate();
    const isAuth = false;

    useEffect(()=>{
        if(!isAuth){
            navigate("/")
        }
    },[isAuth,navigate]);

    return isAuth?<WrappedComponent {...props}/>:<div>null</div>
  }
}

export default WithAuth