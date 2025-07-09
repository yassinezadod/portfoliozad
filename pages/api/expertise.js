const expertise = [
    {
            id: 0,
            title: 'Full Stack Development (MERN)',
            desc: 'I specialize in Full Stack Development using the MERN stack (MongoDB, Express.js, React.js, Node.js). I build robust backend systems, responsive user interfaces, and manage APIs and databases efficiently.',
        },
    {
            id: 1,
            title: 'Java (Spring Boot & JEE)',
            desc: 'I have experience working with Java-based technologies such as Spring Boot and JEE. I develop backend systems with a focus on scalability, maintainability, and performance.',
        },
    {
        id: 2,
        title: 'UI/UX Design & Frontend Engineering',
        desc: 'I have strong UI/UX design skills and frontend expertise using React.js, Tailwind CSS, and design tools like Figma and Adobe XD. I focus on creating user-friendly, accessible, and modern web interfaces.',
    },
     {
            id: 3,
            title: 'UI/UX Design',
            desc: 'I have strong UI/UX design skills and use tools like Figma and Adobe XD. I focus on creating user-friendly and accessible designs that meet user needs.',
        },
     {
            id: 4,
            title: 'Frontend Engineering (React.js & Tailwind CSS)',
            desc: 'I specialize in frontend development using React.js, Tailwind CSS, and other modern frontend technologies to build responsive and performant web applications.',
        },
    {
        id: 5,
         title: 'Version Control (Git & GitHub)',
            desc: 'I use Git for version control, managing branches, commits, and collaborating with teams. GitHub is used for project hosting, code reviews, and collaboration.',
    },

     {
            id: 6,
            title: 'Deployment & CI/CD',
            desc: 'I am familiar with Docker and CI/CD practices to automate deployment pipelines, ensuring reliable and smooth releases with minimal downtime.',
        },

         {
            id: 7,
            title: 'Software Development Lifecycle',
            desc: 'I understand the full software development lifecycle (SDLC) from planning, development, testing, deployment, and maintenance.',
        },
         {
            id: 7,
            title: 'Technical Training & Workshops',
            desc: 'I can conduct technical training sessions and workshops on web development, software architecture, and best practices to help teams improve their skills.',
        },
         {
            id: 8,
            title: 'AI Model Training (OpenAI, Google, Meta)',
            desc: 'I have hands-on experience training and fine-tuning AI models using platforms and tools from OpenAI, Google, and Meta. I specialize in prompt engineering, model evaluation, and real-world applications of AI systems.',
        },

         {
        id: 9,
        title: 'Mobile Development (React Native & Flutter)',
        desc: 'I specialize in mobile development using React Native and Flutter, building cross-platform mobile applications with a smooth user experience on both iOS and Android.',
    },

    {
        id:9,
        title: 'Application Transformation with Electron.js',
        desc: 'I have experience transforming web applications into desktop applications using Electron.js, allowing them to run on multiple platforms (Windows, macOS, Linux) while maintaining native-like performance and experience.',
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
