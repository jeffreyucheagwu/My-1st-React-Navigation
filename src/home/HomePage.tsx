import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AboutUs from "../components/aboutUs/AboutUs";
import Hero from "../components/Hero/Hero";
import SeoFriendly from "../components/SeoFriendlySection/SeoFriendly";
import RoughSheet from "../components/RoughSheet/RoughSheet";
import PortFolio from "../components/PortFolioSection/PortFolio";
import Header from "../components/Header/Header";
import { Carousel } from "react-bootstrap";
import SmallParallel from "../components/SmallParallelSection/SmallParallel";
import { Pagination } from "@mui/material";
import Table from "../components/Table/Table";
import LimitlessOption from "../components/LimitlessOptionSection/LimitlessOption";
import LatestProject from "../components/LatestProjectSection/LatestProject";
import Image from "../components/ImageSection/Image";
import Testimonial from "../components/TestimonialSection/Testimonial";
import MainClient from "../components/MainClientSection/MainClient";
import WordPress from "../components/WordPressSection/WordPress";
import Footer from "../components/FooterSection/Footer";
import ResponsiveAppBar from "../components/Navbar2/NavbarMui";
import SignUp from "../screens/SignupScreen/SignUp";
import UpdateUserProfile from "../screens/LoginScreen/UpdateUserProfile";
import StudentReport from "../screens/LoginScreen/StudentReport";
import Login from "../screens/LoginScreen/Login";

const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <ResponsiveAppBar />
      {/* <AboutUs /> */}
      {/* <Header /> */}
      {/* <Carousel /> */}
      {/* <Table /> */}
      {/* <Pagination count={10} color="primary" /> */}
      {/* <Hero /> */}
      {/* <SeoFriendly /> */}
      {/* <RoughSheet /> */}
      {/* <PortFolio /> */}
      {/* <SmallParallel /> */}
      {/* <LimitlessOption /> */}
      {/* <LatestProject /> */}
      {/* <Image /> */}
      {/* <Testimonial /> */}
      {/* <MainClient /> */}
      {/* <WordPress /> */}
      {/* <Footer /> */}
      <SignUp />
      {/* <UpdateUserProfile /> */}
      {/* <Login /> */}
    </div>
  );
};

export default HomePage;
