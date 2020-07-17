import React from 'react';
import Hero from '../Components/Hero/Hero';
import './HomePage.css'

function HomePage(props) {
    return(
        <div className="homePage">
            <div>
                <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            </div>
            <div className="ButtonContainers">
                <div className="HomePage-Buttons">
                    <a>Publications</a>
                    <a>Editorials</a>
                </div>
            </div>
        </div>
    );
}

export default HomePage;