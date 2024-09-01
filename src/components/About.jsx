import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
  return (
    <section className="about-me-section">
      <Container>
        <Col lg={8} className="justify-content-center mx-auto">
          <Row className="justify-content-center">
            <h3 className="text-center">About Me</h3>
          </Row>
          <Row className="justify-content-center">
            <p>
              I'm a passionate frontend developer with experience in creating
              dynamic and user-friendly web applications. I have a strong
              background in JavaScript, React, and Bootstrap.
            </p>
          </Row>
          <Row className="justify-content-center">
            <p>
              In my free time, I enjoy contributing to open-source projects,
              learning new technologies, and participating in developer
              communities.
            </p>
          </Row>
          <Row className="justify-content-center">
            <div>
              <h4 className="text-center">Tech Stacks</h4>
              <div className="d-flex justify-content-evenly">
                <img src="" alt="JavaScript" />
                <img src="" alt="React" />
                <img src="" alt="React Native" />
                <img src="" alt="Python" />
                <img src="" alt="SQL" />
                <img src="" alt="Git" />
              </div>
            </div>
          </Row>
        </Col>
      </Container>
    </section>
  );
}

export default About
