import React from 'react';
import Hero from '../Components/Hero/Hero';

class Freelance extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Hero title={this.props.title} />
                </div>
                <div className="freelance-container">
                    <div className="consultation-container">
                        <h1>Creative Consultation</h1>
                        <p>Workshop style critique and feedback of creative writing</p>
                    </div>
                    <div className="education-container">
                        <h1>Education</h1>
                        <p>Creative workshops, composition and essay tutoring, proofreading</p>
                    </div>
                    <div className="marketing-social-container">
                        <h1>Marketing and Social media</h1>
                        <p>Copywriting, content creation including blog and social media posts, branding, and SEO</p>
                    </div>
                    <div className="inquiry-container">
                        <p>Please contact for inquires and rates</p>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Freelance;