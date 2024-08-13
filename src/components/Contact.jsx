import React from "react";
// import ContactP from "./images/Contact.png";
import ContactP from "./images/Contact2.png";

const Contact = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold w-[30%] md:w-[50%] lg:w-[100%] text-center my-8 mb-14">
        <span className="gradient-liner">
          Contact Us
        </span>
      </h1>
      <div className="flex">
        <div className="w-[50%] hidden lg:block">
          <img src={ContactP} alt="Contact" className="h-[400px]" />
        </div>
        <div className="w-[50%] flex flex-col ml-2 sm:ml-14">
          <input
            type="text"
            placeholder="Enter your Name here"
            className="w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] mb-4 rounded-md mt-12 p-1"
          />
          <input
            type="email"
            placeholder="Enter your Email here"
            className="w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] mb-4 rounded-md p-1"
          />
          <textarea
            placeholder="Enter your Message here"
            className="w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] h-[100px] sm:h-[140px] md:h-[170px] mb-4 rounded-md p-1"
          ></textarea>
          <button className="w-[100px] rounded-lg mr-60 p-1"
          style={{background: "linear-gradient(65deg, rgba(232,30,193,1) 0%, rgba(52,184,215,1) 100%)"}}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
