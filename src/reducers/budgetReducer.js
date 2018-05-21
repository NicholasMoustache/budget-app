import { 
  adding, 
  startEditing,
  removingAll, 
  removing, 
  editing, 
  canceling } from './utilityFunctions';
import { 
  ADD_DATA, 
  START_EDIT,
  REMOVE_ALL_DATA, 
  REMOVE_DATA, 
  EDIT_DATA, 
  CANCEL_EDIT } from '../actions/index';


  const initialState = {
  incomes:[],
  expenses:[]
}


export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return adding(action, state);
    case START_EDIT:
      return startEditing(action, state);
    case EDIT_DATA: 
      return editing(action, state);
    case CANCEL_EDIT: 
      return canceling(action, state);
    case REMOVE_ALL_DATA:
      return removingAll(action, state);
    case REMOVE_DATA:
      return removing(action, state);
    default:
      return state;
  }
}