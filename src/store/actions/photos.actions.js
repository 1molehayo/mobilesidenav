import axios from '../../services/axios';
import {
  GET_PHOTOS_FAIL,
  GET_PHOTOS_START,
  GET_PHOTOS_SUCCESS,
} from './types.actions';

export const getPhotos = () => async dispatch => {
  dispatch({
    type: GET_PHOTOS_START,
  });

  try {
    let result = await axios.get('photos?_start=0&_limit=20');

    dispatch({
      type: GET_PHOTOS_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PHOTOS_FAIL,
      error,
    });
    throw error;
  }
};
