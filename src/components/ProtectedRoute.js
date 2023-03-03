import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function ProtectedRoute() {
    const isAdmin =()=>{
        const {access_token,userId} = localStorage
        if(access_token && userId)
            return true
        else
            return false
    }
  return (
    isAdmin() ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default ProtectedRoute