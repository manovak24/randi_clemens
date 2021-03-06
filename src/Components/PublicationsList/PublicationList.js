import React from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import './PublicationList.css';

class PublicationsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            publications: [
                {
                    id: 1,
                    title: 'MCBH',
                    publisher: 'Montage Arts Journal',
                    link: 'https://issuu.com/montagejournal/docs/montage__final_',
                },
                {
                    id: 2,
                    title: 'For Catherine, 1938',
                    publisher: 'KNOB Book Review',
                    link: 'https://knobbookreview.wixsite.com/website/single-post/2017/05/16/For-Catherine-1938',
                },
                {
                    id: 3,
                    title: 'Nesting',
                    publisher: 'Up North Lit',
                    link: 'https://upnorthlit.org/randi-clemens-poetry',
                },
                {
                    id: 4,
                    title: 'Science and Industry',
                    publisher: 'Pidgeonholes',
                    link: 'http://pidgeonholes.com/2019/12/two-poems-37/',
                },
                {
                    id: 5,
                    title: 'Replication',
                    publisher: 'Pidgeonholes',
                    link: 'http://pidgeonholes.com/2019/12/two-poems-37/',
                },
                {
                    id: 6,
                    title: 'The American Family in the Diorama',
                    publisher: 'Meow Meow Pow Pow Lit',
                    link: 'https://www.meowmeowpowpowlit.com/recent/the-american-family-in-the-diorama-by-randi-clemens',
                },
                {
                    id: 7,
                    title: 'Northwind Article',
                    publisher: 'The Northwind',
                    link: 'https://www.thenorthwindonline.com/graduate-thesis-explores-poetry-and-human-body/',
                },
                {
                    id: 8,
                    title: 'The American Daughter in the Diorama',
                    publisher: 'LandLocked',
                    link: 'https://indd.adobe.com/view/1053f6b5-6a21-4c50-864b-a892db2b1d43',
                },
                {
                    id: 9,
                    title: 'Rapunzel Birthing',
                    publisher: 'LandLocked',
                    link: 'https://indd.adobe.com/view/1053f6b5-6a21-4c50-864b-a892db2b1d43',
                },
                {
                    id: 10,
                    title: 'Hysterectomy',
                    publisher: 'LandLocked',
                    link: 'https://indd.adobe.com/view/1053f6b5-6a21-4c50-864b-a892db2b1d43',
                },
                {
                    id: 10,
                    title: 'When My Mother YouTubes Cremation',
                    publisher: 'Lammergeier Magazine',
                    link: 'https://www.lammergeier.org/post/when-my-mother-randi-clemens',
                }
            ]
        };
    }

    pubList = (publications) => (
                <ul className="pub-container">
                    {publications.slice(0).reverse().map(publication => (
                        <li key={publication.id} className="list-container">
                            <Row>
                                <Col>
                                    <a href={publication.link} target="_blank" rel="noopener noreferrer">"{publication.title}"</a>
                                    <p>{publication.publisher}</p>
                                </Col>
                            </Row>
                        </li>
                    ))}
                </ul>
    )

    render() {
        return(
            <div>
                {this.pubList(this.state.publications)}
            </div>
        )
    }
}

export default PublicationsList;