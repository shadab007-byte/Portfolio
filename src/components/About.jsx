import React from "react";

export const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen md:min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
    >
      <div className="max-w-screen-lg p-4 h-full w-full mx-auto flex flex-col justify-center items-center text-white md:items-start">
        <div className="py-6 sm:text-center">
          <h2 className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500">
            About
          </h2>
        </div>

        <p className="text-xl sm:text-2xl mt-4 leading-relaxed">
          I’m <span className="font-semibold text-rose-400">Mohd Shadab</span>, a passionate Data Scientist, AI Engineer, and aspiring academic specializing in Industrial Mathematics and Scientific Computing. Currently pursuing my M.Tech at IIT Madras, I have a deep-rooted interest in leveraging mathematics and computational techniques to solve real-world challenges across industries.
          <br /><br />
          My research journey is fueled by a commitment to bridge theory and practice—whether it’s developing novel machine learning models for credit risk assessment, designing innovative kernels for SVMs, or applying Fourier techniques in image processing. I thrive at the intersection of mathematics and technology, where abstract concepts transform into impactful solutions.
          <br /><br />
          As a CSIR NET JRF (AIR 66) and GATE (AIR 320) qualifier, I bring a strong foundation in mathematical theory, coupled with hands-on experience in Python, ML frameworks, and advanced data visualization. 
          Let’s explore the possibilities of AI-driven innovation and mathematical insights together.
        </p>
      </div>
    </div>
  );
};
