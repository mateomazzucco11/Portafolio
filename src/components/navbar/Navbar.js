import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { GoHome, GoProject } from 'react-icons/go';
import { SiAboutDotMe, SiSkillshare } from 'react-icons/si';
import { RiContactsLine } from 'react-icons/ri';

export class Navbar extends Component {
    render() {
        return (
            <div className='container-navegation'>
                <ul>
                    <li>
                        <Link to='home' smooth={true} duration={1000}>
                            <GoHome />
                        </Link>
                    </li>
                    <li>
                        <Link to='about' smooth={true} duration={1000}>
                            <SiAboutDotMe />
                        </Link>
                    </li>
                    <li>
                        <Link to='skills' smooth={true} duration={1000}>
                            <SiSkillshare />
                        </Link>
                    </li>
                    <li>
                        <Link to='projects' smooth={true} duration={1000}>
                            <GoProject />
                        </Link>
                    </li>
                    <li>
                        <Link to='contact' smooth={true} duration={1000}>
                            <RiContactsLine />
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar

