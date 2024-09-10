import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import HomePage from "./home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./screens/LoginScreen/AboutUs";
import Contact from "./screens/LoginScreen/Contact";
import SignUp from "./screens/SignupScreen/SignUp";
import DashBoard from "./screens/Dashboard/DashBoard";
import Comments from "./screens/Comments/Comments";
import Users from "./screens/Users/Users";
import Results from "./screens/Results/Results";
import UpdateUserProfile from "./screens/LoginScreen/UpdateUserProfile";
import OurService from "./screens/LoginScreen/OurService";
import StudentReport from "./screens/LoginScreen/StudentReport";
import { report } from "process";
import Login from "./screens/LoginScreen/Login";
import FetchDeleteData from "./screens/Users/FetchDeleteData";
import UpdateMyPersonalProfile from "./screens/Users/UpdateMyPersonalProfile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/del" element={<FetchDeleteData />} />
          <Route path="/UpdateUserProfile" element={<UpdateUserProfile />} />
          <Route
            path="/PersonalProfile"
            element={<UpdateMyPersonalProfile />}
          />
          {/* <Route
            path="/StudentReport"
            element={
              <StudentReport
                subjects={undefined}
                Remark={undefined}
                TotalGrade={undefined}
                Position={undefined}
                TotalAverage={undefined}
                TotalScore={undefined}
                term={undefined}
                year={undefined}
                school={undefined}
                user={undefined}
                report={undefined}
              />
            }
          /> */}
          <Route
            path="/update/:firstName/:lastName/:_id"
            element={<UpdateUserProfile />}
          />
          {/* <Route
            path="/StudentReport"
            element={
              <StudentReport
                subjects={["Math", "Science"]}
                Remark="Excellent"
                TotalGrade="A"
                Position={1}
                TotalAverage={90}
                TotalScore={450}
                term="1st Term"
                year="2023"
                school="XYZ High School"
                user={{ name: "John Doe", class: "10A" }}
                report={report}
              />
            }
          /> */}

          <Route path="/About" element={<AboutUs />} />
          <Route path="/OurService" element={<OurService />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/DashBoard" element={<DashBoard />} />
          <Route path="/Comments" element={<Comments />} />
          <Route path="/Users" element={<Users />} />
          {/* <Route path="/Results" element={<Results />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
