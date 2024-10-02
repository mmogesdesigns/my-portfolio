import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from '../assets/logo.png';
import { FaGithub, FaLinkedin } from "react-icons/fa";

import '../App.css';


const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavItemToggle = ()=>{
    setExpanded(false);
  };

  return (
    <header>
      <Navbar expand="lg" className=" nav-bar" expanded={expanded}>
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : true)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey="/home" variant="underline">
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/projects"
                  eventKey="/projects"
                  onClick={handleNavItemToggle}
                >
                  Projects
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/about"
                  eventKey="/about"
                  onClick={handleNavItemToggle}
                >
                  About
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/resume"
                  eventKey="/resume"
                  onClick={handleNavItemToggle}
                >
                  Resume
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  eventKey="/contact"
                  onClick={handleNavItemToggle}
                >
                  Contact
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="https://github.com/mmogesdesigns"
                  target="_blank"
                  rel="noopener noreferrer"
                  eventKey="/contact"
                  onClick={handleNavItemToggle}
                >
                  <FaGithub size={20} color="#000" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="https://www.linkedin.com/in/mariamawit-moges/"
                  target="_blank"
                  rel="noopener noreferrer"
                  eventKey="/contact"
                  onClick={handleNavItemToggle}
                >
                  <FaLinkedin color="#000" size={20} />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header
