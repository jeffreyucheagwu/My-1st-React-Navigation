import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import HomePage from "./home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/LoginScreen/Login";
import AboutUs from "./screens/LoginScreen/AboutUs";
import OurService from "./screens/LoginScreen/OurService";
import { ContactPage } from "@mui/icons-material";
import Contact from "./screens/LoginScreen/Contact";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/OurService" element={<OurService />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
