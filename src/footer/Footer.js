import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'

export class Footer extends Component {
    render() {
        return (
            <span className="span-footer">
                <p>Made with a lot of coffee ☕ and patience by 
                <Link to={{pathname: 'https://www.linkedin.com/in/mateo-mazzucco/'}} target="_blank">Mateo Mazzucco</Link></p>
            </span>
        )
    }
}

export default Footer
