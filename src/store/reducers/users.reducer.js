import {
  GET_USERS_FAIL,
  GET_USERS_START,
  GET_USERS_SUCCESS,
} from '../actions/types.actions';

import {updateObject} from '../../utility';

const INITIAL_STATE = {
  error: null,
  loading: false,
  users: null,
};

const getUsersStart = state =>
  updateObject(state, {error: null, loading: true});

const getUsersSuccess = (state, action) =>
  updateObject(state, {
    loading: false,
    users: action.payload,
  });

const getUsersFail = (state, action) =>
  updateObject(state, {
    error: action.payload,
    loading: false,
  });

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS_START:
      return getUsersStart(state);
    case GET_USERS_SUCCESS:
      return getUsersSuccess(state, action);
    case GET_USERS_FAIL:
      return getUsersFail(state, action);
    default:
      return state;
  }
};
