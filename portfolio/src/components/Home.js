import React from "react";
import UTLogo from "../assets/images/UT_Austin.png";
import ERAULogo from "../assets/images/ERAU.png";
import KirkwoodLogo from "../assets/images/Kirkwood.jpg";
import "../App.css";

export default function Home() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="Title">
                  <h1
                    style={{
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    Timothy Fleck
                  </h1>
                </div>
                <div className="row abstract-back "></div>
              </div>

              <div className="card-body">
                <div className="row">
                  <p className="p-about">
                    Software Engineer with a demonstrated history of working on
                    production web and mobile applications. Deep understanding
                    and technical expertise in Computer Science fundamentals,
                    CSS, HTML, Javascript, ReactJS, NodeJS, MongoDB, and other
                    technologies.
                  </p>
                </div>
              </div>

              <div className="modal-footer" />

              <div className="card-body">
                <h2 className="edu">Education</h2>
                <br />

                <div className="grid-container-profile">
                  <div className="grid-item">
                    <div className="title-uni">University Of Texas, Austin</div>
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
                    <div className="title-uni">
                      Embry Riddle Aeronautical University
                    </div>
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
                    <div className="title-uni">Kirkwood Community College</div>
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
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
