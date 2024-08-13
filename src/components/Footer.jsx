import React from "react";
import {
  FaYoutube,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaVoicemail,
} from "react-icons/fa";
import Mail from "./images/mail.png";

const Footer = () => {
  return (
    <div className="bg-black">
      <hr className="border-gray-700" />
      <div className="flex lg:justify-between justify-center w-[30%] md:w-[50%] lg:w-[80%] xl:w-[100%] mt-6 pb-2 bg-black">
        <div className="hidden lg:block">
          Copyright @ 2024 Sadia_Portfolio All Rights Reserved.
        </div>
        <div className="flex justify-center">
          <a
            href="https://youtube.com/playlist?list=PLnGUyOPS_QQ05cvXQd98b05ZXXMjMv-zV&si=WpCeXpuaxRGG6tzr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="mx-4 text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/biologytutorsadia?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="mx-4 text-2xl" />
          </a>
          <a
            href="https://www.facebook.com/sadia.aslam.14811"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="mx-4 text-2xl" />
          </a>
          <a
            href="https://wa.me/message/AVPAVB5HNQSHK1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="mx-4 text-2xl" />
          </a>
          <a
            href="mailto:sadiaaslam061996@gmail.com"
          >
            <img src={Mail} alt="mail" className="w-[27px]" />
          </a>
        </div>
      </div>
      <div className="bg-black text-black">no</div>
    </div>
  );
};

export default Footer;
