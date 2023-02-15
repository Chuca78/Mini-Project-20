import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from "../components/Home";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Resume from "../components/Resume";
import NavBar from "../components/NavTabs";

function Header() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/about" />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume">
          <Resume />
        </Route>
      </Switch>
    </Router>
  );
}

export default Header;
