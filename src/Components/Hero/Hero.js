import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './Hero.css';


function Hero(props) {
    return (
        <Jumbotron className="jumbotron-container bg-transparent">
            <Container className="jumbotron-elements">
                { props.title && <h1>{props.title}</h1> }
                { props.subTitle && <h2>{props.subTitle}</h2> }
            </Container>
        </Jumbotron>
    );
}

export default Hero;