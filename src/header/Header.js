import React, { Component } from 'react'
import Logo from '../components/logo/Logo'
import Navbar from '../components/navbar/Navbar'
import './Header.css'

export class Header extends Component {
    render() {
        return (
            <header className="container-nav-bar">
                <div className="header container">
                    <Logo />
                    <Navbar />  
                </div>
            </header>
        )
    }
}

export default Header
