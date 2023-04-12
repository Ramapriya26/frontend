import React from "react"

import './Home.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particle from './Particle';
import {FaReact} from "react-icons/fa";
import {FaHtml5} from "react-icons/fa";
import {SiMongodb} from "react-icons/si";
import {FaNodeJs} from "react-icons/fa";

import {AiFillFacebook} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {FaGithubSquare} from "react-icons/fa"
import {AiFillTwitterSquare} from "react-icons/ai"



const Home = () => {

    const handleInit = async (main) => {
        await loadFull(main)
    }


    return (
        // height={window.outerHeight}

        <div id="Home" className="maincont">
            <div className="divparticle">
                <Particles id="particles" height={window.outerHeight} options={particle} init={handleInit} />

                <div className="sidecontent">
                    <div className="innercontent">
                        <div className="icon1">
                        <FaHtml5 size={40} color="var(--theme-main-color)" />
                        </div>
                        <div className="icon2">
                        <FaReact size={40} color="var(--theme-main-color)" />
                        </div>
                        <div className="icon3">
                        <FaNodeJs size={40} color="var(--theme-main-color)" />
                        </div>
                        <div className="icon4">
                        <SiMongodb size={40} color="var(--theme-main-color)" />
                        </div>

                    </div>


                </div>
                <div className="hometext">
                    <h1>
                        <p>
                            <span>Hi, I'm Rama Priya R</span>
                            <span className="spanncont">Web Developer</span>

                        </p>

                    </h1>
                </div>
                <div className="homebutton">
                    <button><a href="Rama_Resume.docx" download="Resume">View CV</a></button>

                <div className="diviconns">
                    <a href="https://twitter.com/" className="homeicons" >
                        <AiFillFacebook size={40} />
                    </a>
                    <a href="https://www.linkedin.com/" className="homeicons">
                       <FaGithubSquare size={40} />
                    </a>
                    <a href="https://github.com/login"className="homeicons">
                       <AiFillLinkedin size={40} />
                    </a>
                    <a href="https://www.facebook.com/" className="homeicons">
                        <AiFillTwitterSquare size={40} />
                    </a>
                </div>

                    {/* <button><a href="Rama_Resume.docx" download="Resume">View CV</a></button> */}
                </div>
               
            </div>

           

        </div>

    )
}

export default Home;