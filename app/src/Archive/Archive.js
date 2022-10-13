import "./Archive.css"
import ProjectCard from '../ProjectCard';

function Archive() {
    return ( <div className="Main">
        <div>
            <div className="Banner">
                <h1>Archive</h1>
                <p>View all previous and current projects</p>
            </div>
            <div className="search-wrapper">
                <input type="text" placeholder="Start typing to filter..."/>
                <select>
                    <option>All</option>
                    <option>Javascript</option>
                    <option>Typescript</option>
                    <option>C#</option>
                    <option>C++</option>
                    <option>HTML</option>
                    <option>CSS</option>
                </select>
            </div>
            <div className="Archive-Projects">
                <ProjectCard buttons={[{name: "Demo", link:"https://www.simoncox.nl/"}, {name: "Source",link:"https://www.simoncox.nl/"}]} name="Game Engine  " description="A game engine made using C++ and the Vulkan API. Implementing Lua as a scripting language."></ProjectCard>
                <ProjectCard buttons={[{name: "Demo" ,link:"https://www.simoncox.nl/"}, {name: "Source" ,link:"https://www.simoncox.nl/"}]} name="Canvas Assignment Board" description="School group project in collaboration with OpenMaze.io aiming to help students organize their assignments more efficiently."></ProjectCard>
                <ProjectCard buttons={[{name: "Demo" ,link:"https://www.simoncox.nl/"},{name: "Front-end source" ,link:"https://www.simoncox.nl/"}, {name: "Back-end source" ,link:"https://www.simoncox.nl/"}]} name="Note Taking App" description="Web app to easily write markdown files and save them on github."></ProjectCard>
                <ProjectCard buttons={[{name: "Source" ,link:"https://github.com/DB-S3"}]} name="CMS" description="A CMS to make very basic webpages with auth0 as identity provider"></ProjectCard>
                <ProjectCard buttons={[{name: "Source" ,link:"https://github.com/Flexiconn/FHICTkillerapp/"}]} name="Cliverr" description="Fiverr clone made with ASP.NET mvc."></ProjectCard>
                <ProjectCard buttons={[{name: "Source" ,link:"https://github.com/Flexiconn/circustreinschool"}]} name="Circus train" description="Program to sort animal into train carts."></ProjectCard>
                <ProjectCard buttons={[{name: "Source" ,link:"https://github.com/Flexiconn/circustreinschool"}]} name="Community platform" description="A project in collaboration with municipality Horst aan de Maas to test the waters for community web platform."></ProjectCard>
            </div>
        </div>
    </div> );
}

export default Archive;