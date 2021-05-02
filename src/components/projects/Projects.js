import React from 'react'
import './Projects.css'
import Building from '../../media/building.png'

function Projects() {
    return (
        <div className="max-width projects">
            <div className="title-projects">
                <h1>In construction</h1>
            </div>
            <div className="content-img-build">
                <img src={Building} alt="building" className="build-img" />
            </div>
        </div>
    );
}

export default Projects
