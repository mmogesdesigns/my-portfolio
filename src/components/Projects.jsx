import React from 'react'
import { Container } from 'react-bootstrap';
import ProjectCard from './ProjectCard';


{/* <ProjectCard
  imgSrc="/chefmate-ss.png"
  title="ChefMate"
  description="jdkfsdjbfkadsjf hkadshfdahfadjhfadjgjbhadfjbdfsjhksdahjkdsafjhkdfs dhjsduhsd"
  projectLink="https://chefmate.netlify.app/"
/>
<ProjectCard
  imgSrc="/chefmate-ss.png"
  title="ChefMate"
  description="jdkfsdjbfkadsjf hkadshfdahfadjhfadjgjbhadfjbdfsjhksdahjkdsafjhkdfs dhjsduhsd"
  projectLink="https://chefmate.netlify.app/"
/>
<ProjectCard
  imgSrc="/chefmate-ss.png"
  title="ChefMate"
  description="jdkfsdjbfkadsjf hkadshfdahfadjhfadjgjbhadfjbdfsjhksdahjkdsafjhkdfs dhjsduhsd"
  projectLink="https://chefmate.netlify.app/"
/>
*/}

const Projects = () => {
  const projectData = [
    {imgSrc:"/chefmate-ss.png",
  title:"ChefMate",
  description:"jdkfsdjbfkadsjf hkadshfdahfadjhfadjgjbhadfjbdfsjhksdahjkdsafjhkdfs dhjsduhsd",
  projectLink:"https://chefmate.netlify.app/"},
    {imgSrc:"/chefmate-ss.png",
  title:"ChefMate",
  description:"jdkfsdjbfkadsjf hkadshfdahfadjhfadjgjbhadfjbdfsjhksdahjkdsafjhkdfs dhjsduhsd",
  projectLink:"https://chefmate.netlify.app/"},
    {imgSrc:"/chefmate-ss.png",
  title:"ChefMate",
  description:"jdkfsdjbfkadsjf hkadshfdahfadjhfadjgjbhadfjbdfsjhksdahjkdsafjhkdfs dhjsduhsd",
  projectLink:"https://chefmate.netlify.app/"},
    {imgSrc:"/chefmate-ss.png",
  title:"ChefMate",
  description:"jdkfsdjbfkadsjf hkadshfdahfadjhfadjgjbhadfjbdfsjhksdahjkdsafjhkdfs dhjsduhsd",
  projectLink:"https://chefmate.netlify.app/"},
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
          reverse={index % 2 !== 0}/>
        ))}
      
      </Container>
    </section>
  );
}

export default Projects
