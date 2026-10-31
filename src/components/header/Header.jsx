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
