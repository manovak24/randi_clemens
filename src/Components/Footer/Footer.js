import React from 'react';

import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SocialFollow from '../SocialFollow/SocialFollow';

class Footer extends React.Component {
    render() {
        return(
            <footer className="mt-0">
                <Container fluid={true}>
                    <Row className="border-top justify-content-between p-3 mt-1 d-flex">
                        <Col style={{textAlign:'left', padding:'0'}}>
                            <SocialFollow />
                        </Col>
                        <Col style={{textAlign:'right', padding:'0'}}>Novak North Designs</Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;