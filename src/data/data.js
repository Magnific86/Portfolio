import { FiGrid, FiLinkedin, FiFigma } from "react-icons/fi";
import { VscProject } from "react-icons/vsc";
import { TbWorld } from "react-icons/tb";
import GoShopsPrewies from "../assets/images/goshops-prew.png";
import weather from "../assets/images/weahther.png";
import musicShopPrew from "../assets/images/music-shop-prew.png";
import sobesTopicsPrew from "../assets/images/sobes-topics-prev.png";
import {
  BsBootstrapFill,
  BsPersonLinesFill,
  BsGithub,
  BsWhatsapp,
  BsTelegram,
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
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

import { GrGithub, GrInstagram } from "react-icons/gr";
import { AiFillHtml5, AiOutlineAntDesign } from "react-icons/ai";
import { DiCss3, DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaDiscord, FaHardHat, FaNodeJs } from "react-icons/fa";

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
    icon: <BsTelegram className="skills-icon switch__color" />,
    url: "https://t.me/nodefined",
  },
  {
    icon: <BsWhatsapp className="skills-icon switch__color" />,
    url: "https://t.me/nodefined",
  },
  {
    icon: <FaDiscord className="skills-icon switch__color" />,
    url: "https://discord.com/users/507463122173558807",
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

const myProjects = [
  {
    id: 1,
    name: "Posts Storage",
    desc: "Full-stack App",
    stack: "Express, MongoDB, React & TS",

    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/Magnific86/sobes-topics",
    },
    website: {
      icon: <TbWorld />,
      url: "https://sobes-topics.vercel.app/",
    },
    imgUrl: sobesTopicsPrew,
  },
  {
    id: 2,
    name: "Internet-store",
    desc: "My biggest project",
    stack: "React, NextJS, SASS, AntD",

    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/Magnific86/trexpress",
    },
    website: {
      icon: <TbWorld />,
      url: "https://trexpress.uz/",
    },
    imgUrl: "",
  },
  {
    id: 3,
    name: "Go Shops",
    desc: "Shopping store",
    stack: "NextJS, SASS, AntD",
    gitHubUrl: {},
    website: {
      icon: <TbWorld />,
      url: "https://goshops.org/",
    },
    imgUrl: GoShopsPrewies,
  },
  {
    id: 4,
    name: "Weather Forecast",
    desc: "That is my Weather Forecast Project which i first used and learned tailwind. It shows daily 5 hours of the day and 5 days of the week",
    stack: "React, Tailwind, OpenWeatherMap, CSS",

    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/FaraJM21/weatherapp",
    },
    website: {
      icon: <TbWorld />,
      url: "https://weather-forecast-daily.netlify.app/",
    },
    imgUrl: weather,
  },
  {
    id: 5,
    name: "Web3 Music Shop",
    desc: "First web3 project work with self-write smart-contract",
    stack: "React, Tailwind, Solidity, Hardhat, Ethers",

    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/Magnific86/music-shop/tree/main",
    },
    website: {
      icon: <TbWorld />,
      url: "https://music-shop-gamma.vercel.app/",
    },
    imgUrl: musicShopPrew,
  },
];

export { sideBarMenu, socialIcons, skillSet, myProjects };
