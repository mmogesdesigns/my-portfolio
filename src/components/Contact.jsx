import React from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

  const [state, handleSubmit] = useForm("xzzpwplv");

  if (state.succeeded) {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <p
              className="mt-5 text-center"
              style={{ fontSize: "1.25rem" }}
            >
              Thank you for reaching out! I'll be in touch soon.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }


  return (
    <section className="contact-section">
      <Container>
        <Row className="justify-content-center align-items-center style={{ minHeight: '80vh' ">
          <Col md={10} lg={8}>
            <h1 className="text-center text-decoration-underline my-4">
              Contact Me
            </h1>
            <Form onSubmit={handleSubmit} className="p-4 shadow-lg rounded">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder=" Enter your name"
                  required
                  className="form-input"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder=" Enter your email"
                  required
                  className="form-input"
                />

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message:</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Your message"
                  required
                  className="form-input"
                />

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </Form.Group>
              <div className="text-center">
                <button
                  type="submit"
                  className="start-btn "
                  disabled={state.submitting}
                >
                  Send Message
                </button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact
