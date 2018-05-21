import uuid from 'uuid';
import { 
  ADD_DATA, 
  START_EDIT,
  REMOVE_ALL_DATA, 
  REMOVE_DATA,
  EDIT_DATA,
  CANCEL_EDIT,
  CANCEL_EDIT_ALL 
} from './index';



export const addData = ( payload = {} )=> ({
  type: ADD_DATA,
  payload: {
    id: uuid(),
    edit: false,
    ...payload
  }
});

export const startEdit = (payload = {}) => ({
  type: START_EDIT,
  payload
});

export const editData = (payload = {}) => ({
  type: EDIT_DATA,
  payload
});

export const cancelEdit = (payload = {}) => ({
  type: CANCEL_EDIT,
  payload
});

export const cancelEditAll = () => ({ type: CANCEL_EDIT_ALL });




export const removeData = (payload = {}) => ({
  type: REMOVE_DATA,
  payload
});

export const removeAllData = (payload = {}) =>({
  type: REMOVE_ALL_DATA,
  payload
});

