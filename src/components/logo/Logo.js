import React, { Component } from 'react'
import { Link } from 'react-scroll'
import './Logo.css'



export class Logo extends Component {
    render() {
        return (
            <div className="container-logo">
                    <ul>
                        <li>
                            <Link to='home' smooth={true} duration={1000}>
                                <div className="const-h1">
                                    <h1>M<span className="diferent-color">r</span>.
                                        <div>
                                            <span className="first-span">Ma<span>te</span>o</span>
                                        </div>
                                    </h1>
                                </div>
                            </Link>
                        </li>    
                    </ul>
            </div>
        )
    }
}

export default Logo
