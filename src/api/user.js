import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" })

export const loginApi = async (email, password) => {
    let { data } = await API.post('/login', { email, password })
    return data;
}

export const signupApi =async (signupData)=>{
    let { data } = await API.post('/register', signupData)
    console.log(data);
 return data;
}