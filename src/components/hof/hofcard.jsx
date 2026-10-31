import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

function HofCard({ player, onClick }) {
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const imageSrc = `${process.env.PUBLIC_URL}/${player.img_name.replace(/^\/+/, "")}`;

    return (
        <>
            <div className="hof-card" onClick={onClick}>
                <img
                    src={imageSrc}
                    alt={player.name}
                    className="hof-card-image"
                    onClick={(event) => {
                        event.stopPropagation();
                        setLightboxOpen(true);
                    }}
                />
                <h3>{player.name}</h3>
            </div>

            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                slides={[
                    {
                        src: imageSrc,
                        alt: player.name
                    }
                ]}
            />
        </>
    );
}

export default HofCard;