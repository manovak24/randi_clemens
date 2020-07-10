import React from 'react';
import Hero from '../Components/Hero/Hero';

function ContactPage(props) {
    return (
        <div>
            <Hero title={props.title} />
        </div>
    )
}

export default ContactPage;