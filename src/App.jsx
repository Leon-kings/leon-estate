import React from "react";
import Navbar from "./components/nav/Navbar";
import ScrollToTopIcon from "./components/scroll/ScrollToTopIcon";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Testimonial from "./pages/Testimonial";
import Head from "./components/header/Head";
import About from "./pages/About";
import Footer from "./components/footer/Footer";
React;
const Apps = () => {
  return (
    <>
    <Navbar/>
    <Head/>
    <About/>
    <ScrollToTopIcon/>
    <Projects/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </>
  );
};

export default Apps;
