import React from 'react';
import {Row, Col} from 'react-bootstrap';

const ProjectCard = ({imgSrc, title, description, projectLink,reverse,githubLink, techStack }) => {
  return (
    <Row
      className={`align-items-stretch my-5 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <Col md={6} className="mb-4 mb-md-0">
        <div className="img-container">
          <img
            src={imgSrc}
            alt={title}
            className="img-fluid project-img rounded"
          />
        </div>
      </Col>
      <Col md={6}>
        <h3>{title}</h3>
        <p className="projects-p mb-4">{description}</p>
        {/* Tech stack icons */}
        <div className="tech-stack-icons">
          {techStack.map((icon,index) => (
            <div key={index} className="grid-item mb-4">
                {icon}
            </div>
          ))}
        </div>
        <div className="project-links">
          <a href={projectLink} target="_blank" rel="noopener noreferrer">
            Live Demo{" "}
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            Github Repo{" "}
          </a>
        </div>

      </Col>
    </Row>
  );
}

export default ProjectCard
