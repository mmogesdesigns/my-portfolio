import React, { useState } from 'react'
import { Container, Row, Col,Spinner } from 'react-bootstrap'
import { IoMdDownload } from "react-icons/io";

const Resume = () => {
  const [loading, setLoading] = useState(true);
  return (
    <section>
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            
              <h1 className="my-4" style={{ textDecoration: "underline" }}>
              My Resume
            </h1>
            <a
              href="/resume.pdf" // Replace this with your actual file path
              download="Mariamawit_Resume.pdf"
              className="resume-download">
              <IoMdDownload/>
              </a>
            
              <div className="iframe-container">
              <iframe
              className='resume-iframe'
              src="https://docs.google.com/document/d/1CE-LGf_rtbCKNfWRYjVUmTCIlG3mT9VmROms9Cdx9xg/preview">
            </iframe>
            </div>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
}


export default Resume
