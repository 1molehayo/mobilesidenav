import {combineReducers} from 'redux';
import photoReducer from './photos.reducer';
import postsReducer from './posts.reducer';
import usersReducer from './users.reducer';

export default combineReducers({
  photos: photoReducer,
  posts: postsReducer,
  users: usersReducer,
});
