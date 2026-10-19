import "./Header.css";
import HeaderTop from "./HeaderTop";
import "./MainNav";

const Header = () => {
    return (
        <header className="main-header">
            <HeaderTop />
            <MainNav />
        </header>
    );
};

export default Header;