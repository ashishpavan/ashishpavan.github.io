const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ashishpavan.github.io',
  title: 'PA.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Pavan Agarwal',
  role: 'MS in Information Systems @ University of Wisconsin Madison',
  description:
    'A Data Enthusiast who loves to solve complex problem using Cloud and Software. An experienced Data Engineer with leadership abilities, a quick learner, and a team player.',
  resume: 'https://drive.google.com/file/d/1b3R0Jn4ImJ5hTJGCcBdVctANiJI9QF93/view?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/pavan-agarwal-0364a5144/',
    github: 'https://github.com/ashishpavan',
  },
}


const education = [
  {
    name: 'University of Wisconsin Madison',
    description: 'Masters in Computer Science',
    stack: ['Sept 2023 - Dec 2024'],
  },
  {
    name: 'University of Mumbai',
    description: 'B.E in Computer Science',
    stack: ['Aug 2017 - Jun 2021', 'GPA: 9.54/10'],
  },
]


const experience = [
  {
    name: 'Microsoft',
    description:
      'Full stack software engineer in the Viva Learning Search team developing applications across web client, mobile and backend using React.js, Typescript, React Native and C#',
    stack: ['HYD, India', 'Jul 2021 - Aug 2023'],
  },
  {
    name: 'Amazon',
    description:
      'Backend software development intern in the custoemr returns team involved in application enhancement using Java and AWS tools like S3, ElasticSearch, Lambda, Sushi',
    stack: ['HYD, India', 'Jan 2021 - Jun 2021'],
  },
  {
    name: 'Walmart Labs',
    description:
      'Frontend developer intern involved in persisting conversations in a chatbot and proposing various approaches to achieve historical conversations using Typescript, React.js, Azure Bot Service',
    stack: ['BLR, India', 'May 2020 - Jul 2020'],
  },
  {
    name: 'MapMyIndia',
    description:
      'Backend infrastructure intern involved in migrating the existing geospatial application infrastructure to an open source based model using Kafka, AWS S3, Docker and Bash',
    stack: ['DEL, India', 'May 2019 - Jul 2019'],
  },
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Project Management',
  'Data Analysis',
  'AWS Cloud',
  'SQL',
  'Python',
  'HTML',
  'CSS',
  'Tableau',
  'Machine Learning',
  'JavaScript',
  'Docker',
  'Containerized Applications',

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'agrawalpavan755@gmail.com',
}

export { header, about, projects, skills, contact, education, experience }
