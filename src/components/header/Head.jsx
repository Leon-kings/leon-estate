import React from "react";
import "../../App.css";
import { motion } from "framer-motion";
import SearchBox from "../search/SearchBox";
React;
export default function HomeCover() {
  return (
    <>
      <div className="cover min-h-screen pt-10 mb-4 bg-cover bg-center flex items-center w-full overflow-hidden">
        <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20"
          >
            Find a Home That Fits You
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="space-x-6 mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-500 border border-transparent px-8 py-3 rounded hover:border-white hover:bg-transparent transition-all duration-300"
            >
              Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-blue-500 border border-transparent px-8 py-3 rounded hover:border-white hover:bg-transparent transition-all duration-300"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </div>
      <div className="w-full items-center justify-center justify-items-center lg:w-[500px]">
        <SearchBox />
      </div>
    </>
  );
}
