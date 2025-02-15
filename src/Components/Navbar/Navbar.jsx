import React, {useRef, useState} from 'react';
import './Navbar.css'
import logo from '../../assets/logo-light.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

    const [menu, setMenu] = useState("")

    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }
    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }

    // const openMenu = () => {
    //     menuRef.current.classList.add("show");
    //     document.querySelector(".nav-mob-open").classList.add("hidden");
    //     document.querySelector(".nav-mob-close").classList.add("show");
    // };
    //
    // const closeMenu = () => {
    //     menuRef.current.classList.remove("show");
    //     document.querySelector(".nav-mob-open").classList.remove("hidden");
    //     document.querySelector(".nav-mob-close").classList.remove("show");
    // };

    return (
        <div className="navbar">
            <div className="nav-logo">
                <a href={"https://www.viit.ac.in/departments/computer/department-highlights/csi"} target="_blank" rel="noopener noreferrer">
                    <img src={logo} alt="logo" style={{ cursor: "pointer" }}/>
                </a>
            </div>
            <ul ref={menuRef} className="nav-menu">
                <li><a className='anchor-link' href='#xhome'><p onClick={() => setMenu('xhome')}>Home</p></a></li>
                <li><a className="anchor-link" href="#xabout"><p onClick={() => setMenu("xabout")}>About</p></a></li>
                <li><a className="anchor-link" href="#xgallery"><p onClick={() => setMenu("xgallery")}>Services</p></a></li>
                <li><a className="anchor-link" href="#xwork"><p onClick={() => setMenu("xwork")}>Contact</p></a></li>
            </ul>
            <div className="nav-connect">
                <a className="anchor-link" href={"#xwork"}>Connect With Us</a>
            </div>
        </div>
    );
};

export default Navbar;