import {FETCH_CUSTOMERS} from './../constants';
import { createAction } from 'redux-actions';
import { apiGet } from '../api';
import { urlCustomers } from '../api/urls';


// () => 
// () puede tener el payload de la invocation (customersContainer) y posteriormente habría que hacer la petición del provaider
export const fetchCustomers = createAction(FETCH_CUSTOMERS, apiGet(urlCustomers));
