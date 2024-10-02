import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import { FaReact, FaPython, FaBootstrap } from "react-icons/fa";
import {  TbBrandReactNative } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiRedux, SiMysql } from "react-icons/si";


const About = () => {
  return (
    <section className="about-me-section">
      <Container>
        <Col lg={8} className="justify-content-center mx-auto">
          <Row className="justify-content-center">
            <h1 className="text-center my-4 text-decoration-underline">
              About Me
            </h1>
          </Row>
          <Row className="justify-content-center about-p">
            <p>
              I'm Mariamawit, a passionate frontend developer who loves crafting
              seamless, user-friendly experiences with React. While I’ve had the
              opportunity to work across the stack and build full-fledged
              applications, my heart belongs to the frontend, where I get to
              bring ideas to life. Coding for me is like solving a puzzle—each
              piece fitting perfectly to form a complete picture. It’s the
              challenge, the creativity, and the satisfaction of seeing things
              click into place that keeps me hooked.
            </p>
          </Row>
          <Row className="justify-content-center about-p mb-5">
            <p>
              Outside of coding, I’m a huge fan of travel and adventure. I’ve
              had the privilege of living in three countries and exploring over
              13 so far. My ultimate goal? To visit all 195 countries! When I’m
              not planning my next trip, you can usually find me staying
              active—whether it’s hiking, boxing, hitting the gym, or practicing
              yoga. I’m also really big on personal development, and I truly
              believe in the power of small, consistent progress. It’s all about
              moving forward, no matter how small the steps.
            </p>
          </Row>
          <Row className="justify-content-center">
            <div>
              <h3 className="text-center text-decoration-underline upper my-4">
                Tech Stacks
              </h3>

              <ul className="tech-stack-list grid-container">
                <li className="grid-item">
                  <IoLogoJavascript size={50} color="#f0db4f" />
                  <span>JavaScript</span>
                </li>
                <li className="grid-item">
                  <FaPython size={50} color="#306998" />
                  <span>Python</span>
                </li>
                <li className="grid-item">
                  <SiMysql size={50} color="#00758F" />
                  <span>MySQL</span>
                </li>
              </ul>
            </div>
          </Row>

          {/* =============Frameworks and libraries===========  */}

          <Row className="justify-content-center mt-5">
            <div>
              <h3 className="text-center text-decoration-underline upper my-4">
                Frameworks & Libraries
              </h3>
              <ul className="tech-stack-list grid-container mb-5">
                <li className="grid-item">
                  <FaReact size={50} color="#61DBFB" />
                  <span>React</span>
                </li>
                <li className="grid-item">
                  <TbBrandReactNative size={50} color="#61DBFB" />
                  <span>React Native</span>
                </li>
                <li className="grid-item">
                  <SiRedux size={50} color="#764ABC" />
                  <span>Redux</span>
                </li>
                <li className="grid-item">
                  <FaBootstrap size={50} color="#7952b3" />
                  <span>Bootstrap</span>
                </li>
                <li className="grid-item">
                  <SiTailwindcss size={50} color="#38B2AC" />
                  <span>Tailwind CSS</span>
                </li>
                <li className="grid-item">
                  <img
                    src="/material-ui-icon.png"
                    alt="Material UI"
                    width={50}
                    height={50}
                  />
                  <span>Material UI</span>
                </li>
              </ul>
            </div>
          </Row>
        </Col>
      </Container>
    </section>
  );
}

export default About
