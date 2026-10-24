import ".'/Navigation.css";
import {NavLink} from "react-router-dom";
import {Hash} from "react-router-hash-link";

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <li><NavLink to="/">Home</NavLink> </li>
                <li><NavLink to="/forum">Forum</NavLink></li>
                <li><NavLink to="/team">Team</NavLink></li>
                <li><NavLink to="/games">Games</NavLink></li>
                <li><NavLink to="/history">History</NavLink></li>
                <li><NavLink to="/news">News</NavLink></li>
                <li><NavLink to="/hof">HOF</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;