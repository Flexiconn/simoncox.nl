import "./ProjectCard.css"
function ProjectCard(props) {
    return ( <div className="Card">
        <h3>{props.name}</h3>

        <p>{props.description}</p>
        <a className="Buttons">Source</a>
    </div> );
}

export default ProjectCard;