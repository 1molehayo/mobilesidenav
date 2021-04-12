import axios from '../../services/axios';
import {
  GET_POSTS_FAIL,
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
} from './types.actions';

export const getPosts = () => async dispatch => {
  dispatch({
    type: GET_POSTS_START,
  });

  try {
    let result = await axios.get('posts?_start=0&_limit=20');

    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: GET_POSTS_FAIL,
      error,
    });
    throw error;
  }
};
