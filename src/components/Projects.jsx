import React from 'react'
import { Container } from 'react-bootstrap';
import ProjectCard from './ProjectCard';


const Projects = () => {
  return (
    <section>
      <Container>
        <h1 className="text-center my-4 text-decoration-underline">Projects</h1>
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
        <ProjectCard
          imgSrc="/chefmate-ss.png"
          title="ChefMate"
          description="jdkfsdjbfkadsjf hkadshfdahfadjhfadjgjbhadfjbdfsjhksdahjkdsafjhkdfs dhjsduhsd"
          projectLink="https://chefmate.netlify.app/"
        />
      </Container>
    </section>
  );
}

export default Projects
