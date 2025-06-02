import React from "react";
import python from "../assets/python.png";
import django from "../assets/django.png";
import mysql from "../assets/mysql.png";
import github from "../assets/github.png";
import cplusplus from "../assets/c-.png";
import js from "../assets/js.png";
import react from "../assets/react.png";

export const Experience = () => {
  const technology = [
    {
      id: 1,
      icon: python,
      title: "Python",
    },

    {
      id: 1,
      icon: django,
      title: "Django",
    },

    {
      id: 1,
      icon: github,
      title: "Github",
    },

    {
      id: 1,
      icon: js,
      title: "Javascript",
    },

    {
      id: 1,
      icon: react,
      title: "React JS",
    },

    {
      id: 1,
      icon: cplusplus,
      title: "C++",
    },
    {
      id: 1,
      icon: mysql,
      title: "My SQL",
    },
  ];
  return (
    <div
      name="experience"
      className="w-full h-screen md:min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"
    >
      <div className="max-w-screen-lg p-4 h-full w-full mx-auto text-white flex flex-col justify-center items-center md:items-start">
        <div className="pb-8">
          <p className="text-4xl sm:text-5xl font-bold inline border-b-4 border-gray-500 text-white">
            Experience
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
          {technology.map(({ id, icon, title }) => (
            <div
              key={id}
              className="shadow-md hover:scale-100 duration-500 py-4 rounded-lg shadow-yellow-500"
            >
              <img src={icon} alt="" className="mx-auto" />
              <p className="text-2xl mt-4 text-white">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};