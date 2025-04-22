import React from 'react'
import Navbar from './Navbar'
import Routes_0 from './Routes_0'
import { BrowserRouter } from 'react-router-dom'

const Layout = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes_0/>
    </BrowserRouter>
  )
}

export default Layout