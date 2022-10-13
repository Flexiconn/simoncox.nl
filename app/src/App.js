import ReactDOM from "react-dom/client";
import {
  Route,
  Routes
} from "react-router-dom";
import Archive from "./Archive/Archive";
import Home from "./Home";
import Project from "./Archive/Project"

function App() {
  return ( <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/archive" element={<Archive/>}/>
    <Route path="/:name" element={<Project/>}/>
  </Routes> );
}

export default App;