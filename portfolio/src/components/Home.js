import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UTLogo from "../assets/images/UT_Austin.png";
import ERAULogo from "../assets/images/ERAU.png";
import KirkwoodLogo from "../assets/images/Kirkwood.jpg";
import "../App.css";

export default function Home() {
  return (
    <div className="container">
      <Jumbotron fluid>
        <Container className="text-center">
          <div className="p-md-5">
            <h1>Timothy Fleck</h1>
          </div>
          <div className="row abstract-back "></div>
        </Container>
      </Jumbotron>

      <Container fluid className="shadow bg-light mb-5">
        <Container className="p-4">
          <Row>
            <Col>
              <Container>
                <p className="p-about">
                  Software Engineer with a demonstrated history of working on
                  production web and mobile applications. Deep understanding and
                  technical expertise in Computer Science fundamentals, CSS,
                  HTML, Javascript, ReactJS, NodeJS, MongoDB, and other
                  technologies.
                </p>
                <div className="card-body">
                  <h2 className="edu">Education</h2>
                  <br />

                  <div className="grid-container-profile">
                    <div className="grid-item">
                      <h4 className="title-uni">University Of Texas, Austin</h4>
                      <div className="title-concentration">
                        Full Stack Web Development
                      </div>
                    </div>

                    <div className="grid-item">
                      <a href="https://www.utexas.edu/" rel="noopener">
                        <img
                          className="university-logo"
                          src={UTLogo}
                          alt="UT Austin logo"
                        />
                      </a>
                    </div>

                    <div className="grid-item">
                      <h4 className="title-uni">
                        Embry Riddle Aeronautical University
                      </h4>
                      <div className="title-concentration">
                        Bachelor of Science in Project Management
                      </div>
                    </div>

                    <div className="grid-item">
                      <a href="https://erau.edu/" rel="noopener">
                        <img
                          className="university-logo"
                          src={ERAULogo}
                          alt="Embry Riddle logo"
                        />
                      </a>
                    </div>

                    <div className="grid-item">
                      <h4 className="title-uni">Kirkwood Community College</h4>
                      <div className="title-concentration">
                        Associates of Science in Fire Science Management
                      </div>
                    </div>

                    <div className="grid-item">
                      <a href="https://www.kirkwood.edu/" rel="noopener">
                        <img
                          className="university-logo"
                          src={KirkwoodLogo}
                          alt="Kirkwood Community College logo"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
