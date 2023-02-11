import React from "react";
import portfolio from "../data";
import ProjectCards from "../components/project";
import "../App.css";
import "../portfolio.css";

const Portfolio = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="title">
                  <h1
                    style={{
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    Portfolio
                  </h1>
                  <h4
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
                  </h4>
                </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Portfolio;
