import {useParams} from "react-router-dom";

function Project() {
    let { name } = useParams();

    return ( <div>{name}</div> );
}

export default Project;