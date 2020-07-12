import React from 'react';
import Hero from '../Components/Hero/Hero';
import Content from '../Components/Content/Content';
import PublicationsList from '../Components/PublicationsList/PublicationList';

function PublicationsPage(props) {
    return(
        <div>
            <Hero title={props.title} />
            <Content>
                    <PublicationsList />
            </Content>
        </div>    
    )
}

export default PublicationsPage;