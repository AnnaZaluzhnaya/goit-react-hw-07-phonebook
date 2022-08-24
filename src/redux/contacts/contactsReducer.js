import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import * as contactsActions from './contactsActions';
import {
  fetchContacts,
  addContacts,
  removeContacts,
} from './contactsOperations';

const entities = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContacts.fulfilled]: (state, action) => [action.payload, ...state],
  [removeContacts.fulfilled]: (state, action) =>
    state.filter(item => item.id !== action.payload.id),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
});

export default combineReducers({
  entities,
  isLoading,
  error,
});
