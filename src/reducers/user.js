import { handleActions } from 'redux-actions';
import { FETCH_USERS, FETCH_USER } from '../constants';

export const user = handleActions({
    [FETCH_USERS]: (state, action) => [ ...action.payload],
    [FETCH_USER]: (state, action) => state.find(u =>  u.name === action.payload.name && u.pass===action.payload.pass) || state
}, []);