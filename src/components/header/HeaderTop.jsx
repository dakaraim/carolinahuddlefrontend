
import "./HeaderTop.css";

const HeaderTop = () => {
    return (
        <div className="header-top">
            <a href="/">
                <img
                    src={process.env.PUBLIC_URL + "/images/logo.png"}
                    alt="Carolina Huddle Logo"
                    className="header-logo"
                />
            </a>

            <div className="header-buttons">
                <button className="search-button" aria-label="Search">
                    <span className="search-icon">⌕</span>
                </button>

                <button className="sign-in">Sign In</button>
            </div>
        </div>
    );
};

export default HeaderTop;
