import {Link} from "react-router-dom";

const Default = (props) => {
    const links = props.array.map(item => {
        return (
        <li>
            <Link to={`/work/${item.name}`}>
                {item.name}
            </Link>
        </li>
        );
    })
    return (
        <div>
            <h1>
                Au fil des années, nous avons pu accompagner les meilleurs.
            </h1>
            <p>
                Découvrez pas à pas comment nous avons été présent pour lancer vos marques préférées.
            </p>
            <ul>
                {links}
            </ul>
        </div>
    );
}

export default Default;