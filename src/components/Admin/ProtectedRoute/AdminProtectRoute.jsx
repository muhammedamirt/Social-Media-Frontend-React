import React from 'react'
import { Navigate } from 'react-router-dom'

const AdminProtectRoute = (props) => {
    const adminId = localStorage.getItem('adminId')
    if (!adminId) return <Navigate to='login' />

    if (localStorage.getItem('adminToken')) {
        return props.children
    } else {
        return <Navigate to='login' />
    }
}
export default AdminProtectRoute