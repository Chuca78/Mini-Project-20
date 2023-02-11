import React from "react";
import "../footer.css";

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="img-link">
        <a href="https://github.com/Chuca78" target="_blank">
          <img
            src="https://img.icons8.com/color/48/000000/github-2.png"
            alt="Github"
            className="icon"
          />
        </a>
        <a href="https://www.linkedin.com/in/timothyfleck/" target="_blank">
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="LinkedIn"
            className="icon"
          />
        </a>
      </div>
      <p className="footer-info">
        &copy; Timothy Fleck |{" "}
        <a
          href="https://github.com/Chuca78/React-Portfolio/blob/main/portfolio/src/assets/Timothy%20Fleck%20Resume.pdf"
          className="link"
        >
          Download Resume
        </a>{" "}
        |{" "}
        <a href="https://coolors.co/palette/edede9-d6ccc2-f5ebe0-e3d5ca-d5bdaf">
          Color Palette
        </a>{" "}
        | made with{" "}
        <img
          id="react-icon"
          src="https://img.icons8.com/color/48/000000/react-native.png"
          alt="React"
        />
      </p>
    </div>
  );
}

export default Footer;
