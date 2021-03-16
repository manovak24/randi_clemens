import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './Hero.css';


function Hero(props) {
    return (
        <Jumbotron className="jumbotron-container">
            <Container className="jumbotron-elements">
                { props.title && <h1>{props.title}</h1> }
                { props.subTitle && <p>{props.subTitle}</p> }
            </Container>
        </Jumbotron>
    );
}

export default Hero;