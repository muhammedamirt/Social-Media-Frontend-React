import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" })

export const loginApi = async (email, password) => {
    let { data } = await API.post('/login', { email, password },{withCredentials:true})
    return data;
}

export const signupApi =async (signupData)=>{
    let { data } = await API.post('/register', signupData,{withCredentials:true})
    console.log(data);
 return data;
}

export const verifyEmailFunc =async (id,token)=>{
    console.log(id,token);
    let { data } = await API.get(`/verifySignup/${id}/${token}`,{withCredentials:true})
    console.log(data);
 return data;
}