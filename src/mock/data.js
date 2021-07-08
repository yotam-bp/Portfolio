import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Yotam Ben-Porat Dev', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Yotam Ben-Porat',
  subtitle: "I'm a Web Developer.",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Yotam.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'jaunt.png',
    title: 'Jaunt',
    info: '',
    info2: '',
    url: 'https://travel-jaunt.herokuapp.com/#/',
    repo: 'https://github.com/yotam-bp/Jaunt-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'appsus.png',
    title: 'Appsus',
    info: '',
    info2: '',
    url: 'https://-bp.github.io/Appsus/',
    repo: 'https://github.com/yotam-bp/Appsus', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'meme-gen.png',
    title: 'Meme Generator',
    info: '',
    info2: '',
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
