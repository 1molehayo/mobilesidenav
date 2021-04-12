import {
  GET_POSTS_FAIL,
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
} from '../actions/types.actions';

import {updateObject} from '../../utility';

const INITIAL_STATE = {
  error: null,
  loading: false,
  posts: null,
  singlePost: null,
};

const getPostsStart = state =>
  updateObject(state, {error: null, loading: true});

const getPostsSuccess = (state, action) =>
  updateObject(state, {
    loading: false,
    posts: action.payload,
  });

const getPostsFail = (state, action) =>
  updateObject(state, {
    error: action.payload,
    loading: false,
  });

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POSTS_START:
      return getPostsStart(state);
    case GET_POSTS_SUCCESS:
      return getPostsSuccess(state, action);
    case GET_POSTS_FAIL:
      return getPostsFail(state, action);
    default:
      return state;
  }
};
