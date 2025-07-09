const portfolio = [

  {
  id: 0,
  projectName: "Proxy Web Platform",
  url: "#",
  image: "projects/prj/proxy-web.png", // Update if needed
  projectDetail: `A full-featured proxy web application that allows users to block or disable the publication of specific websites. The system also anonymizes the client-side IP address after each site visit, enhancing privacy. It includes an admin panel with a dashboard and user statistics. The backend is built with REST APIs documented via Swagger, and the entire application is deployed behind an Nginx reverse proxy to unify frontend and backend under the same domain.`,
  technologiesUsed: [
    { tech: "Next.js" },
    { tech: "Node.js" },
    { tech: "Express.js" },
    { tech: "MongoDB" },
    { tech: "REST API" },
    { tech: "Swagger" },
    { tech: "Nginx (Reverse Proxy)" },
    { tech: "JavaScript" }
  ]
},

    {
  id: 0,
  projectName: "9rayti.com Migration",
  url: "https://www.9rayti.com",
  image: "projects/prj/9rayti.com.png",
  projectDetail: "Complete migration of the 9rayti.com platform from Symfony 2 to a modern Java and React-based architecture. WordPress was integrated for enhanced content management capabilities.",
  technologiesUsed: [
    { tech: "Java" },
    { tech: "ReactJS" },
    { tech: "WordPress" },
    { tech: "PostgreSQL" },
    { tech: "Python" }
  ]
},

    {
  id: 0,
  projectName: "SecureSoft-Analytic",
  url: "#",
  image: "projects/prj/softsecure analytic.jpg",
  projectDetail: `A modern cybersecurity analytics platform offering a fresh perspective on Governance, Risk, and Compliance (GRC). SecureSoft-Analytic serves as a central hub for interlinking cybersecurity concepts, enabling reuse and customization with an API-first approach and strong automation capabilities.`,
  technologiesUsed: [
    { tech: "SvelteKit" },
    { tech: "Vite" },
    { tech: "Django" },
    { tech: "Gunicorn" },
    { tech: "PostgreSQL" },
    { tech: "SQLite" }
  ]
},

    {
  id: 0,
  projectName: "Smart Center - School Management",
  url: "#",
  image: "projects/prj/centersmart.png",
  projectDetail: "Web application for school management using Next.js 14, Prisma, and MySQL. Manages users, students, classes, and payments.",
  technologiesUsed: [
    { tech: "Next.js 14" },
    { tech: "Prisma" },
    { tech: "MySQL" },
    { tech: "TailwindCSS" },
      { tech: "Ant Design" },
      { tech: "Java Script" },
      { tech: "Type Script" },
    { tech: "JWT Auth" }
  ]
},

    {
  id: 0,
  projectName: "Omarssan Water",
  url: "#",
  image: "projects/prj/gestion de stock.png",
  projectDetail: `Developed an activity management web application for Omarssan Water, aimed at streamlining and organizing daily operations. The platform facilitates task tracking, reporting, and operational oversight with a user-friendly interface and robust backend services.`,
  technologiesUsed: [
    { tech: "ReactJS" },
    { tech: "Spring Boot" },
    { tech: "Java" },
    { tech: "Rest API's" },
    { tech: "Bootstrap" },
    { tech: "MySQL" }
  ]
} ,
    {
  id: 0,
  projectName: "PC Engine",
  url: "#",
  image: "projects/prj/e-commerce angular spring.png",
  projectDetail: `Developed a modern e-commerce web application called PC Engine, dedicated to selling custom-built PCs. The platform offers product browsing, dynamic filtering, a shopping cart system, and secure order management, delivering a seamless user experience.`,
  technologiesUsed: [
    { tech: "Angular" },
    { tech: "Spring Boot" },
    { tech: "Rest API's" },
    { tech: "Bootstrap" },
    { tech: "MySQL" }
  ]
},
    {
  id: 0,
  projectName: "Inventory Management System",
  url: "#",
  image: "projects/prj/management investisement.png",
  projectDetail: `A full-featured inventory management web application built to streamline product tracking, stock control, and supplier management. The system allows users to manage items, monitor stock levels in real time, generate reports, and handle user roles with secure authentication.`,
  technologiesUsed: [
    { tech: "Laravel" },
    { tech: "PHP" },
    { tech: "Vite" },
    {tech: "tailwind css"},
    { tech: "MySQL" }
  ]
},

    {
  id: 0,
  projectName: "Manga Website",
  url: "#",
  image: "projects/prj/site manga.png",
  projectDetail: `A visually engaging front-end manga website designed to display manga collections, chapters, and character details. The UI is optimized for a smooth user experience, allowing users to browse and explore their favorite manga series with ease.`,
  technologiesUsed: [
    { tech: "ReactJS" },
    { tech: "TailwindCSS" }
  ]
},

    {
  id: 7,
  projectName: "zdGPT",
  url: "#",
  image: "projects/prj/zdGPT.png",
  projectDetail: `zdGPT is an AI-powered chatbot mobile application developed using React Native. It integrates with Google's Gemini AI API to provide intelligent and context-aware responses. The app offers a smooth conversational experience, designed to assist users in various domains such as productivity, general knowledge, and personal assistance.`,
  technologiesUsed: [
    { tech: "React Native" },
    { tech: "Gemini AI API" }
  ]
},

]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
