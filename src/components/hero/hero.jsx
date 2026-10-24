
import "./hero.css";

const Hero = () => {
    return (
        <section id="hero">
            <button
                className="hero-arrow left-arrow"
                aria-label="Previous slide"
            >
                &#10094;
            </button>

            <img
                src={`${process.env.PUBLIC_URL}/images/hero.png`}
                alt="Carolina Panthers"
                id="hero-image"
            />
            <button
                className="hero-arrow right-arrow"
                aria-label="Next slide"
            >
                &#10095;
            </button>
        </section>
    );
};
export default Hero;
