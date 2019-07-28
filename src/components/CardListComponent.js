import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import CardForm from './CardFormComponent';

class CardList extends Component {

    onCardDragStart = (e, card) => {
        let cardData = JSON.stringify(card);
        e.dataTransfer.setData('card', cardData);
    }

    render() {
        const Cards = this.props.cards.map((card, index) => {
            return (
                <Card key={index} className="border border-light rounded mb-3" draggable onDragStart={(e) => this.onCardDragStart(e, card)}>
                    <CardBody className="d-flex justify-content-between">
                        <div className="card-data-layout">
                            <CardTitle>{card.title}</CardTitle>
                            <CardSubtitle className="font-weight-light">{card.description}</CardSubtitle>
                            <CardText className="font-weight-light">{card.comments}</CardText>
                        </div>
                        <div className="card-data-layout align-items-end pl-1">
                            <button type="button" className="close" aria-label="Close" onClick={() => this.props.deleteCard(card.cardId, this.props.listId)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <CardForm actionTitle="Update" updateCard={this.props.updateCard} cardId={card.cardId} listId={this.props.listId} />
                        </div>
                    </CardBody>
                </Card>
            );
        });

        return (
            <div className="col-12">
                {Cards}
            </div>
        );
    }
}

export default CardList;