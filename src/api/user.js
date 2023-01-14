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
    let { data } = await API.get(`/fetchFollowersPosts/${userId}`, {
        withCredentials: true,
        headers: {
            Authorization: "Bearer " + localStorage.getItem("userToken"),
        },
    })
    return data;
}

export const fetchOneUserProfile = async (userId) => {
    let { data } = await API.get(`/fetchSpecificUser/${userId}`, {
        withCredentials: true,
        headers: {
            Authorization: "Bearer " + localStorage.getItem("userToken"),
        },
    })
    return data;
}

export const handleLikePost = async (postId, userId) => {
    let { data } = await API.get(`/LikePost/${postId}/${userId}`, {
        withCredentials: true,
        headers: {
            Authorization: "Bearer " + localStorage.getItem("userToken"),
        },
    })
    return data;
}

export const followUser = async (userId, myId) => {
    let { data } = await API.get(`/followUser/${userId}/${myId}`, {
        withCredentials: true,
        headers: {
            Authorization: "Bearer " + localStorage.getItem("userToken"),
        },
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

export const commentPost = async (formData) => {
    let { data } = await API.post("/commentToPost", formData, {
        withCredentials: true
    })
    console.log(data, 'response vannu');
    return data;
};

export const fetchPostComments = async (postId) => {
    let { data } = await API.get(`/getComments/${postId}`, {
        withCredentials: true,
        headers: {
            Authorization: "Bearer " + localStorage.getItem("userToken"),
        },
    })
    return data;
}

export const fetchFollowers = async (userId) => {
    let { data } = await API.get(`/getUserFollowers/${userId}`, {
        withCredentials: true,
        headers: {
            Authorization: "Bearer " + localStorage.getItem("userToken"),
        },
    })
    return data;
}
export const fetchFollowing = async (userId) => {
    let { data } = await API.get(`/getUserFollowing/${userId}`, {
        withCredentials: true,
        headers: {
            Authorization: "Bearer " + localStorage.getItem("userToken"),
        },
    })
    console.log("response", data);
    return data;
}

export const uploadProfile = async (formData) => {
    const cloudName = process.env.REACT_APP_COUDINARY_NAME
    let data =await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData)
    console.log(data, 'response vannu');
    return data?.data?.secure_url;
};