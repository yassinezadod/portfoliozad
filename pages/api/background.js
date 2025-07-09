const background = [
  {
    eduCards: [
       {
    id: 0,
    title: 'UM6P - MDA',
    degree: 'Certificat MDA Développeur Full Stack',
    detail: 'Certifying program by Morocco Digital Academy, focusing on full stack development with skills in React.js, Java, Spring Boot, Python, and AI fundamentals, delivered by top universities via Coursera.',
    year: 'Apr 2025 - ongoing'
  },
      {
        id: 1,
        title: 'Simplon Maghreb',
        degree: 'Full Stack Web and Mobile Development Training',
        detail: 'Intensive bootcamp covering modern frontend and backend web technologies.',
        year: 'Apr 2024 - Nov 2024'
      },
      {
        id: 2,
        title: 'Polytechnique Agadir - UNIVERSIAPOLIS',
        degree: 'Master’s in Software Engineering',
        detail: 'Advanced training in software engineering with a focus on full stack development.',
        year: 'Oct 2022 - Jul 2024'
      },
      {
        id: 3,
        title: 'Ibn Zohr University - Agadir',
        degree: 'Bachelor’s in Mathematics and Applications',
        detail: 'Focused on applied mathematics and its relation to computer science.',
        year: 'Oct 2017 - Sep 2021'
      },
      {
        id: 4,
        title: 'Lycée Mohamed Derfoufi',
        degree: 'High School Diploma in Mathematical Sciences',
        detail: 'Completed secondary education specializing in mathematical sciences.',
        year: 'Sep 2016 - Jul 2017'
      }
    ]
  },
  {
    expCards: [
      {
        id: 0,
        title: 'Coding Expert / Outlier AI',
        role: 'AI Trainer',
        url: 'https://outlier.ai/',
        desc: 'Supporting AI model training and helping developers improve coding quality with AI assistance.',
        year: 'Mar 2025 - Present',
        location: 'Remote'
      },
       {
        id: 1,
        title: 'Freelancer - SecureSoft-Analytic application',
        role: 'Frontend Developer',
        url: '',
        desc: `Enhanced the frontend of a cybersecurity and GRC management platform. Focused on improving the user interface and experience using modern frontend technologies. Collaborated with backend developers to ensure seamless integration and optimal performance.`,
        year: 'Mar 2024 - May 2025',
        location: 'Rabat, Morocco'
      },
      {
        id: 2,
        title: 'Education Media Company',
        role: 'Full Stack Developer Intern',
        url: 'https://9rayti.com',
        desc: 'Modernized and migrated the 9rayti.com platform using Java, React, and PostgreSQL.',
        year: 'Feb 2024 - Jun 2024',
        location: 'Morocco'
      },
      {
        id: 2,
        title: 'Omarssan Water',
        role: 'Frontend Developer  Intern',
        url: '',
        desc: 'Developed an activity management web application using React.js and Spring Boot.',
        year: 'Jun 2023 - Aug 2023',
        location: 'Morocco'
      },
      {
        id: 3,
        title: 'RIDIMMO',
        role: 'Java / React Developer  Intern',
        url: '',
        desc: 'Developed and optimized a comprehensive real estate management platform using React.js for the frontend and Spring Boot for the backend, ensuring seamless integration, scalability, and a user-friendly interface to manage properties, transactions, and client interactions efficiently',
        year: 'Jul 2022 - Aug 2022',
        location: 'Morocco'
      }
    ]
  }
];

export default function handler(req, res) {
  res.status(200).json(background);
}
