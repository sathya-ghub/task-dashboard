import React, { Component } from 'react';
import { LocalForm, Control, Errors } from 'react-redux-form';
import { Modal, ModalHeader, ModalBody, Button, Label } from 'reactstrap';

const minLength = (len) => (val) => val && (val.length >= len);

class CardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCardModalOpen: false
    }

    this.toggleCardModal = this.toggleCardModal.bind(this);
  }

  toggleCardModal() {
    this.setState({
      isCardModalOpen: !this.state.isCardModalOpen
    })
  }

  handleSubmit(values) {
    if (this.props.actionTitle === 'Add') {
      this.props.addCard(values, this.props.listId)
    } else {
      this.props.updateCard(values, this.props.cardId, this.props.listId)
    }
    this.toggleCardModal();
  }

  render() {
    return (
      <div>
        {this.props.actionTitle === 'Add' && <Button outline onClick={this.toggleCardModal} size="sm" color="primary">{this.props.actionTitle} Card</Button>}
        {this.props.actionTitle === 'Update' && <span onClick={this.toggleCardModal} className="fa fa-pencil-square-o fa-lg edit-icon" aria-hidden="true"></span>}
        <Modal isOpen={this.state.isCardModalOpen} toggle={this.toggleCardModal}>
          <ModalHeader>{this.props.actionTitle} Card</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <div className="form-group">
                <Label htmlFor="title">Title</Label>
                <Control.text model=".title" className="form-control" autoComplete="off" validators={{ minLength: minLength(3) }}></Control.text>
                <Errors className="text-danger" model=".title" show="touched" messages={{ minLength: "Must be at least 3 characters" }} />
              </div>
              <div className="form-group">
                <Label htmlFor="desription">Description</Label>
                <Control.text model=".description" className="form-control" autoComplete="off"></Control.text>
              </div>
              <div className="form-group">
                <Label htmlFor="comments">Comments</Label>
                <Control.textarea model=".comments" className="form-control" autoComplete="off"></Control.textarea>
              </div>
              <div className="form-group">
                <Button type="submit" color="primary">{this.props.actionTitle}</Button>
              </div>
            </LocalForm>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default CardForm;
