import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL })

export const loginApi = async (email, password) => {
    let { data } = await API.post('/login', { email, password }, {
        withCredentials: true,
    })
    return data;
}

export const signupApi = async (signupData) => {
    let { data } = await API.post('/register', signupData, {
        withCredentials: true,
    })
    return data;
}

export const verifyEmailFunc = async (id, token) => {
    let { data } = await API.get(`/verifySignup/${id}/${token}`, {
        withCredentials: true, 
    })
    return data;
}

export const userDataToProfile = async (userId) => {
    let { data } = await API.get(`/getUserData/${userId}`, {
        withCredentials: true,
    })
    return data;
}

export const fetchUserPosts = async (userId) => {
    let { data } = await API.get(`/getUserPosts/${userId}`)
    return data;
}

export const fetchFollowersPosts = async (userId) => {
    let { data } = await API.get(`/fetchFollowersPosts/${userId}`, {
        withCredentials: true,
    })
    return data;
}

export const fetchOneUserProfile = async (userId) => {
    let { data } = await API.get(`/fetchSpecificUser/${userId}`, {
        withCredentials: true,
    })
    return data;
}

export const followUser = async (userId, myId) => {
    let { data } = await API.get(`/followUser/${userId}/${myId}`, {
        withCredentials: true,
    })
    return data;
}

export const editProfile = async (formData) => {
    let { data } = await API.post("/editProfile", formData, {
        withCredentials: true,
    })
    console.log("responsevannu,", data);
    return data;
};


export const fetchFollowers = async (userId) => {
    let { data } = await API.get(`/getUserFollowers/${userId}`, {
        withCredentials: true,
    })
    return data;
}
export const fetchFollowing = async (userId) => {
    let { data } = await API.get(`/getUserFollowing/${userId}`, {
        withCredentials: true,
    })
    return data;
}

export const uploadProfile = async (formData) => {
    const cloudName = process.env.REACT_APP_COUDINARY_NAME
    let data = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData)
    return data?.data?.secure_url;
};

export const userLogoutAPI = async (userId) => {
    let { data } = await API.put(`/logout/${userId}`, { withCredentials: true })
    return data
}

export const searchUserApi = async (searchData) => {
    const { data } = await API.post('/searchUser', { searchData }, { withCredentials: true })
    console.log(data, "searchData");
    return data
}

export const forgotPasswordAPI = async (email) => {
    const { data } = await API.put('/forgotPassword', { email }, { withCredentials: true })
    return data;
}

export const changePasswordAPI = async (sendData) => {
    const { data } = await API.put('/changePassword', sendData, { withCredentials: true })
    return data;
}

export const fetchSavedPostsAPI = async (userId) => {
    let { data } = await API.get(`/fetchSavedPosts/${userId}`, {
        withCredentials: true,
    })
    return data;
}

export const getQrUrlAPI = async (userId) => {
    let { data } = await API.get(`/qrCode/${userId}`)
    return data;
}

export const googleLoginAPI = async (userData) => {
    let { data } = await API.post('/googleLogin', userData)
    return data;
}

export const googleSignUpAPI = async (userData) => {
    console.log(userData);
    let { data } = await API.post('/googleSignup', userData)
    return data;
}

export const uploadVideoFileAPI = async (contentData) => {
    console.log(contentData);
    let { data } = await API.post('/uploadVideoFile', contentData)
    return data;
}

export const getAllVideoAPI = async () => {
    let { data } = await API.get('/getAllVideos')
    return data;
}