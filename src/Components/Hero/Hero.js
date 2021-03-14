import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './Hero.css';


function Hero(props) {
    return (
        <Jumbotron className="jumbotron-container bg-transparent">
            <Container className="jumbotron-elements">
                { props.title && <h1 style={{ fontSize: '3.5rem', fontWeight: '700' }}>{props.title}</h1> }
                { props.subTitle && <h2 style={{ fontWeight:'700' }}>{props.subTitle}</h2> }
            </Container>
        </Jumbotron>
    );
}

export default Hero;