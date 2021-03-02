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
            <Hero title={props.title} className="hero"/>
            <Content>
                <Container>
                    <Row className="justify-content-space-evenly">
                        <Col xs={12} md={4} style={{marginRight: "3rem", paddingRight: "1rem"}}>
                            <Image src={randi} className="picture rounded mx-auto d-block" roundedCircle />
                        </Col>
                        <Col xs={12} md={7}>
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
                        </Col>
                    </Row>
                </Container>
            </Content>
        </div>
    )
}

export default AboutPage;