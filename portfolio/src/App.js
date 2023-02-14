import React from "react";
import ParticlesBg from "particles-bg";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PortfolioContainer />
      <ParticlesBg
        type="circle"
        bg={true}
        style={{ backgroundAttachment: "scroll" }}
      />
      <Footer />
    </div>
  );
}
export default App;
