import "./ProjectCard.css"
function ProjectCard(props) {
    return ( <div className="Card">
        <h3>{props.name}</h3>

        <p>{props.description}</p>
        <div className="ButtonList">
        {props.buttons?.map((x) => {
            return <a href={x.link} className="Buttons">{x.name}</a>
        })}
        </div>
    </div> );
}

export default ProjectCard;