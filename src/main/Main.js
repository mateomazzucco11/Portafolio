import React, { Component } from 'react';

import Home from '../components/home/Home';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Projects from '../components/projects/Projects';
import Contact from '../components/contact/Contact';
import Cover from '../components/cover/Cover';

import './Main.css';
import Footer from '../footer/Footer';

export class Main extends Component{
    render() {
        return (
            <>
                <section className='home' id='home-id'>
                    <Home />
                    <Cover />
                </section>
                <section className="about" id="about">
                    <About />
                </section>
                <section className='skills' id='skills'>
                    <Skills />
                </section>
                <section className="projects" id="projects">
                    <Projects />
                </section>
                <section className="contact" id="contact">
                    <Contact />
                </section>
                <footer>
                    <Footer />
                </footer>
            </>
        );
    }
}

export default Main;
