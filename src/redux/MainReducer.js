import * as ActionTypes from './ActionTypes';

export const Main = (state = {
    lists: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LIST:
            var list = { title: action.payload, listId: state.lists.length, cards: [] };
            return { ...state, lists: state.lists.concat(list) };
        case ActionTypes.DELETE_LIST:
            var index = action.payload;
            return { ...state, lists: [...state.lists.slice(0, index), ...state.lists.slice(index + 1)] }
        case ActionTypes.ADD_CARD:
            var card = { title: action.payload.title, description: action.payload.description, comments: action.payload.comments, listId: action.payload.listId, cardId: state.lists.filter((list)=>list.listId === action.payload.listId)[0].cards.length };
            return {
                ...state, lists: state.lists.map((list) => {
                    if (list.listId === card.listId) {
                        list.cards.push({ listId: card.listId, title: card.title, description: card.description, comments: card.comments, cardId: card.cardId })
                    }
                    return list;
                })
            }
        case ActionTypes.DELETE_CARD:
            var cardId = action.payload.cardId;
            var listId = action.payload.listId;
            return {
                ...state, lists: state.lists.map((list) => {
                    if (list.listId === listId) {
                        list.cards = list.cards.filter((card) => {
                            return card.cardId !== cardId;
                        })
                    }
                    return list;
                })
            }
        case ActionTypes.UPDATE_CARD:
            var card = { listId: action.payload.listId, title: action.payload.title, description: action.payload.description, comments: action.payload.comments, cardId: action.payload.cardId };
            return {
                ...state, lists: state.lists.map((list) => {
                    if (list.listId === card.listId) {
                        list.cards[card.cardId] = card;
                    }
                    return list;
                })
            }
        default:
            return state;
    }
}