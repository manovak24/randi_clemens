import React from 'react';
import Hero from '../Components/Hero/Hero';
import Carousel from '../Components/Cards/Carousel';
import './HomePage.css'

function HomePage(props) {
    return(
        <div className="homePage">
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
        </div>
    );
}

export default HomePage;