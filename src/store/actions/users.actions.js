import axios from '../../services/axios';
import {
  GET_USERS_FAIL,
  GET_USERS_START,
  GET_USERS_SUCCESS,
} from './types.actions';

export const getUsers = () => async dispatch => {
  dispatch({
    type: GET_USERS_START,
  });

  try {
    let result = await axios.get('users?_start=0&_limit=20');

    dispatch({
      type: GET_USERS_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: GET_USERS_FAIL,
      error,
    });
    throw error;
  }
};
