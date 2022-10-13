import logo from './img/Logo.svg';
import './App.css';
import wave from "./img/wave.svg"
import ProjectCard from './ProjectCard';
import { FaGithub, FaLinkedinIn, FaRegClipboard } from "react-icons/fa";
import React, { useRef, useEffect, useState } from "react"

function Home() {

  const [offset, setOffset] = useState(0);
  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, );

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
      <div className={(offset > 20) ? "Nav" : "Nav-NonScroll"}>
      <p className={"Nav-Text"}>Simon Cox</p>
      <button>Get in touch</button>

      </div>
      <div className="Page">
        <div className="Bio">
          <img src={wave} className="waves"></img>
          <div className="Panel">
            <p>My name is Simon Cox, {GetAge()} years old and I'm a student attending Fontys HBO ICT with a focus on Software Engineering.</p>
            <h3>Skills</h3>
            <div className='SkillList'>
              <span className="Pill">HTML</span> <span className="Pill">CSS</span> <span className="Pill">SQL</span> <span className="Pill">NoSQL</span> <span className="Pill">Javascript</span> <span className="Pill">C#</span> <span className="Pill">ReactJS</span> <span className="Pill">ASP.NET</span> <span className="Pill">Next.js</span> <span className="Pill">Docker</span> <span className="Pill">Git</span> <span className="Pill">Github</span> <span className="Pill">Dutch</span> <span className="Pill">English</span><span className="Pill">Agile</span>
            </div>
            
            <a href="https://drive.google.com/file/d/1N__pbLNM2W53XXq84gmC6P96WWbCmOTi/view?usp=sharing" className="Button">View Resume</a>
          </div>      
        </div>
        <div className="Projects">
          <h2>Latest Projects</h2>
          <div className="Grid">
            <ProjectCard buttons={[{name: "Demo", link:"https://www.simoncox.nl/"}, {name: "Source",link:"https://www.simoncox.nl/"}]} name="Game Engine  " description="A game engine made using C++ and the Vulkan API. Implementing Lua as a scripting language."></ProjectCard>
            <ProjectCard buttons={[{name: "Demo" ,link:"https://www.simoncox.nl/"}, {name: "Source" ,link:"https://www.simoncox.nl/"}]} name="Canvas Assignment Board" description="School group project in collaboration with OpenMaze.io aiming to help students organize their assignments more efficiently."></ProjectCard>
            <ProjectCard buttons={[{name: "Demo" ,link:"https://www.simoncox.nl/"},{name: "Front-end source" ,link:"https://www.simoncox.nl/"}, {name: "Back-end source" ,link:"https://www.simoncox.nl/"}]} name="Note Taking App" description="Web app to easily write markdown files and save them on github."></ProjectCard>
          </div>
          <a href="/archive" className="Archive">View Archive</a>
        </div>
        <div className="Contact">
          <h1>Get in touch</h1>
          <p>Feel free to reach out preferably through email</p>
          <div>simoncox2003@gmail.com</div>
          <div className="Card"><FaLinkedinIn style={{ fontSize: '20px'}}/><span>LinkedIn</span></div>
          <div className="Card"><FaGithub style={{ fontSize: '20px'}}/><span>Github</span></div>
        </div>
      </div>
      <div className="Footer"><a href="https://github.com/Flexiconn/simoncox.nl">View Source</a></div>
    </div>
  );
}

export default Home;

