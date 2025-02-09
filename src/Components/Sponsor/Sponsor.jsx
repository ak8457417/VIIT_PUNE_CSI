import React from 'react';
import './Sponser.css'

const sponsors = [
    { id: 1, name: "Sponsor 1", logo: "https://play-lh.googleusercontent.com/Sn4FCvXPL21HgxKO_-Oj0_ldYA8YH2muN6enGKpBylzvYpCa_cZTqbU6VEXYRtFGwg" },
    { id: 2, name: "Sponsor 2", logo: "https://www.tailorit.nl/wp-content/uploads/2023/09/microsoft-logo-transparent-png-1.png" },
    { id: 3, name: "Sponsor 3", logo: "https://w7.pngwing.com/pngs/63/1016/png-transparent-google-logo-google-logo-g-suite-chrome-text-logo-chrome-thumbnail.png" },
    { id: 3, name: "Sponsor 3", logo: "https://w7.pngwing.com/pngs/63/1016/png-transparent-google-logo-google-logo-g-suite-chrome-text-logo-chrome-thumbnail.png" },
    { id: 3, name: "Sponsor 3", logo: "https://w7.pngwing.com/pngs/63/1016/png-transparent-google-logo-google-logo-g-suite-chrome-text-logo-chrome-thumbnail.png" },
    { id: 4, name: "Sponsor 4", logo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg" }
];

const Sponsor = () => {
    return (
        <div className="sponsor">
            <div className="sponsor-title">
                <h1>Our Sponsors</h1>
            </div>
            <div className="sponsor-slider">
                <div className="sponsor-track">
                    {sponsors.concat(sponsors).map((sponsor, index) => (
                        <div key={index} className="sponsor-card">
                            <img src={sponsor.logo} alt={sponsor.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sponsor;
