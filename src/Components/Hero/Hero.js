import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Hero.css';


function Hero(props) {
    return (
        <Jumbotron className="bg-transparent jumbotron-fluid pd-o mb-0">
            <Container className="jumboContainer" fluid="true">
                <Row className="justify-content-center">
                    <Col md={8} sm={12}>
                        { props.title && <h1 className="display-1 font-weight-bolder border-bottom">{props.title}</h1> }
                        { props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3> }
                        { props.text && <h3 className="lead font-weight-light">{props.text}</h3> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Hero;