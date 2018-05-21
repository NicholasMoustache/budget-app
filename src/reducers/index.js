import { combineReducers } from 'redux';
import budget from './budgetReducer';
import filters from './filterReducer';

export const rootReducer = combineReducers({ 
  budget,
  filters 
});