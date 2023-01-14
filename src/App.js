import { Routes, Route } from "react-router-dom"
import Login from './components/User/Login/Login';
import './App.css';
import Register from "./components/User/Register/Register";
import Home from "./pages/User/Home/Home";
import Profile from "./pages/User/Profile/Profile";
import VerifyEmail from "./components/User/Verifyemail/VerifyEmail";
import LoadingBar from 'react-top-loading-bar'
import { useDispatch, useSelector } from 'react-redux'
import Settings from "./pages/User//Settings/Settings";
import Notification from "./pages/User/Notifications/Notification";
import CreatePost from "./components/User/CreatePost/CreatePost";
import MyProfile from "./pages/User/myprofile/MyProfile";
import { useEffect, useState } from "react";
import { userAddDetails } from './redux/authSliceUser'
import Chat from "./pages/User/Chat/Chat";
import Search from "./pages/User/Search/Search";
import Message from "./pages/User/Chat/Message";

import AdminHome from "./pages/Admin/Home/AdminHome";
import ProtectedRoute from "./components/User/ProtectedRout/ProtectedRoute";
import AdminLogin from "./components/Admin/Login/AdminLogin";
import UsersList from "./pages/Admin/Users/UsersList";

function App() {
  // const [userLoggedIn, setUserLoggedIn] = useState(true)
  const dispatch = useDispatch()

  // const userId = localStorage.getItem('id')



  useEffect(() => {
    dispatch(userAddDetails({ token: localStorage.getItem('userToken') }));
    // if (userId) {
    //   setUserLoggedIn(false)
    // } else {
    //   setUserLoggedIn(true)
    // }
    // console.log(userLoggedIn, "qqqqqqqqqqqqqqqqqqqqqqqqqqq");
  }, []);

  // const user = useSelector((state) => state?.user?.userToken);


  const { progress } = useSelector((state) => state.loader)
  return (
    <div>

      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
        loaderSpeed={1000}
      />



      {/* {!userLoggedIn ? */}
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="/profile/:userId" element={<Profile />} exact />
        <Route path="/:id/Verify/:token" element={<VerifyEmail />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/myprofile" element={<ProtectedRoute><MyProfile /></ProtectedRoute>} />
        <Route path="/chats" element={<Chat />} />
        <Route path="/message" element={<Message />} />
        <Route path="/search" element={<Search />} />
      </Routes>
        {/* // : <Routes>
        //   <Route path="/login" element={<Login />} exact />
        // </Routes>} */}
      <Routes>
        <Route path="/admin/" element={<AdminHome />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/users" element={<UsersList />} />
      </Routes>
    </div>);
}

export default App;
