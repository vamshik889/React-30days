import React from 'react'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Dashboard from './Dashboard'
import Cart from "./CartPag"
import CartPag from './CartPag'
import RootLayout from './RootLayout'

const  router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route index element={<Dashboard/>}></Route>
    <Route path='cart' element={<CartPag/>}></Route>
  </Route>  
))

const Routes_fake = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Routes_fake