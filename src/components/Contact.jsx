import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import ContactP from "./images/Contact2.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { user_name, user_email, message } = formData;

    // Form validation
    if (user_name && user_email && message) {
      setSuccessMessage("Form submitted successfully!");
      setErrorMessage("");
    } else {
      setErrorMessage("Please fill in all fields.");
      setSuccessMessage("");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_eikgpz8', 'template_2yjd19t', form.current, 'pe_HWsS4RnB2ND6vC'
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
    if (formData.user_name && formData.user_email && formData.message) {
      sendEmail(e);
    }
  };

  return (
    <div className="mt-10 px-4 max-w-full overflow-x-hidden">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold w-full text-center my-8 mb-14">
        <span className="gradient-liner">
          Contact Us
        </span>
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="w-full lg:w-1/2 hidden lg:block">
          <img src={ContactP} alt="Contact" className="h-[400px] mx-auto" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center ml-2 sm:ml-14">
          <form className="w-full flex flex-col items-center" ref={form} onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Enter your Name here"
              className="w-full max-w-[500px] mb-4 rounded-md mt-12 p-2 border border-gray-300 bg-white text-black"
              name="user_name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Enter your Email here"
              className="w-full max-w-[500px] mb-4 rounded-md p-2 border border-gray-300 bg-white text-black"
              name="user_email"
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Enter your Message here"
              className="w-full max-w-[500px] h-[100px] sm:h-[140px] md:h-[170px] mb-4 rounded-md p-2 border border-gray-300 bg-white text-black"
              name="message"
              onChange={handleChange}
              required
            ></textarea>
            <button className="w-full max-w-[200px] rounded-lg mx-auto text-center mt-4 p-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600 transition-all duration-300">
              Submit
            </button>
          </form>
          {errorMessage && (
            <p className="mt-4 text-red-500">{errorMessage}</p>
          )}
          {successMessage && (
            <p className="mt-4 text-green-500">{successMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;