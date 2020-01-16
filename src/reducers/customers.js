import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS } from '../constants';

//TODO se pueden poner mas de una actions
export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => [ ...action.payload],
    },[]
);