import { createAction } from 'redux-actions';
import { FETCH_USER } from '../constants';
//import { apiGet } from '../api';
//import { urlUsers } from '../api/urls';

const fetchUser = createAction(
  FETCH_USER
);

export default fetchUser;
