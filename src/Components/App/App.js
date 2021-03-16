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
import EditorialsPage from '../../Pages/EditorialsPage';
import ScrollToTop from '../scroll';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Randi Clemens',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Publications', path: '/publications' },
        { title: 'Editorials', path: '/editorials' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: 'Randi Clemens',
        subTitle: 'Writer ∙ Editor ∙ Educator'
      },
      publications: {
        title: 'Publications'
      },
      editorials: {
        title: 'Editorial Work'
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Contact Me'
      }
    }
  }

  setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded });
  }

  setNavClose = () => {
    this.setState({ navExpanded: false });
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" expand="md" onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
            <Navbar.Brand>
              <Link className="nav-brand" to="/">Randi Clemens</Link>
            </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto" onClick={this.setNavClose}>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/publications">Publications</Link>
                <Link className="nav-link" to="/editorials">Editorial Work</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/publications" render={() => <PublicationsPage title={this.state.publications.title} />} />
          <Route path="/editorials" render={() => <EditorialsPage title={this.state.editorials.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          

          <Footer />

        </Container>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;