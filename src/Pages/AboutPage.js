import React from 'react';
import Hero from '../Components/Hero/Hero';
import Content from '../Components/Content/Content';

function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title} />
            <Content>
                <p>Add about info here</p>
                <p>More info</p>
                <p>Even more info</p>
            </Content>
        </div>
    )
}

export default AboutPage;