import React, { Component } from 'react';
import CardList from './CardListComponent';
import CardForm from './CardFormComponent';
import { Button } from 'reactstrap';

class List extends Component {

  onCardDragOver = (e) => {
    e.preventDefault();
  }

  onCardDrop = (e, listId) => {
    let card = JSON.parse(e.dataTransfer.getData('card'));
    
    // delete the card from the old list
    this.props.deleteCard(card.cardId, card.listId);
    
    // add a card to the new list
    this.props.addCard(card, listId);
  }

  render() {
    const lists = this.props.lists.map((list, index) => {
      return (
        <div key={index} className="list-body m-3 border border-primary rounded-sm p-3" onDragOver={(e) => this.onCardDragOver(e)} onDrop={(e) => this.onCardDrop(e, list.listId)}>
          <div className="pl-3">
            <h5 className="text-left">{list.title}</h5>
          </div>
          <div>
            <CardList listId={list.listId} cards={list.cards} deleteCard={this.props.deleteCard} updateCard={this.props.updateCard} />
          </div>
          <div className="d-flex justify-content-between pl-3 pr-3">
            <CardForm actionTitle="Add" addCard={this.props.addCard} updateCard={this.props.updateCard} deleteCard={this.props.deleteCard} listId={list.listId} />
            <Button size="sm" outline color="danger" onClick={() => this.props.deleteList(index)}>
              Delete
            </Button>
          </div>
        </div>
      );
    });

    return (
      <div className="d-flex flex-wrap justify-content-start">
        {lists}
      </div>
    );
  }
};

export default List;
