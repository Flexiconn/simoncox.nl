import "./ProjectCard.css"
function ProjectCard(props) {
    return ( <div className="Card">
        <h3>{props.name}</h3>

        <p>{props.description}</p>
        {props.button?.map(x => {
            <a className="Buttons">{x.name}</a>
        })}
    </div> );
}

export default ProjectCard;