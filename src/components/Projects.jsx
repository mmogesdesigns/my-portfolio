import React from 'react'
import { Container } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';




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
      imgSrc: "/confessIt-ss.png",
      title: "ConfessIt",
      description:
        "jdkfsdjbfkadsjf hkadshfdahfadjhfadjgjbhadfjbdfsjhksdahjkdsafjhkdfs dhjsduhsd",
      projectLink: "https://chefmate.netlify.app/",
      techStack: [<FaReact size={40} />, <FaNodeJs size={40} />],
    },
    {
      imgSrc: "/chefmate-ss.png",
      title: "FindMeAJob.js",
      description:
        "jdkfsdjbfkadsjf hkadshfdahfadjhfadjgjbhadfjbdfsjhksdahjkdsafjhkdfs dhjsduhsd",
      projectLink: "https://chefmate.netlify.app/",
      techStack: [<FaReact size={40} />, <FaNodeJs size={40} />],
    },
    {
      imgSrc: "/weather-app-ss.png",
      title: "Weather Application",
      description:
        "jdkfsdjbfkadsjf hkadshfdahfadjhfadjgjbhadfjbdfsjhksdahjkdsafjhkdfs dhjsduhsd",
      projectLink: "https://www.google.com/",
      techStack: [<FaReact size={40} />, <FaNodeJs size={40} />],
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
