import React from 'react';
import emailjs from 'emailjs-com';

import Hero from '../Components/Hero/Hero';
import Content from '../Components/Content/Content';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                } 
            })
            .catch(err => {
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })

    }

    render() {
        return (
            <div>
                <Hero title={this.props.title} />
                <Content>
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

                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                    </Form>
                </Content>
            </div>
        )
    }
}

export default ContactPage;