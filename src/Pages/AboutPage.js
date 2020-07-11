import React from 'react';
import Hero from '../Components/Hero/Hero';
import Content from '../Components/Content/Content';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/container';
import Image from 'react-bootstrap/Image';

function AboutPage(props) {
    const randi = require('../Assets/randi.jpg');

    return(
        <div>
            <Hero title={props.title} />
            <Content>
                <Container>
                    <Row xs={3} md={3}>
                        <Image src={randi} roundedCircle />
                    </Row>
                    <Row>
                        <Col>
                            <br></br>
                            <p>Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater. Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.</p>
                            <p>Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater. Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.</p>
                            <p>Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater. Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.Hi! My name is Randi Clemensl. I am a writer, reader and ice cream eater.</p>
                        </Col>
                    </Row>
                    </Container>
            </Content>
        </div>
    )
}

export default AboutPage;