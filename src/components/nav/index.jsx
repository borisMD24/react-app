import {Link} from "react-router-dom";
import Switcher from "./switch";

const Nav = () => {
    return(
        <nav className="nav">
          <div className="links">
            <Link to="/">
              Acceuil
            </Link>
            <Link to="/about">
              A propos
            </Link>
            <Link to="/work">
              Projets
            </Link>
          </div>
          <Switcher/>
        </nav>
    );
}

export default Nav;