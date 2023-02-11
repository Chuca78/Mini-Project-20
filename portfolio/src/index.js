import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ParticlesBg from "particles-bg";

ReactDOM.render(
  <Router>
    <App />
    <ParticlesBg type="circle" bg={true} />
  </Router>,
  document.getElementById("root")
);
