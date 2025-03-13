import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { assets, projectsData } from "../assets/data/assets";
import { motion } from "framer-motion";
React

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToDisplay = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToDisplay();

    window.addEventListener("resize", updateCardsToDisplay);
    return () => window.removeEventListener("resize", updateCardsToDisplay);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };
  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };
  return (
    <div
    className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
    id="Projects"
  >
    <motion.h3
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-2xl sm:text-4xl font-bold mb-2 text-center"
    >
      Projects {" "}
      <span className="underline underline-offset-4 decoration-1 font-light">
        Completed
      </span>
    </motion.h3>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="text-gray-500 max-w-80 text-center mx-auto mb-8"
    >
      Showcasing our journey of excellence through successfully delivered
      projects.
    </motion.p>

    {/* Slider Buttons */}
    <div className="flex justify-end items-center mb-8">
      <motion.button
        onClick={prevProject}
        className="p-3 bg-gray-200 rounded mr-2"
        aria-label="Previous Project"
        whileTap={{ scale: 0.9 }}
      >
        <img src={assets.left_arrow} alt="Previous" />
      </motion.button>
      <motion.button
        onClick={nextProject}
        className="p-3 bg-gray-200 rounded"
        aria-label="Next Project"
        whileTap={{ scale: 0.9 }}
      >
        <img src={assets.right_arrow} alt="Next" />
      </motion.button>
    </div>

    {/* Project Slider */}
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-4"
        initial={{ x: "100%" }}
        animate={{ x: `-${(currentIndex * 100) / cardsToShow}%` }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="relative flex-shrink-0 w-full sm:w-1/4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0, delay: index * 0.1 }}
          >
            <img
              src={project.image}
              alt=''
              className="w-full h-auto mb-14 object-cover"
            />
            <div className="absolute left-0 right-0 bottom-5 flex justify-center">
              <div className="inline-block bg-white w-3/4 py-2 shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h3>
                <p>
                  {project.price} <span className="px-2">|</span> {project.location}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
  );
};

export default Projects;
