import React from "react";
import HeroImage from "../assets/chando.jpeg";

export const Hero = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full pt-20 md:pt-40 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
    >
      <div className="max-w-screen-lg flex flex-col-reverse mx-auto h-full w-full text-white justify-center items-center md:flex-row">
        {/* Left Text Content */}
        <div className="flex flex-col justify-center h-full text-center md:text-left px-6 mt-8 md:mt-0">
          <h2 className="text-4xl sm:text-6xl font-bold">
            Data Analyst
          </h2>
          <p className="text-gray-300 max-w-xl py-4 mx-auto md:mx-0 leading-relaxed">
            I'm an M.Tech student at IIT Madras specializing in Industrial Mathematics and Scientific Computing.
            I am a CSIR NET JRF (AIR 66) and GATE (AIR 320) qualified researcher with a passion for applying machine learning,
            data science, and applied mathematics to solve real-world problems. I've built projects in credit risk analysis, 
            image processing, and concrete strength prediction using advanced ML techniques. Join me in exploring the exciting world of data and AI!
          </p>

          {/* Resume Button */}
          <div className="w-fit px-6 py-3 mt-5 rounded-md bg-gradient-to-r from-rose-500 to-black-50 cursor-pointer hover:scale-105 duration-300">
            <a href="/SHADAB_RESUME.pdf" download>
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center md:mt-0">
          <img
            src={HeroImage}
            className="rounded-2xl mx-auto w-2/3 md:w-full shadow-2xl"
            alt="Mohd Shadab Profile"
          />
        </div>
      </div>
    </div>
  );
};
