import React from "react";
import { assets } from "../assets/assets";
React;  
const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h2 className="text-2xl font-semibold">
        <b className="underline underline-offset-4 decoration-1 font-light ">
          Our Brand
        </b>
      </h2>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to your vision
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg"
          style={{ borderRadius: "50px 2px 50px 2px" }}
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">1+</p>
              <p>Decades of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">5+</p>
              <p>Completed Ventures</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Space Delivered (in Mn. Sq. Ft.)</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">2+</p>
              <p>Current Endeavors</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            At{" "}
            <b href="/" className="text-blue-500 hover:underline">
              LD
            </b>
            , we pride ourselves on a legacy of excellence, crafting spaces that
            inspire and endure. With years of expertise, a portfolio of
            accomplished projects, and millions of square feet delivered, we
            redefine industry standards with every endeavor. Our dedication to
            quality and innovation ensures that every vision becomes a reality.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded cursor-pointer">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
