import React from "react";
import { useState } from "react";
import {FaBars} from "react-icons/fa";
import {HiX} from "react-icons/hi";
import './Navbar.css';



const Navbar = () =>{
    const [toggleIcon, setToggleIcon] = useState(false)


    const handleToggle = () =>{
        setToggleIcon(!toggleIcon);   
    }


    return(
        <div className="text-info maincontainer">
            <div className="leftcont">
                <h3>MY PORTFOLIO</h3>
            </div>
            <nav className="navbar">
                <ul className={`nav_container ${toggleIcon ? `active` : " "} `}>
                    <li className="nav-item">
                        <a className="nav-link active" href="">HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#About">ABOUT ME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Skills">SKILLS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">PROJECTS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#ContactMe">CONTACT ME</a>
                    </li>

                </ul>

                <div className="nav-icon" onClick={handleToggle}>
                    {
                        toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
                    }

                </div>
            </nav>
        </div>
    )
}

export default Navbar;