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
    name: 'University of Mumbai, India',
    description: 'B.E. in Computer Science',
    stack: ['Aug 2017 - Jun 2021', 'GPA: 9.54/10'],
  },
]


const experience = [
  {
    name: 'Quantiphi Inc | Full time ',
    description:
      'A Data Engineer/Analyst involved in building multiple AWS Data Pipeline using Python, Pyspark, SQL and AWS Cloud services like AWS Redshift, AWS Lambda, AWS S3, AWS Glue ',
    stack: ['Mumbai, India', 'Nov 2021 - Aug 2023'],
  },
  {
    name: 'Quantiphi Inc | Intern ',
    description:
      'A Framework Intern involved in building scalable application and finding avenues for new business generation by system analysis using Python , Machine learning and Data Pre-processing',
    stack: ['Mumbai, India', 'July 2021 - Nov 2021'],
  }
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Flight Reservation System',
    description:
      'Built a modern web application to book real-time flight tickets using OLTP MYSQL backend database.',
    stack: ['PHP','JavaScript', 'HTML','CSS','MYSQL','Miro'],
    sourceCode: 'https://github.com/ashishpavan/Flight-Reservation-System'
  },
  {
    name: 'SVM-KNN implementation to recognize character',
    description:
      'A professional desktop application to predict hand written characters from the app using Machine learning models SVM, KNN',
    stack: ['Python', 'Machine Learning'],
    sourceCode: 'https://github.com/ashishpavan/Hand-written-character-Recognition-Not-using-CNN'
  },
  {
    name: 'Property Datamart',
    description:
      'Build a backend job for migrating raw data from On-premise to AWS Cloud using Python, Pyspark & SQL with 100% date integrity',
    stack: ['Pyspark','Python', 'AWS', 'SQL']
  },
  {
    name: 'Combined Loss Run API',
    description:
      'Developed a AWS cloud API that generates policy loss information using given input parameters',
    stack: ['AWS','Node.js','HTML', 'CSS', 'JavaScript', 'Docker' ]
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Machine Learning',
  'Scikit-Learn',
  'PySpark',
  'Data Analysis',
  'AWS Cloud Certified',
  'Tableau',
  'SQL',
  'Data Visualization',
  'HTML',
  'CSS',
  'JavaScript',
  'Docker',
  'Containerized Applications'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'agrawalpavan755@gmail.com',
}

export { header, about, projects, skills, contact, education, experience }
