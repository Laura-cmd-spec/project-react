
import { createStore } from 'redux';
import initialState from './initialState';
import strContains from '../utils/strContains.js'
import shortid from 'shortid';


export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = state =>{
  return state.columns
};

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const updateSearching = payload => ({ type: 'UPDATE_SEARCH', payload})


const reducer = (state, action) => {
    switch(action.type) {
      case 'ADD_COLUMN':
        return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
      case 'ADD_CARD':
        return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }]};
      case 'UPDATE_SEARCHSTRING':
        return { ...state, searchString: [...state.searchString, {...action.payload, id: shortid()}]};
      default:
        return state;
    }
  };


const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;