import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function ProtectedRoute() {
    const isAdmin =()=>{
        const {access_token,userType} = localStorage
        if(access_token && userType === 'admin')
            return true
        else
            return false
    }
  return (
    isAdmin() ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default ProtectedRoute