import React from "react";
// react-icons
import { FiGrid, FiLinkedin, FiFigma } from "react-icons/fi";
import { VscProject } from "react-icons/vsc";
import { AiOutlineAntDesign } from "react-icons/ai";
import {
  BsBootstrapFill,
  BsPersonLinesFill,
  BsGithub,
} from "react-icons/bs";

import { RiContactsLine, RiReactjsLine } from "react-icons/ri";
import {
  SiSass,
  SiMaterialui,
  SiExpress,
  SiRedux,
  SiNextdotjs,
  SiVercel,
  SiSolidity,
} from "react-icons/si";

import { GrGithub, GrInstagram } from "react-icons/gr";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaHardHat, FaNodeJs, FaTelegram } from "react-icons/fa";
import { SiTypescript, SiTailwindcss} from "react-icons/si";

// sidebar menu functionality
const sideBarMenu = [
  {
    text: "Home",
    icon: <FiGrid className="link-icon" />,
    url: "/",
  },
  {
    text: "About",
    icon: <BsPersonLinesFill className="link-icon" />,
    url: "/about",
  },
  {
    text: "Projects",
    icon: <VscProject className="link-icon" />,
    url: "/project",
  },
  
  {
    text: "Contacts",
    icon: <RiContactsLine className="link-icon" />,
    url: "/contact",
  },
  
];
// social media icons
const socialIcons = [
  {
    icon: <GrGithub className="icon switch__color" />,
    url: "https://github.com/Magnific86",
  },

  {
    icon: <GrInstagram className="icon switch__color" />,
    url: "https://www.instagram.com/klevtsov49/",
  },
  {
    icon: <FiLinkedin className="icon switch__color" />,
    url: "https://www.linkedin.com/in/nikita-klevtsov-018a59263/",
  },

  {
    icon: <FaTelegram className="skills-icon switch__color" />,
    spanText: "EXPRESS JS",
    url: "https://t.me/nodefined",
  },
];
// skills card
const skillSet = [
  {
    icon: <AiFillHtml5 className="skills-icon switch__color" />,
    spanText: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: <DiCss3 className="skills-icon switch__color" />,
    spanText: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },

  {
    icon: <SiTailwindcss className="skills-icon switch__color" />,
    spanText: "TAILWIND",
    url: "https://tailwindcss.com/",
  },
  {
    icon: <IoLogoJavascript className="skills-icon switch__color" />,
    spanText: "JAVASCRIPT",
    url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript",
  },

  {
    icon: <SiTypescript className="skills-icon switch__color" />,
    spanText: "TYPESCRIPT",
    url: "https://www.typescriptlang.org/",
  },
  {
    icon: <SiSass className="skills-icon switch__color" />,
    spanText: "SASS",
    url: "https://sass-lang.com/",
  },

  {
    icon: <BsBootstrapFill className="skills-icon switch__color" />,
    spanText: "BOOTSTRAP",
    url: "https://getbootstrap.com/",
  },

  {
    icon: <SiMaterialui className="skills-icon switch__color" />,
    spanText: "MATERIAL UI",
    url: "https://mui.com/",
  },

  {
    icon: <AiOutlineAntDesign className="skills-icon switch__color" />,
    spanText: "Ant Design",
    url: "https://ant.design/",
  },


  {
    icon: <BsGithub className="skills-icon switch__color" />,
    spanText: "GITHUB",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub",
  },
  {
    icon: <RiReactjsLine className="skills-icon switch__color" />,
    spanText: "REACT JS",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started",
  },

  {
    icon: <FaNodeJs className="skills-icon switch__color" />,
    spanText: "NODE",
    url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
  },

  {
    icon: <DiMongodb className="skills-icon switch__color" />,
    spanText: "MONGO DB",
    url: "https://www.mongodb.com/",
  },
  {
    icon: <SiExpress className="skills-icon switch__color" />,
    spanText: "EXPRESS JS",
    url: "https://expressjs.com/ru/",
  },
  
 
  {
    icon: <SiRedux className="skills-icon switch__color" />,
    spanText: "Redux",
    url: "https://redux.js.org/introduction/getting-started",
  },
  {
    icon: <FiFigma className="skills-icon switch__color" />,
    spanText: "Figma",
    url: "https://figma.com",
  },
  {
    icon: <SiNextdotjs className="skills-icon switch__color" />,
    spanText: "Next JS",
    url: "https://nextjs.org/",
  },

  {
    icon: <SiVercel className="skills-icon switch__color" />,
    spanText: "Vercel",
    url: "https://vercel.com/",
  },
  {
    icon: <SiSolidity className="skills-icon switch__color" />,
    spanText: "Solidity",
    url: "https://docs.soliditylang.org/en/v0.8.17/",
  },
  {
    icon: <FaHardHat className="skills-icon switch__color" />,
    spanText: "Hardhat",
    url: "https://hardhat.org/",
  },
];

export { sideBarMenu, socialIcons, skillSet };



