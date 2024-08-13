import React from "react";
import "../index.css";
import meetIcon from "./images/meet.png";
import ZoomIcon from "./images/zoom.png";
import skypeIcon from "./images/skype.png";
import slackIcon from "./images/slack.png";
import teamIcon from "./images/teams.png";
import User1 from "./images/user-1.png";
import User2 from "./images/user-2.png";
import User3 from "./images/user-4.png";
import Testi3 from "./images/testimonial4.png";
const Testemonials = () => {
  return (
    <>
      <div className="mt-20">
        <ul className="flex flex-col lg:flex-row m-auto justify-between ml-[150px] md:ml-[250px] lg:w-[80%] xl:w-[100%] lg:ml-0 text-2xl font-bold mb-6 space-y-10 lg:space-y-0 lg:space-x-4">
          <li>
            <img src={ZoomIcon} alt="zoom" className="w-[50px]" />
          </li>
          <li>
            <img src={skypeIcon} alt="skype" className="w-[50px]" />
          </li>
          <li>
            <img src={meetIcon} alt="meet" className="w-[50px]" />
          </li>
          <li>
            <img src={slackIcon} alt="slack" className="w-[50px]" />
          </li>
          <li>
            <img src={teamIcon} alt="team" className="w-[50px]" />
          </li>
        </ul>
      </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold w-[30%] md:w-[50%] lg:w-[100%] text-center my-8">
          <span className="gradient-liner">Testemonials</span>
        </h1>
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-[30%] md:w-[50%] lg:w-[100%] text-center mb-6">
        What my client says about me.
      </h1>
      <div className="flex flex-col lg:flex-row justify-between w-[30%] md:w-[50%] lg:w-[100%]">
        <div className="p-4 bg-custom-gradient rounded-lg mb-4 lg:mb-0 lg:mr-2">
          <img src={Testi3} alt="moni" className="w-[25px]" />
          <p className="font-thin">
            <small>
              Sadia Aslam is one of the best teachers. I live in Germany and my
              son needed support for his school subjects. And someone
              recommended us Sadia Aslam After teaching my son, he made a good
              progress with his subject. I highly recommend Sadia Aslam for
              those who need support for his/her school subjects. Sadia Aslam
              knows how to teach and influence others.It is a privilege for us
              to know her. Thanks a lot Sadia Aslam.
            </small>
          </p>
          <div className="flex mt-2">
            <img src={User1} alt="User1" className="w-[50px] rounded-full" />
            <div className="ml-2">
              <h1 className="font-bold">Sait Celik</h1>
              <p>
                <small>Teaching & Education</small>
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-custom-gradient rounded-lg ml-2">
          <img src={Testi3} alt="moni2" className="w-[25px]" />
          <p className="font-thin">
            <small>
              Sadia Aslam stands out as the best online biology teacher due to
              her exceptional teaching skills and comprehensive knowledge of the
              subject. Her ability to make complex topics understandable and
              engaging has been instrumental in my academic success. Sadia's use
              of technology to explain biological diagrams is particularly
              impressive, making learning both interactive and effective. I am
              incredibly grateful for her guidance and highly recommend her to
              anyone looking to master biology.
            </small>
          </p>
          <div className="flex mt-2">
            <img src={User2} alt="User2" className="w-[50px] rounded-full" />
            <div className="ml-2">
              <h1 className="font-bold">Hywel Bennett MA Ed</h1>
              <p>
                <small>Academic Director/Online Educator</small>
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-custom-gradient rounded-lg ml-2">
          <img src={Testi3} alt="moni3" className="w-[25px]" />
          <p className="font-thin">
            <small>
              Sadia Aslam is an exceptional online biology teacher. Her in-depth
              knowledge of the subject, coupled with her innovative teaching
              methods, has significantly enhanced my understanding of complex
              biological concepts. Sadia's ability to explain intricate diagrams
              and processes clearly and concisely is unparalleled. Her
              dedication and passion for teaching are evident in every session,
              making learning both engaging and enjoyable. I highly recommend
              Sadia to anyone looking to excel in biology.
            </small>
          </p>
          <div className="flex mt-2">
            <img src={User3} alt="User3" className="w-[50px] rounded-full" />
            <div className="ml-2">
              <h1 className="font-bold">Sana Fatima</h1>
              <p>
                <small>Headmistress KS4 Trainer Cambridge</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testemonials;
