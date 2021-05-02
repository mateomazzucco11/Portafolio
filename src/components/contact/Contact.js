import React from 'react';
import './Contact.css';
import ImageContact from '../../media/background-contact.jpg';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <>
            <div className="container-background">
                <img src={ImageContact} className="img-contact" />
            </div>
            <div className="max-width">
                <div className="title-contact">
                    <h1>Contact me.</h1>
                </div>
                <div className="wrap">
                    <div className="container-inputs">
                        <div className="input-name"><input type="text" className="fullname" name="name" placeholder="Name" required></input></div>
                        <div className="input-email"><input type="email" className="email" name="email" placeholder="Email" required></input></div>
                        <div className="input-subject"><input type="subject" className="subject" name="subject" placeholder="Subject" required></input></div>
                        <div className="input-message"><textarea type="text" className="message" name="message" placeholder="Message" required></textarea></div>
                        <div className="button">
                            <button>Send message</button>
                        </div>
                    </div>
                    <div className="container-social-media">
                        <div className="social-media">
                            <Link to={{pathname: 'https://github.com/mateomazzucco11'}} target="_blank" className="icon-gh">
                                <FaGithub />
                            </Link>
                            <Link to={{pathname: 'https://twitter.com/MazzuccoMateo'}} target="_blank" className="icon-tw">
                                <FaTwitter />
                            </Link>
                            <Link to={{pathname: 'https://www.linkedin.com/in/mateo-mazzucco/'}} target="_blank" className="icon-lk">
                                <FaLinkedinIn />
                            </Link>
                            <Link to={{pathname: 'https://www.instagram.com/mateomazzucco/'}} target="_blank" className="icon-ig">
                                <FaInstagram />
                            </Link>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
