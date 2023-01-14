import images from "../assets/base_assets";

const languages = [
  {
    name: "C++",
    icon: images.c_icon,
  },
  {
    name: "Dart",
    icon: images.dart_icon,
  },
  {
    name: "JavaScript",
    icon: images.js_icon,
  },
];
const lib_n_tech = [
  {
    name: "Flutter",
    icon: images.flutter_icon,
  },
  {
    name: "React",
    icon: images.react_icon,
  },
  {
    name: "MUi",
    icon: images.mui_icon,
  },
  {
    name: "NodeJS",
    icon: images.node_icon,
  },
  {
    name: "Express",
    icon: images.express_icon,
  },

  {
    name: "MongoDB",
    icon: images.mongo_icon,
  },
  {
    name: "Firebase",
    icon: images.firebase_icon,
  },
  {
    name: "Git",
    icon: images.git_icon,
  },
  {
    name: "GitHub",
    icon: images.github_icon,
  },
];

const recommendation = [
  {
    name: "Figma",
    icon: images.figma_icon,
  },
  {
    name: "Notion",
    icon: images.notion_icon,
  },
  {
    name: "DevToy",
    icon: images.devtoy_icon,
  },
  {
    name: "AutoHotkey",
    icon: images.autohotkey_icon,
  },
  {
    name: "PowerToys",
    icon: images.power_toy,
  },
];

export const tech_stack = {
  languages,
  lib_n_tech,
  recommendation,
};

export const about_me =
  "Hey there, I hope you're doing well. I am 21 years old and a final-year undergraduate Computer Science student from India  🇮🇳  pursuing BTech at the National Institute of Science and Technology. An adaptable individual who is passionate ⚡ about developing apps and learning new 💡 technologies as well as an enthusiastic problem-solver who use code to do so 👀.  Having experience in Flutter and React, currently exploring the Backend / Server-side. As a result, you'll rarely find me AFK 🧑‍💻. Apart from coding, I enjoy improving my design and user interface skills, and also love 💜 to consume news and articles.";

export const work_experience_two = {
  company_name: "Embrays",
  company_link: "https://embraystechnologies.com/",
  date: "9 Dec(2021) - 12 Jan(2022)",
  job_title: "Flutter Developer",
  points: [
    "Contributed v2 of StockDaddy app from scratch, in which I was responsible for architecture and Business Logic and followed MVC architecture",
    "Designed the Authentication and Authorization flow for the app login, signup, OTP by using RiverPod as state-management",
    "Integrated 15+ GraphQL APIs by following best practices which include Authentication, Payment integration using Razor Pay, and other business logic.",
  ],
  extra: {
    data1: "has 50K+ downloads",
    appLink:
      "https://play.google.com/store/apps/details?id=com.easemytrades.stockdaddy",
  },
};

export const work_experience_one = {
  company_name: "Velozity",
  company_link: "https://velozityglobal.com/",
  date: "25 Feb(2022) - July(2022)",
  job_title: "Flutter Developer",
  points: [
    "Contributed to Customer, Restaurant, and Delivery apps which are  part of a Food delivery service, In which I was responsible for developing UI, Business Logic with proper state-management using BLOC and MVC architecture",
    "Designed the Authentication and Authorization flow for Restaurant and Delivery the app login, register, and OTP by using RiverPod as state-management and restful APIs    ",
    "Integrated 20+ Restful APIs, creating orders, Oder tracking using Google Maps API, Payment integration using Razor Pay, Signing APK and other business logic for all three apps.",
  ],
};
export const work_experience_three = {
  company_name: "Caravel",
  company_link: "https://caravel.tech/",
  date: "Aug(2022) - current",
  job_title: "Software Developer",
  points: [],
};

export const projects_names = [
  " Extension Enabler",
  "Ping-It",
  "QuickTweets",
  "PixelLab",
];

export const projects_zero = {
  // picture: images.pro1,
  name: " Extension Enabler",
  link: "https://github.com/narayann7/ExtensionEnabler",
  preview: "https://pub.dev/packages/extension_enabler",
  description:
    "A Flutter Package (CLI App) that enables flutter web app as chromium based extension with simple command, Package automates setting up the configs with file manipulation and command arguments like (enable, update, and build).",
};
export const projects_one = {
  picture: images.pro1,
  name: "Ping-It",
  link: "https://github.com/narayann7/ping-it",
  preview: "https://github.com/narayann7/ping-it#readme",
  description:
    "Chat app using MERN stack, in which A user is authenticated by email and google with use JWT for verification. App use sockets for creating secure connections between users for chat.All the data and information are stored securely in a NoSQL database which is document-oriented. ",
};

export const projects_two = {
  picture: images.pro2,
  name: "QuickTweets",
  link: "https://github.com/narayann7/QuickTweets",
  preview: "https://github.com/narayann7/QuickTweets#readme",
  description:
    "Quick Tweets, get the tweets of that respective user with Twitter API. BLOC patten as statemanagment Firebase for authentication and storing the data",
};

export const projects_three = {
  picture: images.pro3,
  name: "PixelLab",
  link: "https://github.com/narayann7/pixelLab-WallpaperApp-",
  preview: "https://github.com/narayann7/pixelLab-WallpaperApp-#readme",
  description:
    "Fetch data from an Pexels API with flutter. useState in a flutter app. pass down data in flutter widgets. show a grid view. Using Hero Animation. Save the image to local storage (Gallery) for Android",
};
