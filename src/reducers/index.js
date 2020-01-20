import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import { customers } from './customers';
import { user } from './user';
//import { CUSTOMER_VIEW, CUSTOMER_LIST, CUSTOMER_EDIT } from '../constants/permission';

/*const user = (state, actions) => (
  {
    permissions: [CUSTOMER_VIEW, CUSTOMER_LIST, CUSTOMER_EDIT]
  }
);*/

export default combineReducers({
  customers,
  form: reduxForm,
  user
});
