import React from "react";
import { assets } from "../assets/data/assets";
import { motion } from "framer-motion";
React;
const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-2xl font-semibold"
      >
        <b className="underline underline-offset-4 decoration-1 font-light">
          Our Brand
        </b>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-gray-500 max-w-80 text-center mb-8"
      >
        Passionate About Properties, Dedicated to your vision
      </motion.p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <motion.img
          src={assets.brand_img}
          alt="Brand"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full sm:w-1/2 max-w-lg"
          style={{ borderRadius: "50px 2px 50px 2px" }}
        />
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex flex-col items-center md:items-start mt-10 text-gray-600"
        >
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            {[
              { number: "1+", text: "Decades of Excellence" },
              { number: "5+", text: "Completed Ventures" },
              { number: "12+", text: "Space Delivered (in Mn. Sq. Ft.)" },
              { number: "2+", text: "Current Endeavors" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <p className="text-4xl font-medium text-gray-800">
                  {item.number}
                </p>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="my-10 max-w-lg"
          >
            At <b className="text-blue-500 hover:underline">LD</b>, we pride
            ourselves on a legacy of excellence, crafting spaces that inspire
            and endure. With years of expertise, a portfolio of accomplished
            projects, and millions of square feet delivered, we redefine
            industry standards with every endeavor. Our dedication to quality
            and innovation ensures that every vision becomes a reality.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-600 text-white px-6 py-2 rounded cursor-pointer"
          >
            Learn more
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
