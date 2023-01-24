import { Routes, Route } from "react-router-dom"
import Login from './components/User/Login/Login';
import './App.css';
import Register from "./components/User/Register/Register";
import Home from "./pages/User/Home/Home";
import Profile from "./pages/User/Profile/Profile";
import VerifyEmail from "./components/User/Verifyemail/VerifyEmail";
import LoadingBar from 'react-top-loading-bar'
import { useSelector } from 'react-redux'
import Settings from "./pages/User//Settings/Settings";
import Notification from "./pages/User/Notifications/Notification";
import CreatePost from "./components/User/CreatePost/CreatePost";
import MyProfile from "./pages/User/myprofile/MyProfile";
import Chat from "./pages/User/Chat/Chat";
import Search from "./pages/User/Search/Search";
import Message from "./pages/User/Chat/Message";
import AdminHome from "./pages/Admin/Home/AdminHome";
import ProtectedRoute from "./components/User/ProtectedRout/ProtectedRoute";
import AdminLogin from "./components/Admin/Login/AdminLogin";
import UsersList from "./pages/Admin/Users/UsersList";
import AdminSettings from "./pages/Admin/Settings/AdminSettings";
import PublicRoute from "./components/User/PublicRoute/PublicRoute";
import AdminProtectRoute from "./components/Admin/ProtectedRoute/AdminProtectRoute";
import AdminPublicRoute from "./components/Admin/PublicRoute/AdminPublicRoute";
import ForgotPassword from "./pages/User/ForgotPassword/ForgotPassword";
import ChangePassword from "./pages/User/ForgotPassword/ChangePassword";
import SavedPosts from "./pages/User/SavedPost/SavedPosts";
import ChatPage from "./pages/User/Chat/ChatPage";

function App() {
  // const [userLoggedIn, setUserLoggedIn] = useState(true)
  const { progress } = useSelector((state) => state.loader)
  return (
    <div>

      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
        loaderSpeed={1000}
      />
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} exact />
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="/profile/:userId" element={<ProtectedRoute><Profile /></ProtectedRoute>} exact />
        <Route path="/:id/Verify/:token" element={<VerifyEmail />} />
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
        <Route path="/notifications" element={<ProtectedRoute ><Notification /> </ProtectedRoute>} />
        <Route path="/create" element={<ProtectedRoute><CreatePost /></ProtectedRoute>} />
        <Route path="/myprofile" element={<ProtectedRoute><MyProfile /></ProtectedRoute>} />
        <Route path="/chats" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
        <Route path="/message" element={<ProtectedRoute><Message /></ProtectedRoute>} />
        <Route path="/search" element={<ProtectedRoute><Search /></ProtectedRoute>} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/:id/changePassword/:token" element={<ChangePassword />} />
        <Route path="/savedPosts" element={<SavedPosts />} />
        <Route path="/savedPosts" element={<SavedPosts />} />
        <Route path="/chatUi" element={<ProtectedRoute><ChatPage /></ProtectedRoute>} />
      </Routes>
      {/* admin routes temporary */}
      <Routes>
        <Route path="/admin/" element={<AdminProtectRoute><AdminHome /></AdminProtectRoute>} />
        <Route path="/admin/login" element={<AdminPublicRoute><AdminLogin /></AdminPublicRoute>} />
        <Route path="/admin/users" element={<AdminProtectRoute><UsersList /></AdminProtectRoute>} />
        <Route path="/admin/settings" element={<AdminProtectRoute><AdminSettings /></AdminProtectRoute>} />
      </Routes>
    </div>);
}

export default App;
