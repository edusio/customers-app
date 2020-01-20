import { createAction } from 'redux-actions';
import { FETCH_USERS } from '../constants';
import { apiGet } from '../api';
import { urlUsers } from '../api/urls';

const fetchUsers = createAction(
  FETCH_USERS,
  apiGet(urlUsers),
);
export default fetchUsers;
