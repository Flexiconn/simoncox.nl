import logo from './img/Logo.svg';
import './App.css';
import ReactTypingEffect from 'react-typing-effect';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import { CopyBlock, dracula } from "react-code-blocks";
import DevIcon from "devicon-react-svg";
import Images from "./img/testimg.jpg"
import { NL, GB } from 'country-flag-icons/react/3x2'
import BioImage from "./img/BioImage.png"
import { Bar, CartesianGrid,XAxis, YAxis, BarChart, Legend, Tooltip } from 'recharts';
import ProjectCard from './ProjectCard';

function App() {

  function GetAge(){
    var birth = new Date('8/01/2003');
    var check = new Date();

    var milliDay = 1000 * 60 * 60 * 24; // a day in milliseconds;


    var ageInDays = (check - birth) / milliDay;
  
    return Math.floor(ageInDays / 365 );
  }
  
  return (
    <div className="App">
      <div className="Nav"></div>
      <div className="Page">
        <div className="Bio">
          <div className="Panel">
            <p>My name is Simon Cox, I'm a student attending Fontys HBO ICT with a focus on Software Engineering</p>
            <p>Age: {GetAge()}</p>
          </div>      
        </div>
        <div className="Projects">
          <h2>Latest Projects</h2>
          <div className="Grid">
            <ProjectCard name="Game Engine  " description="A game engine made using C++ and the Vulkan API. Implementing Lua as a scripting language."></ProjectCard>
            <ProjectCard name="Canvas Assignment Board" description="School group project in collaboration with OpenMaze.io aiming to help students organize their assignments more efficiently."></ProjectCard>
            <ProjectCard name="Note Taking App" description="Web app to easily write markdown files and save them on github."></ProjectCard>
          </div>
          <a href="" className="Archive">View Archive</a>
        </div>
        <div className="Contact">
          <h1>Get in touch</h1>
          <p>Feel free to reach out preferably through email</p>
          <div className="Card">Mail</div>
          <div className="Card">LinkedIn</div>
          <div className="Card">Github</div>
        </div>
      </div>
      <div className="Footer"><a href="https://github.com/Flexiconn/simoncox.nl">View Source</a></div>
    </div>
  );
}

export default App;
