import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Internal attachment",
    company_name: "JKUAT",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jan 2021 - April 2021",
    points: [
      "Installing updating and troubleshooting operating systems",
      "Running network diagnosis and troubleshooting",
      "Computer hardware assembly including replacing fans,Rams,Hardisks and motherboards ",
      "Web development including (frontend and backend) ,Deployment and hosting",
    ],
  },
  {
    title: "External attachment",
    company_name: "Kiambu County ICT department",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - May 2022",
    points: [
      "Setting up network devices including routers, access points and repeaters as well as network troubleshoting",
      "Network cabinet installation inluding setting up Servers,digital and network video recorders and VOIP phones",
      "Implementing responsive software design and ensuring cross-platform compatibility.",
      "Updating POS equipment used for County Council parking fees",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Thamani Cereals",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining a web application using kivy python and other related technologies.",
      "Collaborating with cross-functional teams including designers and product managers to create a high-quality product.",
      "Implementing a database using SqlLite3 to replace use of  physical records",
      "Data entry and use of machine learning to identify trends in sales records",
    ],
  },
  {
    title: "Freelance Work",
    company_name: "Masota LLC",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Present",
    points: [
      "Developing a compiller for a swahili based programming language",
      "Developing and maintaining web applications using Javascript frameworks and other related technologies.",
      "Developing Machine Learning solutions for businesses  using python ",
      "2D and 3D animation using Blender and THREEjs",
      "User interface and graphics design using Figma",
      "Business process modelling and simulation",
      "Implementing smart agents for Artificial intelligence using python",
      "Creating blockchain smart contracts and  applications using Web3.0 and Solidity",

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [


  {
    name: "Swahilipro Compiler",
    description:
      "A compiler for a swahili based programming language written in Python",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Compilers ",
        color: "green-text-gradient",
      },
      {
        name: "swahilipro",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/bonnieace/swahilipro",
  },
  {
    name: "Coldchain SmartContract",
    description:
      "A blockchain solution for covid-19 vaccine distribution  using solidity and web 3.0         ",
    tags: [
      {
        name: "Blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "Ethereum ",
        color: "green-text-gradient",
      },
      {
        name: "Coldchain",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/bonnieace/3.2peoject",
  },
    {
    name: "React portfoilio",
    description:
      "Developer portfolio website written in React Js ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://bonifacemasota.netlify.app",

  },
  {
    name: "Kivy POS ",
    description:
      "Point of sales system using Kivy Python",
    tags: [
      {
        name: "Kivy",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "POS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/bonnieace/portfolio-website",
  },

];

export { services, technologies, experiences, testimonials, projects };
