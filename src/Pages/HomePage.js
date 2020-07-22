import React from 'react';
import Hero from '../Components/Hero/Hero';
import './HomePage.css'
import { Link } from 'react-router-dom';

function HomePage(props) {
    return(
        <div className="homePage">
            <div>
                <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            </div>
            <div className="ButtonContainers">
                <div className="HomePage-Buttons">
                    <Link className="HomePage-Button-Link" to="/publications">Publications</Link>
                    <Link className="HomePage-Button-Link" to="/editorials">Editorial Work</Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;