import React from 'react';

import Hero from '../Components/Hero/Hero';
import './AboutPage.css';

import Resume from '../Assets/Randi-Website-Resume.pdf';
import { Link } from 'react-router-dom';

function AboutPage(props) {
    const randi = require('../Assets/randi.jpg');

    return(
        <div className="about-container">
            <div>
                <Hero title={props.title} />
            </div>
            <div>

            </div>
            <div>
                <article className="bio-container">
                    <img className="randi-image" src={randi} alt="professional"></img>
                    <p>Randi Clemens is a poet, editor, and educator who lives in the Upper Peninsula of 
                        Michigan. She received her BA in Creative Writing from the University of Illinois at
                        Urbana-Champaign and her MFA in poetry from Northern Michigan University where
                        she also taught composition and creative writing. Her poetry has been published in
                        various online journals and has been nominated for the Best of the Net. She has worked
                        as an editor for Ninth Letter and served as the Managing Editor of Passages North. She is
                        interested in contemporary poetry, science writing, museum studies, feminist literary
                        theory, women and gender studies, visual poetics, and social justice pedagogy. She is
                        actively seeking a home for her full-length manuscript and freelance opportunities as a
                        creative consultant and/or editor.</p>
                </article>
                <div className="button-container">
                    <Link className="button-link" to={Resume} target="_blank" download>Download Resume</Link> 
                </div>
            </div>
        </div>
    )
}

export default AboutPage;