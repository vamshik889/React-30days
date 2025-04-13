import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar_1 from './Navbar_1'
import { Provider } from 'react-redux'
import store_3 from './store/store_3'

const RootLayout = () => {
  return (
    <Provider store={store_3}>
    <Navbar_1/>
    <main>
        <Outlet/>
    </main>
    </Provider>
  )
}

export default RootLayout