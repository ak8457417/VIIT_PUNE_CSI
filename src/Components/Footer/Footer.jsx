import React from "react"
import './Footer.css'
import logo from '../../assets/logo-light.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo} alt=" "/>
                    <p>The CSI VIIT (Computer Society of India) student branch, started in 2007, has been instrumental in shaping the technical journey of countless students. With an initial enrollment of over 400 students in its first two years, the branch has grown to over 600 active members today.</p>
                </div>
                <div className="footer-top-right">
                    {/*<div className="footer-email-input">*/}
                    {/*    <img src={user_icon} alt=" "/>*/}
                    {/*    <input type={'email'} placeholder={'Enter your email'} p/>*/}
                    {/*</div>*/}
                    <div className="footer-subscribe">
                        <a href={"https://unstop.com/hackathons/technofea-20-bracts-vishwakarma-institute-of-information-technology-viit-pune-1387993?lb=ImuNDwXS"} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color:"white", fontWeight: 'bold'}}>
                            Register Now
                        </a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">* 2025 CSI VIIT. All rights reserved.</div>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer