import { Github, Linkedin, Mail, FileText, Terminal, Code2, Cpu, Globe } from "lucide-react";

export const PROFILE = {
    name: "Aastha Muskan",
    title: "Full-Stack Developer",
    email: "aasthamuskan9430@gmail.com",
    phone: "+91 9110156413",
    location: "Punjab, India",
    bio: "Passionate Full-Stack Developer proficient in MERN stack and C++. Dedicated to building efficient, user-centric web applications.",
    about: {
        text1: "I am a B.Tech Computer Science student at Lovely Professional University with a strong foundation in software development. My expertise spans across the MERN stack (MongoDB, Express, React, Node.js) and C++ programming.",
        text2: "I actively engage in problem-solving and have developed robust web applications ranging from language learning platforms to e-commerce websites. I am adaptable, organized, and committed to continuous learning.",
        stats: [
            { label: "LeetCode Rank", value: "Top 4%" },
            { label: "CGPA", value: "7.6" },
            { label: "Projects", value: "Multiple" }
        ]
    },
    socials: [
        { name: "Email", icon: Mail, href: "mailto:aasthamuskan9430@gmail.com" },
        { name: "GitHub", icon: Github, href: "https://github.com/Aastha-Muskan" },
        { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/Aastha-Muskan2004/" },
        { name: "Resume", icon: FileText, href: "https://docs.google.com/document/d/1T5RzTobWN5nMq0xV8tFFi6lVqncOThgd/edit?usp=sharing" }
    ],
    image: "/profile.jpg" // Add your profile picture to the public folder
};

export const SKILLS = {
    technical: [
        { name: "C++", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
        { name: "JavaScript", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "React.js", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Node.js / Express", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "MongoDB", level: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "HTML/CSS", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "Python", level: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "Tailwind CSS", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" }
    ],
    professional: [
        { name: "Adaptability", level: 90, image: "/trait_resilient.png" },
        { name: "Time Management", level: 85, image: "/trait_methodical.png" },
        { name: "Problem Solving", level: 90, image: "/trait_efficiency.png" },
        { name: "Team Collaboration", level: 85, image: "/trait_amiable.png" }
    ],
    tools: [
        { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
        { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
        { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" }
    ]
};

export const PROJECTS = [
    {
        title: "Language Learning Platform",
        description: "Engineered a full-stack platform using the MERN stack with secure user authentication, lesson tracking, real-time Speech Recognition (STT), and Text-to-Speech (TTS) integration for pronunciation feedback.",
        tags: ["MongoDB", "Express", "React.js", "Node.js", "Web Speech API"],
        link: "#",
        github: "#",
        featured: true,
        image: "/project-lang.png"
    },
    {
        title: "Techies Wardrobe - E-Commerce",
        description: "Designed a scalable clothing rental and e-commerce platform. Implemented secure payment gateways and optimized mobile-first layouts for improved cross-device accessibility and user experience.",
        tags: ["HTML", "CSS", "Tailwind CSS", "PHP", "MongoDB", "JavaScript"],
        link: "#",
        github: "#",
        featured: true,
        image: "/project-cipher.png"
    }
];

export const EXPERIENCE = [
    {
        institution: "Kestone Integrated Marketing Services",
        degree: "Web Developer Intern",
        period: "May 2025 - Jul 2025",
        desc: "Developed and optimized web modules using HTML, CSS, and structured UI components, delivering pixel-consistent layouts aligned with organizational branding. Enhanced accessibility and user navigation flows while demonstrating strong discipline, sincerity, and rapid learning in a fast-paced execution environment. Implemented responsive design principles to ensure web modules performed seamlessly across various devices and screen sizes, improving the overall mobile user experience.",
        tags: ["HTML", "CSS", "Responsive UI", "Git", "Cross-functional"],
        certificateLink: "https://drive.google.com/open?id=1aIbueZfuikrbIazmtSWgdOh2n0aZxhnt"
    }
];

export const SUMMER_TRAINING = [
    {
        institution: "CipherSchools (Ed-tech Company)",
        degree: "Summer Training",
        period: "Jun 2025 - Jul 2025",
        desc: "Developed a robust Full-Stack Note Application using MERN. Gained hands-on experience in debugging, code optimization, and integrating third-party APIs.",
        tags: ["MERN Stack", "Industrial Training", "Full Stack"],
        certificateLink: "https://drive.google.com/open?id=1fJAOUFLtoQdq896shTt5HZ8bxuaDsmpP"
    }
];

export const EDUCATION = [
    {
        institution: "Lovely Professional University",
        degree: "B.Tech in Computer Science and Engineering",
        period: "Aug 2023 - Present",
        desc: "Current CGPA: 7.6. Focusing on Data Structures, Algorithms, and Web Development.",
        grade: "7.6 CGPA",
        tags: ["Computer Science", "Engineering"]
    },
    {
        institution: "Asian Public School",
        degree: "Intermediate",
        period: "Apr 2022 - Mar 2023",
        desc: "Completed with 81% percentage.",
        grade: "81%"
    },
    {
        institution: "Paramount Acadaemy",
        degree: "Matriculation",
        period: "Apr 2020 - Mar 2021",
        desc: "Completed with 78% percentage.",
        grade: "78%"
    }
];

export const ACHIEVEMENTS = [
    {
        title: "LeetCode 200 Days Badge",
        desc: "Achieved the 200 days badge on LeetCode for consistent problem solving.",
        date: "Dec 2025",
        icon: Terminal,
        link: "https://leetcode.com/u/Aastha-Muskan2004/"
    },
    {
        title: "Top 4% on LeetCode",
        desc: "Ranked in the top 4% globally on LeetCode.",
        date: "Dec 2025",
        icon: Code2,
        link: "https://leetcode.com/u/Aastha-Muskan2004/"
    },
    {
        title: "Consistent Problem Solver",
        desc: "Solved 300+ algorithmic problems across arrays, recursion, and dynamic programming.",
        date: "2025",
        icon: Cpu,
        link: "https://leetcode.com/u/Aastha-Muskan2004/"
    }
];

export const CERTIFICATES = [
    { name: "Cloud Computing (NPTEL)", link: "https://drive.google.com/open?id=1V_yPjU-WRzu41w23cImsAeGGFW-yn-ll", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" },
    { name: "Master Generative AI & Tools (Udemy)", link: "https://drive.google.com/open?id=19GlSVco26WVfqBm-UDlZ4p_0weXWq-NA", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800" },
    { name: "ChatGPT-4 Prompt Engineering (Part 1)", link: "https://drive.google.com/open?id=1vnVK9b7IUYA4ia0uGcScbWeOQiBmckvp", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" },
    { name: "ChatGPT-4 Prompt Engineering (Part 2)", link: "https://drive.google.com/open?id=1MOkzU-6es3sG8e02Ow9YP9blAoRlJD1l", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" },
    { name: "Build Generative AI Apps (Infosys)", link: "https://drive.google.com/open?id=14DFu_PAPIJAsNZkrktSC-iCQU_87oN5Q", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" },
    { name: "Build Generative AI Apps (Udemy)", link: "https://drive.google.com/open?id=1XcyvRqyKH2lSqtJYHfmUZxVp_NkAuJIM", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" }
];

