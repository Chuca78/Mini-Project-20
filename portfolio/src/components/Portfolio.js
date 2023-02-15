import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import portfolio from "../data";
import ProjectCards from "../components/project";
import "../App.css";

const Portfolio = () => {
  return (
    <div className="container">
      <Jumbotron fluid>
        <Container className="text-center">
          <div className="p-md-5">
            <h1>Portfolio</h1>
          </div>
        </Container>
      </Jumbotron>

      <Container fluid className="content">
        <Container className="p-4">
          <Row>
            <Col>
              <Container>
                <h3
                  style={{
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <img
                    src="https://img.icons8.com/color/48/000000/github--v1.png"
                    alt="Repository"
                  />{" "}
                  Github Repository Link | Deployed Webpage Link
                  <img
                    src="https://img.icons8.com/color/48/000000/monitor.png"
                    alt="Deployed Site"
                    id="project-icon"
                  />
                </h3>
                <div className="modal-footer" />
                <div className="grid-container vertical-line">
                  {portfolio.map((project) => (
                    <ProjectCards
                      id={project.id}
                      key={project.id}
                      image={project.image}
                      name={project.name}
                      github={project.github}
                      deploy={project.deploy}
                    />
                  ))}
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Portfolio;
