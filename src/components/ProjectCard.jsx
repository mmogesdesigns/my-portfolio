import React from 'react';
import {Row, Col} from 'react-bootstrap';

const ProjectCard = ({imgSrc, title, description, projectLink, }) => {
  return (
    <Row className="align-items-center my-5">
      <Col md={6} className='mb-4 mb-md-0'>
        <img src={imgSrc} alt={title} className="img-fluid rounded" />
      </Col>
      <Col md={6}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          Live Demo{" "}
        </a>
      </Col>
    </Row>
  );
}

export default ProjectCard
