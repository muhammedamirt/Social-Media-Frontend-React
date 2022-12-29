import {  Routes, Route } from "react-router-dom"
import Login from './components/Login/Login';
import './App.css';
import Register from "./components/Register/Register";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import VerifyEmail from "./components/Verifyemail/VerifyEmail";


function App() {
  return (<div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="/profile" element={<Profile />} exact/>
        <Route path="/:id/Verify/:token" element={<VerifyEmail />} />
      </Routes>
  </div>);
}

export default App;
