import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from '../Footer/Footer';
import HomePage from '../../Pages/HomePage';
import AboutPage from '../../Pages/AboutPage';
import ContactPage from '../../Pages/ContactPage';
import PublicationsPage from '../../Pages/PublicationsPage';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Randi Clemens',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Randi Clemens',
        subTitle: 'Add some text',
        text: 'Add some subtext'
      },
      publications: {
        title: 'Publications'
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Contact Me',
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="light" expand="lg">
            <Navbar.Brand>Randi Clemens</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/publications">Publications</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/publications" render={() => <PublicationsPage title={this.state.publications.title} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />

          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;
