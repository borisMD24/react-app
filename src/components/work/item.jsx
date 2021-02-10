import {Link} from "react-router-dom";


const WorkItem = (props) => {
    return(
        <div>
            <h1>
                {props.item.title}
            </h1>
            <h2>
                {props.item.name}
            </h2>
            <p>
                {props.item.content}
            </p>
            
            <div className="center">
                <Link to={`/work/`}>
                    revenir en arriere
                </Link>
            </div>
        </div>
    );
}

export default WorkItem;