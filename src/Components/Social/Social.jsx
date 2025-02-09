import React from 'react';
import './Social.css'

const Social = () => {
    const redirectTo = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div id="xwork" className='social-media mydiv'>
            <div className='social-media-title'>
                <h1>Our Presence</h1>
            </div>
            <div className='social-media-content'>
                <div className='social-media-email' onClick={() => redirectTo("mailto:someone@example.com")}>
                    <i className="fa-solid fa-envelope"></i>
                    <p>6000+</p>
                </div>
                <div className='social-media-instagram' onClick={() => redirectTo("https://www.instagram.com/csiviit/")}>
                    <i className="fa-brands fa-instagram"></i>
                    <p>1000+</p>
                </div>
                <div className='social-media-whatsapp' onClick={() => redirectTo("https://wa.me/yourwhatsapplink")}>
                    <i className="fa-brands fa-whatsapp"></i>
                    <p>2000+</p>
                </div>
                <div className='social-media-linkedin' onClick={() => redirectTo("https://www.linkedin.com/company/csi-viit/")}>
                    <i className="fa-brands fa-linkedin"></i>
                    <p>1000+</p>
                </div>
            </div>
        </div>
    );
};

export default Social;
