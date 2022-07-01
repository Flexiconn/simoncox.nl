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

function App() {

  
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
        <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" style={{marginLeft: "10px"}} borderWidth="5" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(0,0,0,1)" iconSize="5" roundness="50%" url="https://www.linkedin.com/in/simoncox2003/" size="40" />
      </div>
      </div>
      <div className={"Banner-Triangle"}></div>
      <div className={"Bio"}>
        <div className={"Panel"}>
          <h2>Bio</h2>
          <img className={"BioImage"} src={BioImage}></img>
          <p>My name is Simon Cox, 18 years old and currently studying software engineering at Fontys Hogescholen</p>
        </div>
        <div className={"Divider"}>
        </div>        
        <div className={"Panel"}>
          <h2 className="tagHeader">Programming Languages</h2>
          <div className={"Tags"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          </div>
          <h2 className="tagHeader">Technologies</h2>
          <div className={"Tags"}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" />
          </div>
          <h2 className="tagHeader">Languages</h2>
          <div className={"Tags"}>
            <NL title="Ducth" className="Flag"/>
            <GB title="English" className="Flag"/>
          </div>
        </div>
      </div>
      <h2>Projects</h2>
      <div className={"Projects"}>
        <div className={"Card"}>
          <div className={"ImageBox"}></div>
          <div className={"TitleBox"}>
            <p>Steam P2P Framework</p>
            <a className={"Pill"}>Store</a>
            <a className={"Pill"}>Documentation</a>
          </div> 
        </div>
        <div className={"Card"}>
          <div className={"ImageBox"}>
            <img src={logo} style={{ height: "60%"}}/>
          </div>
          <div className={"TitleBox"}>
            <p>CRWND Content website</p>
            <a className={"Pill"}>Source</a>
            <a className={"Pill"}>Live Preview</a>
          </div> 
        </div> 
      </div>
    </div>
  );
}

export default App;
