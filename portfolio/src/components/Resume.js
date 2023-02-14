import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Logo from "../assets/images/logo.png";
import JqueryLogo from "../assets/images/jquery-logo.png";
import BootstrapLogo from "../assets/images/bootstrap-logo.png";
import MernLogo from "../assets/images/mern-logo.png";
import WebpackLogo from "../assets/images/webpack-logo.png";
import HandlebarsLogo from "../assets/images/handlebars-logo.png";
import SqlLogo from "../assets/images/sql-logo.png";
import MongoLogo from "../assets/images/mongodb-logo.png";
import Heroku from "../assets/images/heroku-logo.png";
import ReactLogo from "../assets/images/React-logo.png";
import "../App.css";

const Resume = () => {
  return (
    <div className="container">
      <Jumbotron fluid>
        <Container className="text-center">
          <div className="p-md-5">
            <h1>
              Download Resume:{" "}
              <a href="https://github.com/Chuca78/React-Portfolio/blob/main/portfolio/src/assets/Timothy%20Fleck%20Resume.pdf">
                Timothy Fleck
              </a>
            </h1>
          </div>
        </Container>
      </Jumbotron>

      <Container fluid className="content">
        <Container className="p-4">
          <div className="modal-footer" />
          <div className="card-body">
            <div className="row">
              <h4
                className="code"
                style={{
                  // justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Skills
              </h4>
            </div>
          </div>
          <div className="modal-footer" />
          <div className="card-body">
            <div className="grid-container-skills">
              <div className="grid-item-skills">
                <p className="p-about">Object Oriented Programming</p>
              </div>
              <div className="grid-item-skills">
                <p className="p-about">Process Improvement</p>
              </div>
              <div className="grid-item-skills">
                <p className="p-about">Change Management</p>
              </div>
              <div className="grid-item-skills">
                <p className="p-about">Analytics</p>
              </div>
              <div className="grid-item-skills">
                <p className="p-about">Algorithms</p>
              </div>
              <div className="grid-item-skills">
                <p className="p-about">Data Structures</p>
              </div>
              <div className="grid-item-skills">
                <p className="p-about">UI/UX</p>
              </div>
              <div className="grid-item-skills">
                <p className="p-about">Innovation</p>
              </div>
              <div className="grid-item-skills">
                <p className="p-about">Risk Management</p>
              </div>
              <div className="grid-item-skills">
                <p className="p-about">Aviation</p>
              </div>
            </div>
          </div>

          <div className="modal-footer" />
          <div className="card-body">
            <div className="row">
              <h4
                className="code"
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Technologies
              </h4>
            </div>
            <div className="grid-container-skills">
              <div className="grid-item-skills">
                <img src={Logo} className="img-skills" alt="programing logo" />
              </div>
              <div className="grid-item-skills">
                <img src={MernLogo} className="img-skills" alt="MERN logo" />
              </div>
              <div className="grid-item-skills">
                <img src={Heroku} className="img-skills" alt="heroku logo" />
              </div>
              <div className="grid-item-skills">
                <img
                  src={JqueryLogo}
                  className="img-skills"
                  alt="JQuery logo"
                />
              </div>
              <div className="grid-item-skills">
                <img
                  src={WebpackLogo}
                  className="img-skills"
                  alt="WebPack logo"
                />
              </div>
              <div className="grid-item-skills">
                <img
                  src={BootstrapLogo}
                  className="img-skills"
                  alt="bootstrap logo"
                />
              </div>
              <div className="grid-item-skills">
                <img src={ReactLogo} className="img-skills" alt="React logo" />
              </div>
              <div className="grid-item-skills">
                <img
                  src={HandlebarsLogo}
                  className="img-skills"
                  alt="Handlebars logo"
                />
              </div>
              <div className="grid-item-skills">
                <img src={SqlLogo} className="img-skills" alt="SQL logo" />
              </div>
              <div className="grid-item-skills">
                <img
                  src={MongoLogo}
                  className="img-skills"
                  alt="MongoDB logo"
                />
              </div>
            </div>
          </div>

          <div className="modal-footer" />
          <div className="card-body">
            <div className="row">
              <h4
                className="code"
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Quality Assurance
              </h4>
            </div>
            <div className="grid-container-skills">
              <div className="grid-item-skills">
                <p className="p-about">Jest (Unit Testing)</p>
              </div>
              <div className="grid-item-skills">
                <p className="p-about">Troubleshooting</p>
              </div>
              <div className="grid-item-skills">
                <p className="p-about">Problem Solving</p>
              </div>
              <div className="grid-item-skills">
                <p className="p-about">PDCA Cycle </p>
              </div>
              <div className="grid-item-skills">
                <p className="p-about">Defect Prevention</p>
              </div>
            </div>
          </div>

          <div className="modal-footer" />
          <div className="card-body">
            <div className="row">
              <h4
                className="code"
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Project Management
              </h4>
            </div>
            <div className="grid-container-skills">
              <div className="grid-item-skills">
                <p className="p-about">Agile Principles and Practices</p>
              </div>
              <div className="grid-item-skills">
                <p className="p-about">Project Schedule and Risk Management</p>
              </div>
              <div className="grid-item-skills">
                <p className="p-about">Project Scope and Quality Management</p>
              </div>
              <div className="grid-item-skills">
                <p className="p-about">Software Project Management</p>
              </div>
              <div className="grid-item-skills">
                <p className="p-about">Project Life Cycle</p>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Resume;
