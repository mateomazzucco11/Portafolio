import React from 'react'
import './About.css'
import { FaHtml5, FaCss3Alt, FaReact, } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'

function About() {
    return (
        <div className="max-width about">
            <div className="about-container">
                <h4>
                    About me.
                </h4>
                <div className="vl-line"></div>
                <div className='about-text'>
                    <p>
                        Hi! How are you? I introduce myself, I am Mateo Mazzucco born in Argentina, nationalized Italian. I wrote my first line of code for 2017 in Python, for different circumstances leave. I resumed writing code in 2021 learning <FaHtml5 className='html'/>, <FaCss3Alt className='css'/> and <SiJavascript className='js'/>, i am currently learning and using <FaReact className='react'/> this portfolio is written in React. I am very passionate about programming, i have created habits in my life that i have never thought about having, i am looking for my first work experience, willing to give my all to learn and study everything necessary to take myself to the next level.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About
