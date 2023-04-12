import React from "react";
import './About.css';
import PageHeader from "../PageHeaders/PageHeader";
import { BsInfoCircleFill } from "react-icons/bs"
import imgProfile from "../About/Aboutimg/Profile.png";
import { Animate } from 'react-simple-animate';
import {FaAward} from "react-icons/fa";
import {BsFillBookmarkCheckFill} from "react-icons/bs";



const AboutData = [
    { id:1, icon: <FaAward />, title: 'Experience', desc: '1+ Years Working'},
    { id:2, icon: <BsFillBookmarkCheckFill />, title: 'Projects', desc: '2+ Complted Projects'}
]

const About = () => {

    return (
        <div id="About" className="AboutContainer">
            <PageHeader
                headertext="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="Aboutdatas">

                <Animate
                    play
                    duration={2}
                    delay={1}
                    start={{
                        transform: "translateX(-600px)",
                    }}
                    end={{
                        transform: "translateX(0px)",
                    }}
                >
                    <div className="aboutLeft">
                        <div className="aboutimg">
                            <img src={imgProfile} alt="profile image" />
                        </div>
                    </div>
                </Animate>
                <div className="aboutRight">
                <Animate
                    play
                    duration={1.3}
                    delay={1}
                    start={{
                        transform: "translateX(-1200px)",
                    }}
                    end={{
                        transform: "translateX(0px)",
                    }}
                >
                    
                    <h3>About Details</h3>
                    <p className="para">Hi, my name is Rama Priya from TamilNadu. I'm a web developer with a Bachelors degree in 
                        Electrical Engineering. Building Projets are always been my passion. Being in the web 
                        development industry for over 1 year and I'm always motivated to do more.</p>
                    </Animate>
                    <Animate
                    play
                    duration={0.5}
                    delay={1}
                    start={{
                        transform: "translateY(200px)",
                    }}
                    end={{
                        transform: "translateY(0px)",
                    }}
                >
                    <div className="aboutCards">
                    {
                            AboutData.map(item =>(
                                <div key={item.id} className="acard">
                                    <article className="aboutcard">
                                    <span className="cardicon">{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    <small className="descc">{item.desc}</small>
                                    </article>
                                </div>
                            ))
                        }
                    </div>
                    </Animate>
                </div>
            </div>


        </div>
    )
}

export default About;