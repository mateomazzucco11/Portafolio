import React, { useState } from 'react';
import './Contact.css';
import ImageContact from '../../media/background-contact.jpg';
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { db } from '../../Firebase';


function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    
    const [loader, setLoader] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection('contacts').add({
            name: name,
            email: email,
            subject: subject,
            message: message,
        })
        .then(() => {
            alert('Message has been submitted 👌');
            setLoader(false);
        })
        .catch((error) => {
            alert(error.message);
            setLoader(false);
        });

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    return (
        <>
            <div className="container-background">
                <img src={ImageContact} className="img-contact" />
            </div>
            <div className="max-width contact">
                <div className="title-contact">
                    <h1>Contact me.</h1>
                </div>
                <div className="wrap">
                    <form className="container-inputs" onSubmit={ handleSubmit }>
                        <div className="input-name"><input type="text" className="fullname" name="name" placeholder="Name" required value={ name } onChange={(e) => setName(e.target.value)}></input></div>
                        <div className="input-email"><input type="email" className="email" name="email" placeholder="Email" required value={ email } onChange={(e) => setEmail(e.target.value)}></input></div>
                        <div className="input-subject"><input type="subject" className="subject" name="subject" placeholder="Subject" required value={ subject } onChange={(e) => setSubject(e.target.value)}></input></div>
                        <div className="input-message"><textarea type="text" className="message" name="message" placeholder="Message" required value={ message } onChange={(e) => setMessage(e.target.value)}></textarea></div>
                        <div className="button">
                            <button type="submit" style={{ background: loader ? "#ccc" : "transparent"}}>Send message</button>
                        </div>
                    </form>
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
