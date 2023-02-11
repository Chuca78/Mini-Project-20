import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../App.css";

export default function Contact() {
  return (
    <div className="container">
      <Jumbotron fluid>
        <Container className="text-center">
          <div className="p-md-5">
            <h1>Contact Me</h1>
          </div>
        </Container>
      </Jumbotron>

      <Container fluid className="shadow bg-light mb-5">
        <Container className="p-4">
          <Row>
            <Col>
              <Container>
                <h4 style={{ color: "#D6CCC2" }}>Contact Info</h4>
                <p>
                  <a href="mailto:tfleck78@gmail.com">
                    <span className="pr-3">
                      <FaEnvelope />
                    </span>
                    tfleck78@gmail.com
                  </a>
                </p>

                <p>
                  <a href="https://github.com/Chuca78" rel="noopener">
                    <span className="pr-3">
                      <FaGithub />
                    </span>
                    Chuca78
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/timothyfleck/"
                    rel="noopener"
                  >
                    <span className="pr-3">
                      <FaLinkedin />
                    </span>
                    timothy-fleck
                  </a>
                </p>
              </Container>
            </Col>

            <Col sm={12} md={6} lg={8} className="pt-sm-4 pt-lg-0">
              <Container>
                <h4 style={{ color: "#D6CCC2" }}>Send a Message</h4>
                <Form id="contactForm">
                  <Form.Group controlId="name">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      required
                      name="name"
                      placeholder="Your Name"
                    />
                  </Form.Group>

                  <Form.Group controlId="email">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                      required
                      name="email"
                      type="email"
                      placeholder="name@email.com"
                    />
                  </Form.Group>

                  <Form.Group controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      required
                      name="subject"
                      placeholder="Subject"
                    />
                  </Form.Group>

                  <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      required
                      name="message"
                      as="textarea"
                      rows="5"
                      placeholder="Message"
                    />
                  </Form.Group>

                  {<p className="form-message"></p>}

                  <Button type="submit" className="btn">
                    Submit
                  </Button>
                </Form>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
