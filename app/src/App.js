import logo from './logo.svg';
import './App.css';
import ReactTypingEffect from 'react-typing-effect';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import { CopyBlock, dracula } from "react-code-blocks";
import DevIcon from "devicon-react-svg";


function App() {

  const JSCode = `class HelloWorld {
    static void Main() {
     System.Console.WriteLine("Hello, World!");
    }
   }`
   const devIconStyle = {
    fill: "thistle",
    width: "150px",
};

  return (
    <div className="App">
      <div className={"Banner"}>
        <h1>Simon Cox</h1>
        <ReactTypingEffect typingDelay={1} speed={150} eraseSpeed={150} eraseDelay={2500} style={{color: '#fff'}}
        text={["Software engineering student", "Fontys HBO ICT"]}
      />
      <div className={"IconBox"}>
        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" style={{marginLeft: "10px"}} borderWidth="5" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,1)" iconSize="5" roundness="50%" url="https://github.com/Flexiconn" size="40" />
        <span className={"divider"}></span>
        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" style={{marginLeft: "10px"}} borderWidth="5" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,1)" iconSize="5" roundness="50%" url="https://github.com/Flexiconn" size="40" />
      </div>
      </div>
      <div className={"Banner-Triangle"}></div>
      <div className={"Languages"}>
        <h2>Languages</h2>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
      </div>
      <div className={"Technologies"}>
          <h2>Languages</h2>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original-wordmark.svg" />
          ASP.NET
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />
          MSSQL
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
      </div>
      <div className={"Projects"}>
        Projects
        <div className={"card"}></div>
          
      </div>
    </div>
  );
}

export default App;
