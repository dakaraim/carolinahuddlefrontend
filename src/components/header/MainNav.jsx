
import { Link } from "react-router-dom";
import "./MainNav.css";

const MainNav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/forum">Forum</Link></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#games">Games</a></li>
                <li><a href="#history">History</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#hof">HOF</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default MainNav;
