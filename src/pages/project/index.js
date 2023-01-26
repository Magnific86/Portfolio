import { GrGithub } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";
import { IoLogoBitbucket } from "react-icons/io";
import foodDelivery from "../../assets/images/foodDelivery.png";
import dashboard from "../../assets/images/dashboard.png";
import weather from "../../assets/images/weahther.png";
import pricehunter from "../../assets/images/pricehunter.png";
import rentinn from "../../assets/images/rentinn.png";
// projects data
export const projects = [
  {
    id: 1,
    name: "NBU Currency Exchange",
    desc: "Currency Exchange Project",
    stack: "HTML Sass JavaScript",

    gitHubUrl: {
      icon: <IoLogoBitbucket />,
      url: "https://bitbucket.org/farrukh_021/nbu-bank/src/master/",
    },
    website: {
      icon: <TbWorld />,
      url: "https://nbucurrencyexchnage.netlify.app/",
    },
    imgUrl:
      "https://www.gazeta.uz/media/img/2017/04/FKH4lB14931315425338_l.jpg",
  },
  {
    id: 2,
    name: "Rock Paper Scissors game",
    desc: "A game that you can play with PC",
    stack: "HTML CSS JavaScript",

    gitHubUrl: {
      icon: <IoLogoBitbucket />,
      url: "https://bitbucket.org/farrukh_021/game/src/master/",
    },
    website: {
      icon: <TbWorld />,
      url: "https://cozy-shortbread-ba4c2c.netlify.app",
    },
    imgUrl: "https://wallpapercave.com/wp/wp8121945.jpg",
  },
  {
    id: 3,
    name: "Amazone Web Clone",
    desc: "I tried to made project similar with original one",
    stack: "HTML SASS JAVASCRIPT",

    gitHubUrl: {
      icon: <IoLogoBitbucket />,
      url: "https://bitbucket.org/farrukh_021/amazone/src/master/",
    },
    website: {
      icon: <TbWorld />,
      url: "https://myamazone-clone.netlify.app/",
    },
    imgUrl:
      "https://wallpapers.com/images/hd/amazon-digital-city-art-npcp6jc782ixp9zs.jpg",
  },
  {
    id: 4,
    name: "Fast Food Delivery",
    desc: "My biggest and lates project Food Deelivery that includes all details of online food service",
    stack: "Sass React Redux (AOS, Lottify animations) Bootstrap  Material UI",

    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/FaraJM21/Food-Delivery",
    },
    website: {
      icon: <TbWorld />,
      url: "https://myfooddeliveryproject.netlify.app/",
    },
    imgUrl: foodDelivery,
  },

  {
    id: 5,
    name: "Weather Forecast",
    desc: "That is my Weather Forecast Project which i first used and learned  tailwind. It shows daily 5 hours of the day and 5 days of the week",
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
    id: 6,
    name: "Quran Kareem",
    desc: "Full edition of Quran Kareem all ayahs with surahs included. Due to API prohibited to set on web. You can get it from my Git hub  ",
    stack: "React, SCSS, Api",

    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/FaraJM21/qurankareem",
    },
    website: {
      icon: <TbWorld />,
      url: "https://github.com/FaraJM21/qurankareem",
    },
    imgUrl:
      "https://img.freepik.com/premium-vector/vector-illustration-of-ramadan-kareem-with-al-quran_44392-103.jpg",
  },
  {
    id: 7,
    name: "Admin Dashboard",
    desc: "Admin Dashboard Web with several charts build with Tailwind and Syncfusion UI",
    stack: "React, Tailwind,Syncfusion UI",

    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://github.com/FaraJM21/admindashboard",
    },
    website: {
      icon: <TbWorld />,
      url: "https://admindashboardweb.netlify.app/",
    },
    imgUrl: dashboard,
  },

  {
    id: 8,
    name: "Price Hunter",
    desc: "Marketplace which I did for my first job",
    stack: "React, Sass, MUI, ANTD",

    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://pricehunterdemosite.netlify.app/",
    },
    website: {
      icon: <TbWorld />,
      url: "https://pricehunterdemosite.netlify.app/",
    },
    imgUrl: pricehunter,
  },

  {
    id: 9,
    name: "Rent INN",
    desc: "My second real project which will be on web soon",
    stack: "React, Sass, MUI, ANTD, Swiper Js",

    gitHubUrl: {
      icon: <GrGithub />,
      url: "https://rufiweb.netlify.app/",
    },
    website: {
      icon: <TbWorld />,
      url: "https://rufiweb.netlify.app/",
    },
    imgUrl: rentinn,
  },
];
