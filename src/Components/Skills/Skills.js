import React from "react";
import './Skills.css';
import PageHeader from "../PageHeaders/PageHeader";
import {GiSkills} from "react-icons/gi";
import { SkillData } from "./SkillData";
import { AnimateKeyframes, Animate } from "react-simple-animate";
import {Line} from "rc-progress";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const Skills = () =>{

    return(
        <div id="Skills" className="skillContainer">
            <PageHeader
                headertext="Skills"
                icon={<GiSkills size={40} />}
            />
            {/* <div className="skillcontent">
                {
                    SkillData.map((item,i) =>(
                        <div className="skillitems">
                           <Animate
                           play
                           duration={1.5}
                           delay={0.3}
                           start={{
                            transform : 'translateX(-200px)'
                           }}
                           end ={{
                            transform :'translateX(0px)'
                           }}
                           >
                            <h3 className="skillheading">{item.label}</h3>
                            <div className="innerdiv">
                                {
                                    item.data.map((skillitem, i)=> (
                                        <AnimateKeyframes play duration={1} 
                                        keyframes={["opacity :1", "opacity :0"]}
                                        iterationCount="1"
                                        >
                                            <div className="skilllines" key={i}>
                                                 <p>{skillitem.skillname}</p>
                                                 <Line 
                                                 percent={skillitem.percentage}
                                                 strokeWidth="5"
                                                 strokeColor="var(--theme-main-color)"
                                                 trailWidth={"5"}
                                                 strokeLinecap ="square"
                                                 />
                                            </div>

                                            
                                        </AnimateKeyframes>
                                    ) )
                                }
                            </div>

                            </Animate> 
                        </div>
                    ))
                }
            </div> */}


            <div className="skillcontent">
                {
                    SkillData.map((item,i) =>(
                        <div className="skillitems">
                           <Animate
                           play
                           duration={1.5}
                           delay={0.3}
                           start={{
                            transform : 'translateX(-200px)'
                           }}
                           end ={{
                            transform :'translateX(0px)'
                           }}
                           >
                            <h3 className="skillheading">{item.label}</h3>
                            <div className="innerdiv">
                                {
                                    item.data.map((skillitem, i)=> (
                                        <AnimateKeyframes play duration={1} 
                                        keyframes={["opacity :1", "opacity :0"]}
                                        iterationCount="1"
                                        >
                                                
                                            <div className="skilllines" key={i}>
                                                    <p>{skillitem.skillname}</p>
                                                    <div className="circularbar">
                                                        <CircularProgressbar
                                                            styles={buildStyles({

                                                            })}
                                                            value={skillitem.percentage} text={`${skillitem.percentage}%`} />;
                                                    </div>
                                                </div>

                                            
                                        </AnimateKeyframes>
                                    ) )
                                }
                            </div>

                            </Animate> 
                        </div>
                    ))
                }
            </div> 

        </div>
    )
}

export default Skills;