import { Link } from "react-router-dom";
import "./MainNav.css";

const MainNav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/forum">Forum</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/about">Games</Link></li>
                <li><Link to="/about">History</Link></li>
                <li><Link to="/about">News</Link></li>
                <li><Link to="/about">HOF</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default MainNav;
