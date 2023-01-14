import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React, { useEffect } from "react";
import Login from './components/User/Login/Login';
import './App.css';
import Register from "./components/User/Register/Register";
import Home from "./pages/User/Home/Home";
import Profile from "./pages/User/Profile/Profile";
import VerifyEmail from "./components/User/Verifyemail/VerifyEmail";
// import LoadingBar from 'react-top-loading-bar'
import { useDispatch, useSelector } from 'react-redux'
import Settings from "./pages/User//Settings/Settings";
import Notification from "./pages/User/Notifications/Notification";
import CreatePost from "./components/User/CreatePost/CreatePost";
import MyProfile from "./pages/User/myprofile/MyProfile";
import { userAddDetails } from './redux/authSliceUser'
import Chat from "./pages/User//Chat/Chat";
import Search from "./pages/User/Search/Search";
import Message from "./pages/User//Chat/Message";


const User = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(userAddDetails({ token: localStorage.getItem('userToken') }));
    }, []);

    // const user = useSelector((state) => state?.user?.userToken);


    // const { progress } = useSelector((state) => state.loader)
    return (
        <div>
            {/* <LoadingBar
                color='#f11946'
                progress={progress}
                height={3}
                loaderSpeed={1000}
            /> */}
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/login" element={<Login />} exact />
                <Route path="/register" element={<Register />} exact />
                <Route path="/profile/:userId" element={<Profile />} exact />
                <Route path="/:id/Verify/:token" element={<VerifyEmail />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/notifications" element={<Notification />} />
                <Route path="/create" element={<CreatePost />} />
                <Route path="/myprofile" element={<MyProfile />} />
                <Route path="/chats" element={<Chat />} />
                <Route path="/message" element={<Message />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </div>
    )
}

export default User