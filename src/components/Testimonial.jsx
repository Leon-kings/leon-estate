import React from "react";
import { assets, testimonialsData } from "../assets/data/assets";
import { motion } from "framer-motion";
React;
const Testimonial = () => {
  return (
<div
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Testimonials"
    >
      <h3 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Testimonials
        </span>
      </h3>
      <p className="text-gray-500 max-w-80 text-center mx-auto mb-8">
        Hear from our clients about the impact of our services.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 justify-center gap-2">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="w-full border shadow-lg rounded px-8 py-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h3 className="text-xl text-gray-700 font-medium">
              {testimonial.name}
            </h3>
            <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <img key={i} src={assets.star_icon} alt="star" />
              ))}
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
