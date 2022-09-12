import logo from './img/Logo.svg';
import './App.css';
import { Bar, CartesianGrid,XAxis, YAxis, BarChart, Legend, Tooltip } from 'recharts';
import ProjectCard from './ProjectCard';
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

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
          <div className="Card"><FaEnvelope style={{ fontSize: '20px'}}/><span>Mail</span></div>
          <div className="Card"><FaLinkedinIn style={{ fontSize: '20px'}}/><span>LinkedIn</span></div>
          <div className="Card"><FaGithub style={{ fontSize: '20px'}}/><span>Github</span></div>
        </div>
      </div>
      <div className="Footer"><a href="https://github.com/Flexiconn/simoncox.nl">View Source</a></div>
    </div>
  );
}

export default App;

