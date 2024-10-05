import React from 'react'
import { Container } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandReactNative } from "react-icons/tb";






const Projects = () => {
  const projectData = [
    {
      imgSrc: "/chefmate-ss.png",
      title: "ChefMate",
      description:
        "A React-based, AI-driven recipe generator that simplifies meal planning by allowing users to upload pictures of ingredients. ChefMate uses Google Gemini AI for ingredient recognition and a Python backend to handle API calls to both Google Gemini AI and the Edamam API, delivering fast, personalized recipe suggestions. This combination resulted in a 40% boost in user engagement by providing real-time, tailored results based on user input and AI-detected ingredients.",
      projectLink: "https://chefmate.netlify.app/",
      githubLink: "https://github.com/mmogesdesigns/ChefMate-official",
      techStack: [
        <FaReact size={40} color="#61DBFB" />,
        <FaPython color="#306998" size={40} />,
      ],
    },
    {
      imgSrc: "/splitmates-ss.png",
      title: "SplitMates",
      description:
        "This weather app, built using vanilla JavaScript, allows users to retrieve accurate weather information for any country. It features real-time weather updates and forecasts for the coming days, providing users with both current conditions and future weather predictions. The app is designed to deliver fast and reliable data with minimal load times.",
      projectLink: "https://splitmates.netlify.app/",
      githubLink: "https://github.com/mmogesdesigns/SplitMates",
      techStack: [<FaReact size={40} color="#61DBFB" />],
    },
    {
      imgSrc: "/writely-ss.png",
      title: "Writely (Coming Soon)",
      description:
        "Writely is a blog posting platform built with React on the frontend, providing users a smooth interface to create, edit, and manage their blog content. The backend is powered by Supabase, which handles user authentication and stores all blog posts in a dedicated posts table. The platform ensures that every user’s content is securely managed and easily accessible.",
      githubLink: "https://github.com/mmogesdesigns/writely",
      techStack: [<FaReact size={40} color="#61DBFB" />],
    },
    {
      imgSrc: "/confessIt-ss.png",
      title: "ConfessIt (Coming Soon)",
      description:
        "This mobile app allows users to anonymously post their deepest, darkest secrets, creating a safe and confidential space for sharing without judgment. The frontend is built using React Native, ensuring a smooth and responsive user experience across both iOS and Android platforms. I collaborated closely with a backend developer to integrate a Django backend, which securely handles user submissions and stores the secrets in a database.",
      githubLink: "https://github.com/mmogesdesigns/ConfessIt",
      techStack: [<TbBrandReactNative size={40} color="#61DBFB" />],
    },
    {
      imgSrc: "/weather-app-ss.png",
      title: "Weather Application",
      description:
        "SplitMates is a user-friendly, fully responsive app designed to simplify bill-splitting. Built using React, the app ensures smooth interactivity through useState and useEffect for effective state management. CSS Grid, Flexbox, and media queries were implemented to create a responsive, mobile-first layout. Custom hooks streamline form handling, and the Crypto API generates unique IDs for consistent friend lists. This project applies modern web development practices to deliver a seamless experience across all devices.",
      projectLink: "https://marys-weather-application.netlify.app/",
      githubLink: "https://github.com/mmogesdesigns/weather-application",
      techStack: [<IoLogoJavascript size={40} color="#f0db4f" />],
    },
  ];
  
  return (
    <section>
      <Container>
        <h1 className="text-center my-4 text-decoration-underline">Projects</h1>
        {projectData.map((project,index) => (
          <ProjectCard 
          key={index}
          imgSrc={project.imgSrc}
          title={project.title}
          description={project.description}
          projectLink={project.projectLink}
          githubLink={project.githubLink}
          techStack={project.techStack}
          reverse={index % 2 !== 0}/>
        ))}
      
      </Container>
    </section>
  );
}

export default Projects
