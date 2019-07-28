import * as ActionTypes from './ActionTypes';

export const addList = (listData) => (dispatch) => {
    dispatch({
        type: ActionTypes.ADD_LIST,
        payload: listData
    })
}

export const deleteList = (listData) => (dispatch) => {
    dispatch({
        type: ActionTypes.DELETE_LIST,
        payload: listData
    })
}

export const addCard = (cardData, listId) => (dispatch) => {
    dispatch({
        type: ActionTypes.ADD_CARD,
        payload: {
            listId: listId,
            title: cardData.title,
            description: cardData.description,
            comments: cardData.comments
        }
    })
}

export const deleteCard = (cardId, listId) => (dispatch) => {
    dispatch({
        type: ActionTypes.DELETE_CARD,
        payload: {
            cardId: cardId,
            listId: listId 
        }
    })
}

export const updateCard = (cardData, cardId, listId) => (dispatch) => {
    dispatch({
        type: ActionTypes.UPDATE_CARD,
        payload: {
            listId: listId,
            cardId: cardId,
            title: cardData.title,
            description: cardData.description,
            comments: cardData.comments
        }
    })
}