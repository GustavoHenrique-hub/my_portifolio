import React from "react";
import NavBar from "./components/NavBar/navBar";
import "./App.css";
import ProficiencySlider from "./components/ProficiencySlider";



function App() {
  return (
    <div className="all-content">
      <section className="section home-section" id="home">
        <h1>Home</h1>
      </section>
      <section className="section about-section" id="about">
        <h1>Aboute Me</h1>
      </section>
      <section className="section techs-section" id="techs">
        <h1>Tecnologies</h1>
        <ProficiencySlider techName={"React"}/>
      </section>
      <section className="section projects-section" id="projects">
        <h1>Projects</h1>
      </section>
      <section className="section contact-section" id="contact">
        <h1>Contact Me</h1>
      </section>
      <div className="navbar-position">
        <NavBar />
      </div>
    </div>
  );
}

export default App;
