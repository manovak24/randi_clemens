import React from 'react';
import Hero from '../Components/Hero/Hero';
import './freelance.css';

import Consultation from '../Assets/001-compare.png';
import Education from '../Assets/002-target.png';
import Marketing from '../Assets/003-imac.png';
import { Link } from 'react-router-dom';

class Freelance extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Hero title={this.props.title} />
                </div>

                <div className="freelance-container">
                    
                    <div className="education-container box">
                        <img src={Education} alt="Education"/>
                        <h1>Education</h1>
                        <ul>
                            <li>Creative workshops</li>
                            <li>Composition</li>
                            <li>Essay tutoring, proofreading</li>
                        </ul>
                    </div>
                    <div className="consultation-containe box">
                        <img src={Consultation} alt="Consultation" />
                        <h1>Creative Consultation</h1>
                        <ul>
                            <li>Workshop style Critique</li>
                            <li>Feedback of creative writing</li>
                        </ul>
                    </div>
                    <div className="marketing-social-container box">
                        <img src={Marketing} alt="Market" />
                        <h1>Marketing and Social media</h1>
                        <ul>
                            <li>Copywriting</li>
                            <li>Content creation</li>
                            <ul>
                                <li>Blog posts</li>
                                <li>Social media posts</li>
                                <li>Branding</li>
                                <li>SEO</li>
                            </ul>
                        </ul>
                    </div>
                </div>

                <div className="inquiry-container">
                    <h1>Please <Link className="freelance-button-contact">contact</Link> for inquires and rates</h1>
                </div>

                <div style={{fontSize: '.8rem'}}>Icons made by <a href="https://www.flaticon.com/authors/nhor-phai" title="Nhor Phai">Nhor Phai</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
            
        )
    }
}

export default Freelance;