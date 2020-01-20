import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';

import CustomersAction from './CustomersAction';
import { accessControl } from '../helpers/accessControl';
import { CUSTOMER_EDIT } from '../constants/permission';
import { MyField } from './generic/MyField';

// TODO refactor in utils/validators.js
const isRequired = (value) => (
  !value && ' Este campo es requerido'
);

const isNumber = (value) => isNaN(Number(value)) && 'El campo debe ser un número';

const validate = (values) => {
  const error = { };

  return error;
};

const toNumber = (value) => value && parseInt(value);

// submitting y handleSubmit vienen de redux-form
const CustomerEdit = ({ handleSubmit, submitting, onBack }) => (
  <div>
    <h2>Edición cliente</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Field
            name="name"
            component={MyField}
            type="text"
            label="Nombre"
          />
          <Field
            name="dni"
            component={MyField}
            type="text"
            validate={isRequired}
            label="Dni"
          />
          <Field
            name="age"
            component={MyField}
            type="number"
            validate={[isNumber]}
            parse={toNumber}
            label="Edad"
          />
          <CustomersAction>
            <div>
              <button type="submit" disabled={submitting} className="btn btn-primary">Aceptar</button>
              <button type="button" onClick={onBack} className="btn btn-secondary">Cancelar</button>
            </div>
          </CustomersAction>
          </div>
      </form>
  </div>
);

CustomerEdit.propTypes = {
  name: PropTypes.string,
  dni: PropTypes.string,
  age: PropTypes.number,
  onBack: PropTypes.func,
};

const CustomerEditForm = reduxForm(
  {
    form: 'CustomerEdit',
    validate,
  },
)(CustomerEdit);

export default accessControl([CUSTOMER_EDIT])(setPropsAsInitial(CustomerEditForm));
