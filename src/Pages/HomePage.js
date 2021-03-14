import React from 'react';
import Hero from '../Components/Hero/Hero';
import './HomePage.css';
import { Link } from 'react-router-dom';


function HomePage(props) {
    return(
        <div className="HomePage">
            <div>
                <Hero title={props.title} subTitle={props.subTitle} />
            </div>
            <div className="ButtonContainer">
                <Link className="HomePage-Button-Link" to="/about">About</Link>
                <Link className="HomePage-Button-Link" to="/publications">Publications</Link>
                <Link className="HomePage-Button-Link" to="/editorials">Editorial Work</Link>
                <Link className="HomePage-Button-Link" to="/contact">Contact</Link>
            </div>
        </div>
    );
}

export default HomePage;