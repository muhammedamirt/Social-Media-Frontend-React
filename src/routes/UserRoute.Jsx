// import { Routes, Route } from "react-router-dom"
// import Login from './components/User/Login/Login';
// import './App.css';
// import Register from "./components/User/Register/Register";
// import  Home from "./pages/User/Home/Home";
// import Profile from "./pages/User/Profile/Profile";
// import VerifyEmail from "./components/User/Verifyemail/VerifyEmail";
// import Settings from "./pages/User//Settings/Settings";
// import Notification from "./pages/User/Notifications/Notification";
// import CreatePost from "./components/User/CreatePost/CreatePost";
// import MyProfile from "./pages/User/myprofile/MyProfile";
// import Search from "./pages/User/Search/Search";
// import ProtectedRoute from "./components/User/ProtectedRout/ProtectedRoute";
// import ForgotPassword from "./pages/User/ForgotPassword/ForgotPassword";
// import ChangePassword from "./pages/User/ForgotPassword/ChangePassword";
// import SavedPosts from "./pages/User/SavedPost/SavedPosts";
// import ChatPage from "./pages/User/Chat/ChatPage";
// import PostOneView from "./pages/User/PostOneView/PostOneView";
// import ProfileParamsCheck from "./pages/User/Profile/profileParamsCheck";
// import Video from "./pages/User/Videos/Video";
// import ErrorPage404 from "./components/User/404/ErrorPage404";
// import PublicRoute from "./components/User/PublicRoute/PublicRoute";


// export const UserRoute = () => {
//     // const { progress } = useSelector((state) => state.loader)
//     return (
//         <div>
//             {/* <LoadingBar
//                 color='#f11946'
//                 progress={progress}
//                 height={3}
//                 loaderSpeed={1000}
//             /> */}
//             <Routes>
//                 <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} exact />
//                 <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} exact />
//                 <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} exact />
//                 <Route path="/profile/:userId" element={<ProtectedRoute><ProfileParamsCheck><Profile /></ProfileParamsCheck></ProtectedRoute>} exact />
//                 <Route path="/:id/Verify/:token" element={<ProtectedRoute><VerifyEmail /></ProtectedRoute>} />
//                 <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
//                 <Route path="/notifications" element={<ProtectedRoute ><Notification /> </ProtectedRoute>} exact />
//                 <Route path="/create" element={<ProtectedRoute><CreatePost /></ProtectedRoute>} exact />
//                 <Route path="/myprofile" element={<ProtectedRoute><MyProfile /></ProtectedRoute>} exact />
//                 <Route path="/chats" element={<ProtectedRoute><ChatPage /></ProtectedRoute>} exact />
//                 <Route path="/search" element={<ProtectedRoute><Search /></ProtectedRoute>} exact />
//                 <Route path="/forgotPassword" element={<PublicRoute><ForgotPassword /></PublicRoute>} exact />
//                 <Route path="/:id/changePassword/:token" element={<PublicRoute><ChangePassword /></PublicRoute>} exact />
//                 <Route path="/savedPosts" element={<ProtectedRoute><SavedPosts /></ProtectedRoute>} exact />
//                 <Route path="/singlePost" element={<ProtectedRoute><PostOneView /></ProtectedRoute>} exact />
//                 <Route path="/shortVideos" element={<ProtectedRoute><Video /></ProtectedRoute>} exact />
//                 <Route path="*" element={<ErrorPage404 />} exact />
//             </Routes>
//         </div>
//     )
// }

