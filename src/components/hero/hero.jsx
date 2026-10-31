import { useState, useEffect } from "react";
import "./hero.css";

const slides = [
    {
        image: `${process.env.PUBLIC_URL}/images/hero.png`,
        alt: "Carolina Panthers",
        caption: "Welcome to Carolina Huddle"
    },
    {
        image: `${process.env.PUBLIC_URL}/images/carolinapractice.jpeg`,
        alt: "Carolina Panthers practice",
        caption: "Inside Panthers Football"
    },
    {
        image: `${process.env.PUBLIC_URL}/images/carolinadefense.jpeg`,
        alt: "Carolina Panthers defense",
        caption: "Keep Pounding"
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((current) => (current + 1) % slides.length);
    };

    const previousSlide = () => {
        setCurrentSlide((current) =>
            (current - 1 + slides.length) % slides.length
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero">
            <button
                className="hero-arrow left-arrow"
                onClick={previousSlide}
                aria-label="Previous slide"
            >
                &#10094;
            </button>

            <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].alt}
                id="hero-image"
            />

            <div className="hero-caption">
                {slides[currentSlide].caption}
            </div>

            <button
                className="hero-arrow right-arrow"
                onClick={nextSlide}
                aria-label="Next slide"
            >
                &#10095;
            </button>
        </section>
    );
};

export default Hero;
