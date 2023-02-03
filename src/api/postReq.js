import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" })

export const createImagePost = async (imageFileData, userId) => {
    let { data } = await API.post(`/createImagePost/${userId}`, imageFileData)
    return data;
}

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

export const handleLikePost = async (postId, userId) => {
    let { data } = await API.get(`/LikePost/${postId}/${userId}`, {
        withCredentials: true,
        headers: {
            Authorization: "Bearer " + localStorage.getItem("userToken"),
        },
    })
    return data;
}

export const savePostAPI = async (userId, postId) => {
    const { data } = await API.put(`/savePost/${userId}`, { postId })
    return data;
}

export const onePostDataAPI = async (postId) => {
    const { data } = await API.get(`/onePost/${postId}`)
    return data;
}

export const reportPostAPI = async (reportData) => {
    const { data } = await API.post(`/report`,reportData)
    return data;
}