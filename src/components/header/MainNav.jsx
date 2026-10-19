import "./MainNav.css";

const MainNav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <a href={process.env.PUBLIC_URL + "/"}>Home</a>
                </li>
                <li><a href="/about">Forum</a></li>
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