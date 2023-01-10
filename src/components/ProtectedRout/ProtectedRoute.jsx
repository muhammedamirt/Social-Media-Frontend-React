import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { userAddDetails  } from '../../redux/authSliceUser'

const ProtectedRoute = (props) => {
    const dispatch = useDispatch()

    const getUser = () => {
        dispatch(userAddDetails({ token: localStorage.getItem('userToken') }))
    }
    useEffect(() => {
        getUser()
    })
    if (localStorage.getItem('userToken')) {
        return props.children
    } else {
        return <Navigate to='/login' />
    }
}


export default ProtectedRoute