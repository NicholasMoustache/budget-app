import { TEXT_FILTER, SORT_BY, SET_ACTIVE_OPTION } from '../actions/index';
import { filtering, sorting, settingActiveOption } from './utilityFunctions';

const initialState = {
  incomes: {
    text: '',
    sortBy: ''
  },
  expenses: {
    text: '',
    sortBy: ''
  },
  activeOption: "incomes"
}

export default (state=initialState, action) => {
  switch(action.type) {
    case TEXT_FILTER:
      return filtering(action, state);
    case SORT_BY:
      return sorting(action, state);
    case SET_ACTIVE_OPTION: 
      return settingActiveOption(action, state);
    default:
      return state;
  }
}