import React from 'react';
import Hero from '../Components/Hero/Hero';

function EditorialsPage(props) {
    return(
        <div>
            <div>
                <Hero title={props.title} />
            </div>
            
            <div className="passages-container">
                <h1>Passages North</h1>
                <ul>
                    <li>Managing Editor: Issue 42 (forthcoming spring 2021)</li>
                    <li>Associate Editor: 
                        <a href="https://www.passagesnorth.com/issue-40" target="_blank" rel="noopener noreferrer">  Issue 40,</a>
                        <a href="https://www.passagesnorth.com/issue-39" target="_blank" rel="noopener noreferrer"> Issue 39</a>
                    </li>
                    <li><a href="https://www.passagesnorth.com/passagesnorthcom/2019/12/6/a-woman-possessed-by-becky-robison" target="_blank" rel="noopener noreferrer">Introduction for “A Woman Possessed”</a></li>
                </ul>
            </div>

            <div className="ninth-container">
                <h1>Ninth Letter</h1>
                <ul>
                    
                </ul>
            </div>
                    
        </div> 
    )
}

export default EditorialsPage;