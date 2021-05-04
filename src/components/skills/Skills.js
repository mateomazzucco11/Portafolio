import React, { Component } from 'react'
import './Skills.css'
import coverImg from '../../media/yellow-skills.jpg'
import { FaHtml5, FaCss3Alt, FaSass, FaReact, } from 'react-icons/fa'
import { SiTypescript, SiJavascript } from 'react-icons/si'
import { DiGit } from 'react-icons/di'

function Skills() {
    return(
        <>
            <div className="container-skills-img">
                <img src={coverImg} alt="cover" className="imagen" />
            </div>
            <div className='max-width skills'>
                <div className='title-skills'>
                    <h1>My Skills</h1>
                </div>
                <div className='wrapper-icons'>
                    <div className='icon html'>
                        <FaHtml5 />
                    </div>
                    <div className='icon css'>
                        <FaCss3Alt />
                    </div>
                    <div className='icon js'>
                        <SiJavascript />
                    </div>
                    <div className='icon react'>
                        <FaReact />
                    </div>
                    <div className='icon ts'>
                        <SiTypescript />
                    </div>
                    <div className='icon sass'>
                        <FaSass />
                    </div>
                    <div className='icon git'>
                        <DiGit />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;