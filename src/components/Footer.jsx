import React from "react";
import { FaYoutube, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Mail from "./images/mail.png";

const Footer = () => {
  const obfuscateEmail = (email) => {
    const [user, domain] = email.split("@");
    return `${user} [at] ${domain}`;
  };
  return (
    <div className="bg-black text-white py-4">
      <hr className="border-gray-700" />
      <div className="flex flex-col lg:flex-row items-center justify-between w-full px-4 lg:px-0 mt-6 pb-2">
        <div className="mb-4 lg:mb-0 text-center lg:text-left">
          Copyright @ 2024 Sadia_Portfolio All Rights Reserved.
        </div>
        <div className="flex justify-center lg:justify-end">
          <a
            href="https://youtube.com/playlist?list=PLnGUyOPS_QQ05cvXQd98b05ZXXMjMv-zV&si=WpCeXpuaxRGG6tzr"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaYoutube className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/biologytutorsadia?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://www.facebook.com/sadia.aslam.14811"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            href="https://wa.me/message/AVPAVB5HNQSHK1"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
          <a href="mailto:sadiaaslam061996@gmail.com" className="mx-2">
            <img src={Mail} alt="mail" className="w-[27px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
