import React from "react";
import "../App.css";

function ProjectCards(props) {
  return (
    <div className={`grid-item gallery__item--${props.id}`}>
      <img src={props.image} alt={props.name} className="gallery__img" />
      <div className="desc">
        <h5>{props.name}</h5>
      </div>

      <div className="dep-links">
        <a href={props.github} rel="noopener">
          <img
            src="https://img.icons8.com/color/48/000000/github--v1.png"
            alt="Repository"
            id="project-icon"
          />
        </a>
        <a href={props.deploy} rel="noopener">
          <img
            src="https://img.icons8.com/color/48/000000/monitor.png"
            alt="Deployed Site"
            id="project-icon"
          />
        </a>
      </div>
    </div>
  );
}

export default ProjectCards;
