import { FiGrid, FiLinkedin, FiFigma } from "react-icons/fi"
import { VscProject } from "react-icons/vsc"
import { TbWorld } from "react-icons/tb"
import GoShopsPrewies from "../assets/images/goshops.png"
import weather from "../assets/images/weahther.png"
import musicShopPrew from "../assets/images/musicShop.png"
import sobesTopicsPrew from "../assets/images/sobesTopics.png"
import trexpressPrew from "../assets/images/trexpress.png"
import fazoPrew from "../assets/images/fazo.png"
import adekvatPrew from "../assets/images/adekvat.png"
import ultimateShopPrew from "../assets/images/ultimateShop.png"
import calulatorPrew from "../assets/images/calculator.png"
import { BsBootstrapFill, BsPersonLinesFill, BsGithub, BsWhatsapp, BsTelegram } from "react-icons/bs"

import { RiContactsLine, RiReactjsLine } from "react-icons/ri"
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
} from "react-icons/si"

import { GrGithub, GrInstagram } from "react-icons/gr"
import { AiFillHtml5, AiOutlineAntDesign } from "react-icons/ai"
import { DiCss3, DiMongodb } from "react-icons/di"
import { IoLogoJavascript } from "react-icons/io"
import { FaDiscord, FaHardHat, FaNodeJs } from "react-icons/fa"

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
    {
        text: "Github",
        icon: <GrGithub className="link-icon" />,
        url: "/github",
    },
    {
        text: "FileReader",
        icon: <GrGithub className="link-icon" />,
        url: "/filereader",
    },
]
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
        url: "",
    },
    {
        icon: <FaDiscord className="skills-icon switch__color" />,
        url: "https://discord.com/users/507463122173558807",
    },
]
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
]

const myProjects = [
    {
        id: 1,
        name: "Posts Storage",
        desc: "Full-stack  App, using MongoDB cluster, self-write server and with blockchain",
        stack: "Express, MongoDB, React & TS, Solidity, Hardhat, deploy smart-contract on mumbai testnet, server not deployed",

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
        desc: "My biggest project, code is private",
        stack: "React, NextJS, SASS, AntD",

        gitHubUrl: {
            icon: <GrGithub />,
            url: "https://github.com/Magnific86/trexpress",
        },
        website: {
            icon: <TbWorld />,
            url: "https://trexpress.uz/",
        },
        imgUrl: trexpressPrew,
    },
    {
        id: 3,
        name: "Go Shops",
        desc: "Shopping store, code is private",
        stack: "React, NextJS, SASS",
        gitHubUrl: {},
        website: {
            icon: <TbWorld />,
            url: "https://goshops.org/",
        },
        imgUrl: GoShopsPrewies,
    },
    {
        id: 4,
        name: "Fazo shop",
        desc: "One more Shopping store, code is private",
        stack: "React, SASS, AntD",
        gitHubUrl: {},
        website: {
            icon: <TbWorld />,
            url: "https://fazo.uz/",
        },
        imgUrl: fazoPrew,
    },
    {
        id: 5,
        name: "Weather Forecast",
        desc: "That is my Weather Forecast Project which i used tailwind and worked with API",
        stack: "React, Tailwind, OpenWeatherMap, CSS",

        gitHubUrl: {},
        website: {
            icon: <TbWorld />,
            url: "https://weather-forecast-daily.netlify.app/",
        },
        imgUrl: weather,
    },
    {
        id: 6,
        name: "Adekvat",
        desc: "Freelance project",
        stack: "React, react-router-dom, SASS, AntD, React Context",

        gitHubUrl: {
            icons: <GrGithub />,
            url: "https://github.com/Magnific86/adekvat/tree/main",
        },
        website: {
            icon: <TbWorld />,
            url: "https://adekvat.vercel.app/",
        },
        imgUrl: adekvatPrew,
    },
    {
        id: 7,
        name: "Web3 Music Shop",
        desc: "First web3 project work with self-write smart-contract, deployed on arbutrum testnet",
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
    {
        id: 8,
        name: "My first mini-shop",
        desc: "First expirience creating react-app, worked with fake stor API",
        stack: "React, Tailwind, React Context, axios",

        gitHubUrl: {
            icon: <GrGithub />,
            url: "https://github.com/Magnific86/ultimate_shop",
        },
        website: {
            icon: <TbWorld />,
            url: "https://ultimate-shop.vercel.app/",
        },
        imgUrl: ultimateShopPrew,
    },
    {
        id: 9,
        name: "Calculator",
        desc: "Created a simple calculator😄 with Redux",
        stack: "React, Tailwind, Redux",

        gitHubUrl: {
            icon: <GrGithub />,
            url: "https://github.com/Magnific86/calculator/tree/main",
        },
        website: {
            icon: <TbWorld />,
            url: "https://calculator-three-steel.vercel.app/",
        },
        imgUrl: calulatorPrew,
    },
]

export { sideBarMenu, socialIcons, skillSet, myProjects }
