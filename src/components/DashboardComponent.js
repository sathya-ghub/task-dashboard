import React, { Component } from 'react';
import { Button, Label, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { connect } from 'react-redux';
import { addList, deleteList, addCard, deleteCard, updateCard } from '../redux/ActionCreators';
import List from './ListComponent';

const maxLength = (len) => (val) => !val || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

const mapStateToProps = state => {
  return {
    lists: state.list.lists
  }
}

const mapDispatchToProps = (dispatch) => ({
  addList: (title) => dispatch(addList(title)),
  deleteList: (index) => dispatch(deleteList(index)),
  addCard: (cardData, listId) => dispatch(addCard(cardData, listId)),
  deleteCard: (cardId, listId) => dispatch(deleteCard(cardId, listId)),
  updateCard: (cardData, cardId, listId) => dispatch(updateCard(cardData, cardId, listId))
})

class Dashboard extends Component {
  render() {
    const AddListForm = () => {
      return (
        <div className="col-12 text-center">
          <LocalForm onSubmit={values => this.props.addList(values.title)}>
            <Row>
              <Col xs={12} sm={12} md={4}>
                <Label htmlFor="list-title" className="col-form-label">Give your new list a title</Label>
              </Col>
              <Col xs={6} sm={8} md={4}>
                <Control.text model=".title" className="form-control" autoComplete="off" validators={{ minLength: minLength(3), maxLength: maxLength(15)}}/>
                <Errors className="text-danger" model=".title" show="touched" messages={{ minLength: "Must be at least 3 characters", maxLength: "Must be 15 characters or less" }} />
              </Col>
              <Col xs={6} sm={4} md={4}>
                <Button type="submit" color="primary" size="md">Add List</Button>
              </Col>
            </Row>
          </LocalForm>
        </div>
      );
    };

    return (
      <div>
        <div className="container-fluid main-header mb-5">
          <h3>Task Board</h3>
        </div>
        <div className="container">
          <div className="row">
            <AddListForm />
          </div>
          <div className="row mt-5">
              <List lists={this.props.lists} deleteList={this.props.deleteList} addCard={this.props.addCard} deleteCard={this.props.deleteCard} updateCard={this.props.updateCard}/>
          </div>
        </div>
      </div>  
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
