import { useState } from "react";
import "./Header.css";
import HeaderTop from "./HeaderTop";
import MainNav from "./MainNav";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="main-header">
            <HeaderTop />

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
                aria-controls="main-navigation"
            >
                ☰
            </button>

            <MainNav
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />
        </header>
    );
};

export default Header;
import { Link } from "react-router-dom";
import "./MainNav.css";

const MainNav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/forum">Forum</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><Link to="/games">Games</Link></li>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/hof">HOF</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default MainNav;