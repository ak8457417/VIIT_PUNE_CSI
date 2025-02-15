import React from 'react';
import './Sponser.css'
import verve from '../../assets/verve.png'

const Sponsor = () => {
    return (
        <div className="sponsor">
            <div className="sponsor-title">
                <h1>Our Sponsors</h1>
            </div>
            <div className="cards-sponsor">
                <div className="sponsor-card">
                    <img src={"https://play-lh.googleusercontent.com/Sn4FCvXPL21HgxKO_-Oj0_ldYA8YH2muN6enGKpBylzvYpCa_cZTqbU6VEXYRtFGwg"} alt={'unstop'} />
                </div>
                    <div className="sponsor-card">
                        <img src={verve} alt={'verve'} />
                    </div>
                    <div className="sponsor-card">
                        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/BalajiWafersLogo.svg/1200px-BalajiWafersLogo.svg.png"} alt={'balaji'} />
                    </div>
            </div>
        </div>
    );
};

export default Sponsor;
