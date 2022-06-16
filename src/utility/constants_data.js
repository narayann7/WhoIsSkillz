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
];

export const tech_stack = {
  languages,
  lib_n_tech,
  recommendation,
};

export const about_me =
  "Hello, hope you're doing well. I am 20 years old and a third-year undergraduate Computer Science student from India 🇮🇳 pursuing BTech. at National Institute of Science and Technology, Berhampur. An adaptable individual who is passionate⚡about developing apps and learning new💡technologies, also an Enthusiastic problem solver, who uses code as a tool for problem-solving 👀. Having experience in Flutter, and React, currently exploring the Backend / Server-side. So you'll rarely find me AFK 🧑‍💻. When I'm not coding, I try to improve my Design and UI skills and also love 💜 to consume news and articles, top picks XDA, itsFoss. ";

export const work_experience_one = {
  company_name: "Embrays Technologies",
  company_link: "https://embraystechnologies.com/",
  date: "9 Dec(2021) - 12 Jan(2022)",
  job_title: "Flutter Developer",
  points: [
    "contributed v2 of StockDaddy app from scratch, in which I was responsible for architecture and Business Logic and followed MVC architecture",
    "designed the Authentication and Authorization flow for the app login, signup, otp by using RiverPod as state-management ",
    "intergrated 15+ GraphQL APIs by following best-practices which includes Authentication,Payment integration using RazorPay, and other business logic",
  ],
  extra: {
    data1: "app has 50K+ downloads",
    appLink:
      "https://play.google.com/store/apps/details?id=com.easemytrades.stockdaddy",
  },
};