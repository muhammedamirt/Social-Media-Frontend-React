import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { userAddDetails } from '../../../redux/authSliceUser'
import { addUserData } from '../../../redux/userDataSlice'
import { userDataToProfile } from '../../../api/user'

const ProtectedRoute = (props) => {
    const dispatch = useDispatch()
    const userId = localStorage.getItem('id')
    if(!userId) return <Navigate to='/login' />
        const getData = async () => {
            const response = await userDataToProfile(userId);
            dispatch(addUserData(response));
        };
    const getUser = () => {
        dispatch(userAddDetails({ token: localStorage.getItem('userToken') }))
    }
    getData()
    getUser()

    // useEffect(() => {
    //     getData()
    //     getUser()
    // },[])
    if (localStorage.getItem('userToken')) {
        return props.children
    } else {
        return <Navigate to='/login' />
    }
}


export default ProtectedRoute