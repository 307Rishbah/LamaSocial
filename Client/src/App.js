import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Home from "./Pages/home/Home";
import Profile from "./Pages/profile/Profile";
// import Messenger from "./Pages/messenger/Messenger";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export const App = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={userInfo ? <Home /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
