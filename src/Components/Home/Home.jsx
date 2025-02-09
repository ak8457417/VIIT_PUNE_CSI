import React from 'react';
import './Home.css'
import technofea from '../../assets/techofea.png'

const Home = () => {
    return (
        <div id="xhome" className='home-container mydiv1'>
            <img src={technofea} alt='technofea' />
            <div className='container-info'>
                <div className='top'>
                    <h1>CSI VIIT Presents <br /> <span><b>TechnoFEA 2.0</b></span> 2024-25</h1>
                    <p>TechnoFea 2.0 is the flagship hackathon of Computer Society of India VIIT aimed at fostering innovation, collaboration, and creativity among tech enthusiasts. Scheduled for 17th Feb 2025, this hackathon provides a platform for students, developers, and innovators across Pune to showcase their technical prowess and problem-solving abilities.</p>
                </div>
                <div className='bottom'>
                    <a href={"https://unstop.com/hackathons/technofea-20-bracts-vishwakarma-institute-of-information-technology-viit-pune-1387993?lb=ImuNDwXS"} target="_blank" rel="noopener noreferrer">Register</a>
                </div>
            </div>
        </div>
    );
};

export default Home;
