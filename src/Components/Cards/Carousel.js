import React from 'react';
import randi from '../../Assets/randi.jpg';
import Card from './Cards';
import Container from 'react-bootstrap/container';

import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Card 0',
                    subTitle: 'Add subtitle',
                    imgSrc: randi,
                    link: 'https://www.nmu.edu/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Card 1',
                    subTitle: 'Add subtitle',
                    imgSrc: randi,
                    link: 'https://www.nmu.edu/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Card 2',
                    subTitle: 'Add subtitle',
                    imgSrc: randi,
                    link: 'https://www.nmu.edu/',
                    selected: false
                }
            ]
        };
        this.makeItems = this.makeItems.bind(this);
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(items => {
            if(items.id !== id) {
                items.selected = false;
            }
        });
        this.setState({ items });
    }

    makeItems(items) {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;