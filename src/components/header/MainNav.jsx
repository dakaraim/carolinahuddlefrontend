
import { Link } from "react-router-dom";
import "./MainNav.css";

const MainNav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><Link to="/about">Home</Link></li>
                <li><Link to="/about">Forum</Link></li>
                <li><a href="/about">Team</a></li>
                <li><a href="/about">Games</a></li>
                <li><a href="/about">History</a></li>
                <li><a href="/about">News</a></li>
                <li><a href="/about">HOF</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default MainNav;
