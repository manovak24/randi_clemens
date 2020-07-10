import React from 'react';
import Hero from '../Components/Hero/Hero';
import Content from '../Components/Content/Content';

function EditorialsPage(props) {
    return(
        <div>
            <Hero title={props.title} />
            <Content>
                    <p>Add</p>
                    <p>Publications</p>
                    <p>List</p>
            </Content>
        </div> 
    )
}

export default EditorialsPage;