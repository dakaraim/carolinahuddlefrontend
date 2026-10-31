
import { Link } from "react-router-dom";
import "./MainNav.css";

const MainNav = ({ menuOpen, setMenuOpen }) => {
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav
            id="main-navigation"
            className={`main-nav ${menuOpen ? "open" : ""}`}
        >
            <ul>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/forum" onClick={closeMenu}>Forum</Link></li>
                <li><Link to="/team" onClick={closeMenu}>Team</Link></li>
                <li><Link to="/games" onClick={closeMenu}>Games</Link></li>
                <li><Link to="/history" onClick={closeMenu}>History</Link></li>
                <li><Link to="/news" onClick={closeMenu}>News</Link></li>
                <li><Link to="/hof" onClick={closeMenu}>HOF</Link></li>
                <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default MainNav;
