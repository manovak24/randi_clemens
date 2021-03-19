import React from 'react';
import Hero from '../Components/Hero/Hero';

class Freelance extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Hero title={this.props.title} />
                </div>
                <div>
                    <h1>Hello World</h1>
                </div>
            </div>
            
        )
    }
}

export default Freelance;