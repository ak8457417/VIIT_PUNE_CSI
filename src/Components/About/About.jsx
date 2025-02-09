import React from 'react';
import './About.css';
import technofea from '../../assets/techofea.png'

const About = () => {
    return (
        <div id="xabout" className='about mydiv'>
            <div className='about-title'>
                <h1>About Event</h1>
            </div>
            <div className='about-content'>
                <img src={technofea} alt={'technofea'} />
                <div className='about-description'>
                    <div>
                        <span>What is TechnoFea ?</span>
                        <p>TechnoFea 2.0 is the flagship hackathon of Computer Society of India VIIT aimed at fostering innovation, collaboration, and creativity among tech enthusiasts.

                            Scheduled for 17th Feb 2025, this hackathon provides a platform for students, developers, and innovators across Pune to showcase their technical prowess and problem-solving abilities. With the theme "AI Taking Over Humanity," TechnoFea 2.0 challenges participants to tackle real-world problems, explore cutting-edge technologies, and push the boundaries of innovation.

                            The event promises to be a hub for groundbreaking ideas, networking opportunities, and knowledge exchange, all within an environment of healthy competition.</p>
                    </div>
                    <div>
                        <span>"TechnoFea" Event Overview</span>
                        <p>
                            <ul>
                                <li>Organized by CSI VIIT Chapter.</li>
                                <li>Encourages teams of 3-4 members.</li>
                                <li>Offers competitive prize pool: 1st Place ₹10,500, 2nd Place ₹8,500, 3rd Place ₹6,000.</li>
                                <li>Open to all students.</li>
                                <li>Includes online events and offline events.</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
