import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
React
const ScrollToTopIcon = () => {
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowIcon(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const header = document.getElementById("Header");
    if (header) {
      header.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {showIcon && (
        <motion.div
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-blue-500 p-4 rounded-full shadow-lg cursor-pointer hover:bg-blue-700 transition duration-300"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </motion.div>
      )}
    </>
  );
};

export default ScrollToTopIcon;