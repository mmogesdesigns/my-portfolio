import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Resume = () => {
  
  return (
    <section>
      <Container>
        <Row className='justify-content-center'>
          <Col className='text-center'>
          <h1 className='my-4' style={{textDecoration:'underline'}}>My Resume</h1>
          <a
            href='/resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            >
              <img src='/pdf-icon.png' alt='Download Resume' style={{cursor:'pointer'}}/>
            </a>
              <p className='mt-2'>View/download resume</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}


export default Resume
