import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <Link to="analytics">Analytics</Link>
        <Link to="reports">Reports</Link>
        <Outlet/>
    </div>
  )
}

export default Dashboard