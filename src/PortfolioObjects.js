const header = {
  homepage: '',
  title: 'VIKRAM SINGH',
};

const introduce = {
  name: 'Vikram Singh',
  job: 'Front End Developer',
  description:
    'My Name is Vikram Singh. I was born in Dec 1996. I am a Front-End developer. I have listed my skills in the toolbox below. I am a web developer and I am always learning technologies in this field. I am currently focusing on React.',
  resume: 'https://drive.google.com/file/d/1eYCIWWuUJ5s2l9PQOzsrpw8jM31cNulP/view?usp=sharing',
  social: {
    github: 'https://github.com/vikramsingh159',
  },
};

const projects = [
  {
    name: 'Real-Estate',
    id: 1,
    description:
      "This is a simple Ui Real-Estate project  with React.js . I used react-router-dom for routing. It's responsive.",
    technologies: ['Css', 'JavaScript', 'material-ui','styled-components', 'ReactJs'],
    sourceCode: 'https://github.com/vikramsingh159/real-estate',
    livePreview: 'https://real-estate-mu-seven.vercel.app/',
  },
  {
    name: 'KEEPER',
    id: 2,
    description:
      'This is a Note book type add and delete text and material ui project. I got help from Bootstrap site projects.',
    technologies: ['Html', 'Css', 'JavaScript', 'Bootstrap', 'ReactJs'],
    sourceCode: 'https://github.com/vikramsingh159/keeper',
    livePreview: 'https://keeper-o4podnv15-vikramsingh159.vercel.app/',
  },
  {
    name: 'Movies APP',
    id: 2,
    description:
      'This is a Movies rating app Imdb Clone search and rating movie list and movies details Projects.',
    technologies: ['Html', 'Css', 'JavaScript', 'Redux', 'style-components', 'Bootstrap' , 'ReactJs'],
    sourceCode: 'https://github.com/vikramsingh159/movies-app',
    livePreview: 'https://movies-app-red-seven.vercel.app/',
  },
];

const skills = ['Html', 'Css', 'JavaScript', 'ReactJs',"Redux" , 'Bootstrap','Material UI' , 'Git'];

const contact = {
  email: 'er.vikramsingh10@gmail.com',
};

export { header, introduce, projects, skills, contact };
