import React from 'react';
import Hero from '../Components/Hero/Hero';
import EditorialList from '../Components/EditorialList/EditorialList';

function EditorialsPage(props) {
    return(
        <div>
            <div>
                <Hero title={props.title} />
            </div>
            
            <EditorialList />
            
        </div> 
    )
}

export default EditorialsPage;