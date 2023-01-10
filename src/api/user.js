import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" })

export const loginApi = async (email, password) => {
    let { data } = await API.post('/login', { email, password }, { withCredentials: true })
    return data;
}

export const signupApi = async (signupData) => {
    let { data } = await API.post('/register', signupData, { withCredentials: true })
    return data;
}

export const verifyEmailFunc = async (id, token) => {
    let { data } = await API.get(`/verifySignup/${id}/${token}`, { withCredentials: true })
    return data;
}

export const userDataToProfile = async (userId) => {
    let { data } = await API.get(`/getUserData/${userId}`, {
        withCredentials: true,
        headers: {
            Authorization: "Bearer " + localStorage.getItem("userToken"),
        },
    })
    return data;
}

export const fetchUserPosts = async (userId) => {
    let { data } = await API.get(`/getUserPosts/${userId}`)
    return data;
}

export const createImagePost = async (imageFileData, userId) => {
    let { data } = await API.post(`/createImagePost/${userId}`, imageFileData)
    return data;
}

export const fetchFollowersPosts = async (userId) => {
    let { data } = await API.get(`/fetchFollowersPosts/${userId}`,{
        withCredentials: true,
        headers: {
            Authorization: "Bearer " + localStorage.getItem("userToken"),
        },
    })
    return data;
}

export const fetchOneUserProfile = async (userId) => {
    let { data } = await API.get(`/fetchSpecificUser/${userId}`,{
        withCredentials: true,
        headers: {
            Authorization: "Bearer " + localStorage.getItem("userToken"),
        },
    })
    return data;
}
