import React,{Component} from 'react';
import './style.css';

function Skills(){
    return(
        <div class="skills">
            <div class="title">Skills</div>
            <div class="subtitle">Skills & Attributes</div>
            <div class="frame">
                <div class="name">HTML</div>
                <div class = "graph stack1">
                    <span> 75%</span>
                </div>
                <div class="name">CSS</div>
                <div class = "graph stack2">
                    <span> 70%</span>
                </div>
                <div class="name">JS</div>
                <div class = "graph stack3">
                    <span> 65%</span>
                </div>
                <div class="name">Unity</div>
                <div class = "graph stack4">
                    <span> 75%</span>
                </div>
            </div>
            <div class="metadata">Experience with all phases of the software life-cycle. Passion for learning new technologies. Capable of working within a team environment and independently. Ability to plan and time schedule, work under strict time pressure and adapt quickly when needed.</div>
        </div>
    );
}

export default Skills;