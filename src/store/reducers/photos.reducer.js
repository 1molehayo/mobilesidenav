import {
  GET_PHOTOS_FAIL,
  GET_PHOTOS_START,
  GET_PHOTOS_SUCCESS,
} from '../actions/types.actions';

import {updateObject} from '../../utility';

const INITIAL_STATE = {
  error: null,
  loading: false,
  photos: null,
};

const getPhotosStart = state =>
  updateObject(state, {error: null, loading: true});

const getPhotosSuccess = (state, action) =>
  updateObject(state, {
    loading: false,
    photos: action.payload,
  });

const getPhotosFail = (state, action) =>
  updateObject(state, {
    error: action.payload,
    loading: false,
  });

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PHOTOS_START:
      return getPhotosStart(state);
    case GET_PHOTOS_SUCCESS:
      return getPhotosSuccess(state, action);
    case GET_PHOTOS_FAIL:
      return getPhotosFail(state, action);
    default:
      return state;
  }
};
