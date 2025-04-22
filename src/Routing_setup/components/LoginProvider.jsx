import React, { createContext, useContext, useState } from 'react'

const authContext = createContext()
const LoginProvider = ({children}) => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const handleLogin = ()=>{
      setIsLoggedIn(!isLoggedIn)
    }
  return (
    <authContext.Provider value={{isLoggedIn,handleLogin}}>
{children}
    </authContext.Provider>
  )
}

export default LoginProvider;;

export const useAuthContext = ()=>useContext(authContext)