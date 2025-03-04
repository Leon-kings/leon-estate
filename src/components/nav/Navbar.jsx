import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { assets } from "../../assets/data/assets";
import { motion, AnimatePresence } from "framer-motion";
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
        <motion.img
          src={assets.logo}
          alt="Logo"
          className="cursor-pointer w-20 h-20 rounded-xl shadow-md"
          onClick={() => (window.location.href = "/")}
          whileHover={{ scale: 1.1 }}
        />
        <ul className="hidden md:flex gap-7 text-white">
          {["Home", "About", "Projects", "Testimonials"].map((item, index) => (
            <motion.button
              key={index}
              className="cursor-pointer bg-black p-4 rounded-2xl hover:text-gray-400"
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.button>
          ))}
        </ul>
        <motion.button
          onClick={() =>
            document
              .getElementById("Contact")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="hidden md:block bg-white px-8 py-2 rounded-full"
          whileHover={{ scale: 1.1 }}
        >
          Contact Us
        </motion.button>
        <motion.img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          alt="Menu"
          className="md:hidden w-6 cursor-pointer"
          whileTap={{ scale: 0.9 }}
        />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed right-0 top-0 bottom-0 w-3/4 bg-white shadow-lg"
          >
            <div className="flex justify-end p-6">
              <motion.img
                onClick={() => setShowMobileMenu(false)}
                src={assets.cross_icon}
                alt="Close Menu"
                className="w-6 cursor-pointer"
                whileTap={{ scale: 0.9 }}
              />
            </div>
            <ul className="flex flex-col items-center gap-4 mt-5 px-5 text-lg font-medium">
              {["Home", "About", "Projects", "Testimonials"].map(
                (item, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setShowMobileMenu(false)}
                    className="px-4 py-2 rounded-full inline-block"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item}
                  </motion.button>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
