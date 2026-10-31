
import { useState } from "react";
import "./Header.css";
import HeaderTop from "./HeaderTop";
import MainNav from "./MainNav";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="main-header">
            <HeaderTop />

            <button
                id="menu-toggle"
                className="menu-toggle"
                onClick={toggleMenu}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
                aria-controls="main-nav"
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <MainNav
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />
        </header>
    );
};

export default Header;
