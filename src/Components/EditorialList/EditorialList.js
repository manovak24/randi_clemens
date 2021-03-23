import React from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

import '../EditorialList/EditorialList.css';

class EditorialList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorials: [
                {
                    id: 1,
                    title: 'Introduction for "A Woman Possessed"',
                    link: 'https://www.passagesnorth.com/passagesnorthcom/2019/12/6/a-woman-possessed-by-becky-robison'
                },
                {
                    id: 2,
                    title: 'Introduction for “Without the Sun We Wouldn’t Know Love”',
                    link: 'https://www.passagesnorth.com/passagesnorthcom/2020/1/10/without-the-sun-we-wouldnt-know-love-by-felicity-fenton'
                },
                {
                    id: 3,
                    title: 'Introduction for “Three Poems”',
                    link: 'https://www.passagesnorth.com/passagesnorthcom/2018/12/11/three-poems-by-anastasia-stelse'
                },
                {
                    id: 4,
                    title: 'Introduction for “I Forgot the Eggs”',
                    link: 'https://www.passagesnorth.com/passagesnorthcom/2020/6/12/i-forgot-the-eggs-by-arji-manuelpillai'
                },
                {
                    id: 5,
                    title: 'Introduction for “The Lost Boy”',
                    link: 'https://www.passagesnorth.com/passagesnorthcom/2019/7/12/the-lost-boy-by-kathryn-merwin'
                },
                {
                    id: 6,
                    title: 'Introduction for “ldr blues beginning and ending with takis”',
                    link: 'https://www.passagesnorth.com/passagesnorthcom/2020/6/26/ldr-blues-beginning-and-ending-with-takis-by-alejandro-perez'
                },
                {
                    id: 7,
                    title: 'Introduction to “Bell Pepper and Beef Blues”',
                    link: 'https://www.passagesnorth.com/passagesnorthcom/bell-peppers-and-beef'
                }
            ],
            passages: [
                {
                    id: 1,
                    title: 'Issue 40',
                    link: 'https://www.passagesnorth.com/issue-40'
                },
                {
                    id: 2,
                    title: 'Issue 39',
                    link: 'https://www.passagesnorth.com/issue-39'
                }
            ]
        }
    }

    render() {
        return (
            <Row> 
                <Col  className="editorial-container">
                    <div className="passages-container">
                        <div>
                            <h1 id="title-tag">Passages North</h1>
                            <p>Managing Editor: Issue 42 forthcoming spring 2021</p>
                            <p>Associate Editor: 
                                <a href="https://www.passagesnorth.com/issue-40" target="_blank" rel="noopener noreferrer"> Issue 40</a>, 
                                <a href="https://www.passagesnorth.com/issue-39" target="_blank" rel="noopener noreferrer"> Issue 39</a>
                            </p>
                            <ul className="edit-list-container">
                                {this.state.editorials.map(editorial => (
                                    <li key={editorial.id} id="passages-links">   
                                        <a href={editorial.link} target="_blank" rel="noopener noreferrer">{editorial.title}</a>                     
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                
                    <div className="ninth-container">
                        <div>
                            <h1 id="title-tag">Ninth Letter</h1>
                            <p>Editorial Intern:
                                <a href="http://ninthletter.com/journal/147-13-2-fall-winter-2016" target="_blank" rel="noopener noreferrer"> Vol. 13 No. 2</a>,
                                <a href="http://www.ninthletter.com/journal/134-13-1-spring-summer-2016" target="_blank" rel="noopener noreferrer"> Vol. 13 No. 1</a>
                            </p>
                            <p>Editorial Assistant:
                                <a href="http://ninthletter.com/winter-2016/winter-16-main" target="_blank" rel="noopener noreferrer"> Winter 2016</a>
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default EditorialList;