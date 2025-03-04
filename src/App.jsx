import React from "react";
import { assets } from "./assets/data/assets";
import Navbar from "./components/nav/Navbar";
import ScrollToTopIcon from "./components/ScrollToTopIcon";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import Head from "./components/header/Head";
import About from "./Components/About";
React;
const Footer = () => {
  return (
    <>
    <Navbar/>
    <Head/>
    <About/>
    <ScrollToTopIcon/>
    <Projects/>
    <Testimonial/>
    <Contact/>
    <div
      className="pt-30 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="flex container mx-auto flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" className="w-20 h-20 rounded-xl" />
          <p className="text-gray-400 mt-4">
            LD delivers top-quality real estate solutions, focused on your needs
            and satisfaction, helping you find your perfect property
            effortlessly.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h4 className="text-white text-lg font-bold mb-4">LD</h4>
          <ul className="flex flex-col gap-2 text-gray-400">
            <button href="#Header" className="hover:text-white">
              Home
            </button>
            <button href="#About" className="hover:text-white">
              About
            </button>
            <button href="#Projects" className="hover:text-white">
              Projects
            </button>
            <button href="#Testimonials" className="hover:text-white">
              Testimonial
            </button>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-white text-lg font-bold mb-4">Subscribe Us.</h4>
          <p className="text-gray-400 mb-4 max-w-80">
            Subscribe to our newsletter for the latest updates, exclusive
            offers, and insights delivered straight to your inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-gray-400 border-gray-700 focus:outline-none md:w-auto"
            />
            <button className="py-2 px-4 rounded bg-blue-500 text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        &copy; {new Date().getFullYear()} LD. All rights reserved.
      </div>
    </div>
    </>
  );
};

export default Footer;
