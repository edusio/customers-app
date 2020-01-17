import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';

import CustomersAction from './CustomersAction';

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

// TO-Do Refactor a generic component
const MyField = ({
  input, meta, type = 'text', label, name,
}) => (
  <div>
    <label htmlFor={name}>
      {label}
      {' '}
    </label>
    <input {...input} className="form-control" type={type} />
    { meta.touched && meta.error && <div className="alert alert-danger" role="alert">{ meta.error }</div>}
    <br/>
  </div>
);

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

export default setPropsAsInitial(CustomerEditForm);
