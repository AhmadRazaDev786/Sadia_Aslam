import React, { useState, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import styled from "styled-components";

const GradientText = styled.span`
  background: linear-gradient(
    65deg,
    rgba(232, 30, 193, 1) 0%,
    rgba(52, 184, 215, 1) 100%
  );
  border-radius: 5px;
  padding: 4px;
`;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white">
      <div className="flex justify-between items-center">
        <div className="text-3xl xl:text-4xl">
          <span
            style={{
              background:
                "linear-gradient(65deg, rgba(232,30,193,1) 0%, rgba(52,184,215,1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Sadia
          </span>
          Aslam
        </div>
        <button className="md:hidden text-2xl p-4" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <aside
          ref={navRef}
          className={`fixed inset-0 bg-gray-800 w-3/4 h-screen transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-auto md:h-auto md:flex md:bg-transparent`}
        >
          <ul className="mt-20 md:mt-0 md:flex md:space-x-6 md:items-center md:text-lg">
            <li className="p-5 md:p-2">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-white cursor-pointer"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li className="p-5 md:p-2">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="text-white cursor-pointer"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li className="p-5 md:p-2">
              <Link
                to="testimonials"
                smooth={true}
                duration={500}
                className="text-white cursor-pointer"
                onClick={toggleMenu}
              >
                Testimonials
              </Link>
            </li>
            <li className="p-5 md:p-2">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-white cursor-pointer"
                onClick={toggleMenu}
              >
                <button
                  style={{
                    background:
                      "linear-gradient(65deg, rgba(232,30,193,1) 0%, rgba(52,184,215,1) 100%)",
                  }}
                  className="rounded-lg p-1 whitespace-nowrap"
                >
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </nav>
  );
};

export default Nav;
// import React, { useState, useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-scroll";
// import styled from "styled-components";

// const GradientText = styled.span`
//   background: linear-gradient(
//     65deg,
//     rgba(232, 30, 193, 1) 0%,
//     rgba(52, 184, 215, 1) 100%
//   );
//   border-radius: 5px;
//   padding: 4px;
// `;

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navRef = useRef(null);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <button className="md:hidden text-2xl p-4" onClick={toggleMenu}>
//         <FaBars />
//       </button>
//       <aside
//         ref={navRef}
//         className={`sidebar fixed inset-0 bg-gray-800 w-3/4 h-screen transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:w-auto md:h-auto md:flex md:bg-transparent`}
//       >
//         <button
//           className="md:hidden text-2xl p-4 absolute top-0 right-0"
//           onClick={toggleMenu}
//         >
//           <FaTimes />
//         </button>
//         <div className="ml-[10px] md:w-[22%] lg:w-[42%] xl:w-[62%]">
//           <h1 className="text-3xl">
//             <span
//               style={{
//                 background:
//                   "linear-gradient(65deg, rgba(232,30,193,1) 0%, rgba(52,184,215,1) 100%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}
//             >
//               Sadia
//             </span>
//             Aslam
//           </h1>
//         </div>
//         <ul className="mt-[50px] pl-4 text-[20px] md:flex md:space-x-6 md:mt-0 md:pl-0 md:ml-5">
//           <li className="p-5 md:p-2">
//             <Link
//               to="home"
//               smooth={true}
//               duration={500}
//               className="text-white cursor-pointer"
//               onClick={toggleMenu}
//             >
//               Home
//             </Link>
//           </li>
//           <li className="p-5 md:p-2">
//             <Link
//               to="about"
//               smooth={true}
//               duration={500}
//               className="text-white cursor-pointer"
//               onClick={toggleMenu}
//             >
//               About
//             </Link>
//           </li>
//           <li className="p-5 md:p-2">
//             <Link
//               to="testimonials"
//               smooth={true}
//               duration={500}
//               className="text-white cursor-pointer"
//               onClick={toggleMenu}
//             >
//               Testimonials
//             </Link>
//           </li>
//           <li className="p-5 md:p-2">
//             <Link
//               to="contact"
//               smooth={true}
//               duration={500}
//               className="text-white"
//               onClick={toggleMenu}
//             >
//               <button
//                 style={{
//                   background:
//                     "linear-gradient(65deg, rgba(232,30,193,1) 0%, rgba(52,184,215,1) 100%)",
//                 }}
//                 className="rounded-lg p-1"
//               >
//                 Contact Us
//               </button>
//             </Link>
//           </li>
//         </ul>
//       </aside>
//     </div>
//   );
// };

// export default Nav;
