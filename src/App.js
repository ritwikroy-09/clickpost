import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import MainFeed from "./components/MainFeed.js";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} /> {/* Main page */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/MainFeed" element={<MainFeed />} /> {/* MainFeed page */}
     
    </Routes>
  );
};

export default App;
