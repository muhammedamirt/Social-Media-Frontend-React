import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL_ADMIN })

export const adminLoginApi = async (email, password) => {
    console.log('hello');
    let { data } = await API.post('/adminLogin', { email, password }, { withCredentials: true })
    return data;
}

export const allUsersApi = async () => {
    let { data } = await API.get('/allUsers', { withCredentials: true })
    return data;
}

// export const adminLogoutAPI= async ()=>{
//     let { data } = await API.get('/allUsers', { withCredentials: true })
//     return data
// }

export const getIsBlockedApi = async (userId) => {
    let { data } = await API.put(`/getIsBlocked/${userId}`, { withCredentials: true })
    return data
}