import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from './LoginProvider'

const Navbar = () => {
  const {isLoggedIn,handleLogin} = useAuthContext()
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
       {isLoggedIn? <button onClick={handleLogin}>Logout</button>:<button onClick={handleLogin}>Login</button>}
    </div>
  )
}

export default Navbar