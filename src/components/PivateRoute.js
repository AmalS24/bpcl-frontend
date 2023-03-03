import React from 'react'
import { Route, Outlet, Navigate } from 'react-router-dom'

const PivateRoute = () => {
  return (
    localStorage.getItem('access_token') ? <Outlet/> : <Navigate to='/'/>
  )
}

export default PivateRoute