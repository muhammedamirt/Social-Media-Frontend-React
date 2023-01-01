import { Routes, Route } from "react-router-dom"
import Login from './components/Login/Login';
import './App.css';
import Register from "./components/Register/Register";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import VerifyEmail from "./components/Verifyemail/VerifyEmail";
import LoadingBar from 'react-top-loading-bar'
import {useSelector} from 'react-redux'
import Settings from "./pages/Settings/Settings";
import Notification from "./pages/Notifications/Notification";
import CreatePost from "./components/CreatePost/CreatePost";


function App() {
  const { progress } = useSelector((state) => state.loader)
  return (<div>

    <LoadingBar
      color='#f11946'
      progress={progress}
      height={3}
      loaderSpeed={1000}
    />
    <Routes>
      <Route path="/" element={<Home  />} exact />
      <Route path="/login" element={<Login />} exact />
      <Route path="/register" element={<Register />} exact />
      <Route path="/profile" element={<Profile />} exact />
      <Route path="/:id/Verify/:token" element={<VerifyEmail />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/notifications" element={<Notification />} />
      <Route path="/create" element={<CreatePost />} />
    </Routes>
  </div>);
}

export default App;
