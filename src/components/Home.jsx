import React from "react";
import "../index.css";
import img3 from "./images/img3.jpeg";

const Home = () => {
  return (
    <div className="mt-[70px] lg:mt-0 mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2">
          <h1 className="text-6xl mb-4">
            Find an{" "}
            <span
              style={{
                background:
                  "linear-gradient(65deg, rgba(232,30,193,1) 0%, rgba(52,184,215,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              biology tutor
            </span>{" "}
            to help you to study
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum iste
            id expedita asperiores minima, fuga dolorem similique sapiente
            nesciunt recusandae!
          </p>
        </div>
        <div className="w-full lg:w-1/2 max-w-[500px]">
          <img className="xl:ml-[60px] mt-4" src={img3} />
        </div>
      </div>
      <div>
        <ul className="flex flex-col lg:flex-row justify-between mt-6 lg:mt-0 text-2xl font-bold mb-6 space-y-10 lg:space-y-0 lg:space-x-4">
          <li className="gradient-liner flex justify-center">
            <span
              style={{
                background:
                  "linear-gradient(65deg, rgba(232,30,193,1) 0%, rgba(52,184,215,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              IGCSE
            </span>
          </li>
          <li className="gradient-liner mb-4 lg:mb-0 flex justify-center">
            <span
              style={{
                background:
                  "linear-gradient(65deg, rgba(232,30,193,1) 0%, rgba(52,184,215,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              GCSE
            </span>
          </li>
          <li className="gradient-liner mb-4 lg:mb-0 flex justify-center">
            <span
              style={{
                background:
                  "linear-gradient(65deg, rgba(232,30,193,1) 0%, rgba(52,184,215,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AQA
            </span>
          </li>
          <li className="gradient-liner mb-4 lg:mb-0 flex justify-center">
            <span
              style={{
                background:
                  "linear-gradient(65deg, rgba(232,30,193,1) 0%, rgba(52,184,215,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              EDEXCEL
            </span>
          </li>
          <li className="gradient-liner flex justify-center">
            <span
              style={{
                background:
                  "linear-gradient(65deg, rgba(232,30,193,1) 0%, rgba(52,184,215,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              OCR
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
