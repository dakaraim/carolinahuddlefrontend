
import "./footer.css";

const Footer = () => {
    return (
        <footer id="main-footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <a href={`${process.env.PUBLIC_URL}/index.html`}>
                        <img
                            src={`${process.env.PUBLIC_URL}/logo.png`}
                            alt="Carolina Huddle Logo"
                            className="footer-logo"
                        />
                    </a>

                    <p>
                        Your home for Carolina Panthers news,
                        discussions, and team history.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>QUICK LINKS</h3>
                    <a href={`${process.env.PUBLIC_URL}/team.html`}>Team</a>
                    <a href={`${process.env.PUBLIC_URL}/games.html`}>Games</a>
                    <a href={`${process.env.PUBLIC_URL}/history.html`}>History</a>
                    <a href={`${process.env.PUBLIC_URL}/forum.html`}>Forum</a>
                    <a href={`${process.env.PUBLIC_URL}/news.html`}>News</a>
                    <a href={`${process.env.PUBLIC_URL}/hof.html`}>Hall of Fame</a>
                </div>

                <div className="footer-contact">
                    <h3>CONTACT</h3>
                    <p>
                        Questions or suggestions?
                    </p>
                    <a href="mailto:contact@carolinahuddle.com">
                        contact@carolinahuddle.com
                    </a>
                </div>

                <div className="footer-social">
                    <h3>FOLLOW US</h3>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        Facebook
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                        Instagram
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                        YouTube
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} Carolina Huddle. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

