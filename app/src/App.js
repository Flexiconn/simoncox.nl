import logo from './img/Logo.svg';
import './App.css';
import wave from "./img/wave.svg"
import ProjectCard from './ProjectCard';
import { FaGithub, FaLinkedinIn, FaRegClipboard } from "react-icons/fa";
import React, { useRef, useEffect, useState } from "react"

function App() {

  const [offset, setOffset] = useState(0);
  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function GetAge(){
    var birth = new Date('8/01/2003');
    var check = new Date();

    var milliDay = 1000 * 60 * 60 * 24; // a day in milliseconds;


    var ageInDays = (check - birth) / milliDay;
  
    return Math.floor(ageInDays / 365 );
  }

  console.log(offset);

  
  return (
    <div className="App">
      <div className={(offset > 40) ? "Nav" : "Nav-NonScroll"}></div>
      <div className="Page">
        <div className="Bio">
          <img src={wave} className="waves"></img>
          <div className="Panel">
            <p>My name is Simon Cox, {GetAge()} years old and I'm a student attending Fontys HBO ICT with a focus on Software Engineering</p>
            <h3>Skills</h3>
            html css javascript c# react asp.net next.js docker git github
          </div>      
        </div>
        <div className="Projects">
          <h2>Latest Projects</h2>
          <div className="Grid">
            <ProjectCard buttons={[{name: "test"},{name: "test"}]} name="Game Engine  " description="A game engine made using C++ and the Vulkan API. Implementing Lua as a scripting language."></ProjectCard>
            <ProjectCard name="Canvas Assignment Board" description="School group project in collaboration with OpenMaze.io aiming to help students organize their assignments more efficiently."></ProjectCard>
            <ProjectCard buttons={[{name: "test"},{name: "test"}]} name="Note Taking App" description="Web app to easily write markdown files and save them on github."></ProjectCard>
          </div>
          <a href="" className="Archive">View Archive</a>
        </div>
        <div className="Contact">
          <h1>Get in touch</h1>
          <p>Feel free to reach out preferably through email</p>
          <div className="Email" onClick={() => {navigator.clipboard.writeText("simon.cox@student.fontys.nl")}}>simon.cox@student.fontys.nl<FaRegClipboard/></div>
          <div className="Card"><FaLinkedinIn style={{ fontSize: '20px'}}/><span>LinkedIn</span></div>
          <div className="Card"><FaGithub style={{ fontSize: '20px'}}/><span>Github</span></div>
        </div>
      </div>
      <div className="Footer"><a href="https://github.com/Flexiconn/simoncox.nl">View Source</a></div>
    </div>
  );
}

export default App;

