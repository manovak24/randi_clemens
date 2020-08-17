import React from 'react';

import Hero from '../Components/Hero/Hero';
import Content from '../Components/Content/Content';
import SocialFollow from '../Components/SocialFollow/SocialFollow';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { MdEmail } from 'react-icons/md';
import Container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: '',
            user_email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true
        });

        emailjs.sendForm('gmail', 'testing', event.target, 'user_rQF8cs4fYnfBs2O7qJ0gs')
            .then(res => {
                Swal.fire({
                    title: 'Email Successfully Sent',
                    icon: 'success'
                  })
            })
            .catch(err => {
                Swal.fire({
                    title: 'Email Failed to Send',
                    icon: 'error'
                  })
                  console.error('Email Error:', err)
            })

    }

    render() {
        return (
            <div>
                <Hero title={this.props.title} />
                <Content>
                    <h5>Please feel free to contact me via my social media pages, email address provided below or the contact form. I will respond as soon as possible</h5>
                    <br></br>
                    <Container>
                        <Row>
                            <Col sm="auto">
                                <a href="randi"><MdEmail /> randiclemens@gmail.com</a>
                                <SocialFollow />
                            </Col>
                            <Col>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group>
                                        <Form.Label htmlFor="full-name">Full Name</Form.Label>
                                        <Form.Control id="full-name" name="user_name" type="text" value={this.state.name} onChange={this.handleChange} />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label htmlFor="email">Email</Form.Label>
                                        <Form.Control id="email" name="user_email" type="email" value={this.state.email} onChange={this.handleChange} />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label htmlFor="message">Message</Form.Label>
                                        <Form.Control id="message" name="message" as="textarea" row="3" value={this.state.message} onChange={this.handleChange} />
                                    </Form.Group>

                                    <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                                        Send
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </Content>
            </div>
        )
    }
}

export default ContactPage;