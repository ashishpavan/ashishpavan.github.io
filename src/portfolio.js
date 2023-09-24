const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ashishpavan.github.io',
  title: 'JS.',
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
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
