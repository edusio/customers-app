import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS, CREATE_CUSTOMER, UPDATE_CUSTOMERS } from '../constants';

// TODO se pueden poner mas de una actions
export const customers = handleActions({
  [FETCH_CUSTOMERS]: (state, action) => [...action.payload],
  [CREATE_CUSTOMER]: (state, action) => [...state, action.payload],
  [UPDATE_CUSTOMERS]: (state, action) => {

    const customerPayload = action.payload;
    const id = customerPayload.id;
    const customers = state;
    const initialvalue = [];
    
    const newCustomers = customers.reduce((acumulado, customer) => {
      if(customer.id === id) {
          return [...acumulado, customerPayload];
      }
      else {
        return [...acumulado, customer];
      }
    }, initialvalue);

    return newCustomers;
  }
}, []);
