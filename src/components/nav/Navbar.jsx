import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { assets } from "../../assets/data/assets";
React;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
  return (
    <div className="absolute top-0 left-0 w-full bg-black z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        {/* <Link></Link> */}
        <img
          src={assets.logo}
          alt=""
          className="cursor-pointer w-20 h-20 rounded-xl shadow-md"
          onClick={() => (window.location.href = "/")}
        />
        <ul className="hidden md:flex gap-7 text-white">
          <button className="cursor-pointer bg-black p-4 rounded-2xl hover:text-gray-400">
            {" "}
            Home
          </button>
          <button className="cursor-pointer bg-black p-4 rounded-2xl hover:text-gray-400">
            About
          </button>
          <button className="cursor-pointer bg-black p-4 rounded-2xl hover:text-gray-400">
            Projects
          </button>
          <button className="cursor-pointer bg-black p-4 rounded-2xl hover:text-gray-400">
            Testimonials
          </button>
        </ul>
        <button
          onClick={() => {
            document
              .getElementById("Contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
          className="hidden md:block bg-white px-8 py-2 rounded-full"
        >
          Contact Us
        </button>
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          alt=""
          className="md:hidden w-6"
        />
      </div>

      {/* Mobile menu  */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full" : "w-0 h-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            alt=""
            className="w-6 cursor-pointer"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <button
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </button>
          <button
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
          >
            {" "}
            About
          </button>
          <button
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
          >
            {" "}
            Projects
          </button>
          <button
            onClick={() => setShowMobileMenu(false)}
            className="px-4 py-2 rounded-full inline-block"
          >
            {" "}
            Testimonails
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
