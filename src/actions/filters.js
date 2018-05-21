import { TEXT_FILTER, SORT_BY, SET_ACTIVE_OPTION } from './index';

export const textFilter = (payload={}) => ({
  type: TEXT_FILTER,
  payload
});

export const sortData = (payload={}) => ({
  type: SORT_BY,
  payload
});

export const setActiveOption = (payload={}) => ({
  type: SET_ACTIVE_OPTION,
  payload
});