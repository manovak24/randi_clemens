import React from 'react';
import Hero from '../Components/Hero/Hero';
import { FaFemale } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import './ContactPage.css';

function ContactPage(props) {
    return (
        <div>
            <div>
                <Hero title={props.title} />
            </div>
            <div className="contact-container">
                <ul>
                    <li><FaFemale /> Randi Clemens</li>
                </ul>
                <ul>
                    <li><MdEmail /> Randi Clemens</li>
                </ul>
            </div>
        </div>
    )
}

export default ContactPage;

