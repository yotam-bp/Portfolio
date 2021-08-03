import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Yotam Ben Porat Dev', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Yotam Ben Porat',
  subtitle: "I'm a Web Developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Yotam.jpg',
  paragraphOne: `I’m a Full-Stack Web Developer located in Tel-Aviv. I have a serious passion for learning new things and create them by myself`,
  paragraphTwo: 'Well-organised calm person, problem solver, independent employee with high attention to details. Addicted to surfing, outdoor activities and sports in general, finds the capital markets very attractive.',
  paragraphThree: 'I’m curious about every aspect of the web and enjoy working on ambitious projects with incredible people.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'jaunt.png',
    title: 'Jaunt',
    info: 'Vacation search engine around the world based on AirBnb. An end-to-end app that incorporates the most popular tools for building a large system.',
    info2: 'React, Redux, Nodejs, MongoDB, Sass, Express, Socket.io, Bcrypt, Cors.',
    url: 'https://travel-jaunt.herokuapp.com/#/',
    repo: 'https://github.com/yotam-bp/Jaunt-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'appsus.png',
    title: 'Appsus',
    info: 'A tool for managing three application interfaces into one system. Users can navigate easily through books, notes, and emails.',
    info2: 'React, JavaScript, Html, Css',
    url: 'https://yotam-bp.github.io/Appsus',
    repo: 'https://github.com/yotam-bp/Appsus', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'meme-gen.png',
    title: 'Meme Generator',
    info: 'A pure vanilla JS app, based on  MVC principles. You can create a meme from a photo library, to edit and save it. In addition, it is possible to download the meme to the device used or share it on Facebook.',
    info2: 'JavaScript, Html, Css',
    url: 'https://yotam-bp.github.io/meme-generator',
    repo: 'https://github.com/yotam-bp/meme-generator', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'yotyyybp@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/yotam.b.porat',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/yotam-ben-porat',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/yotam-bp',
    },
  ],
};

// Github start/fork buttons
// export const githubButtons = {
//   isEnabled: true, // set to false to disable the GitHub stars/fork buttons
// };
