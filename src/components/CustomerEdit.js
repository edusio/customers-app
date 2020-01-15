import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';

import CustomersAction from './CustomersAction';

//TODO refactor in utils/validators.js
const isRequired = value =>(
    !value && " Este campo es requerido"
);

const isNumber = value => (
    isNaN(Number(value)) && 'El campo debe ser un número'
);

const validate = values => {
    const error = { };
    
    return error;
};

//TO-Do Refactor a generic component
const MyField = ({ input, meta, type ="text", label, name}) => (
    <div>
        <label htmlFor={name}>{label} </label>
        <input {...input} type={type} />
        { meta.touched && meta.error && <span>{ meta.error }</span> }
    </div>
);

//submitting y handleSubmit vienen de redux-form
const CustomerEdit = ({handleSubmit, submitting, onBack}) => {
    return (
        <div>
            <h2>Edición cliente</h2>
            <form onSubmit={handleSubmit}>
                <Field
                    name="name"
                    component= {MyField}
                    type="text"
                    
                    label="Nombre"
                />
                <Field
                    name="dni"
                    component= {MyField}
                    type="text"
                    validate={isRequired}
                    label="Dni"
                />
                <Field
                    name="age"
                    component={MyField}
                    type="number"
                    validate={[isNumber]}
                    label="Edad"
                />
                <CustomersAction>
                    <div>
                        <button type="submit" disabled={submitting}>Aceptar</button>
                        <button onClick={onBack}>Cancelar</button>
                    </div>
                </CustomersAction>
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack: PropTypes.func,
};

const CustomerEditForm = reduxForm(
    { 
        form: 'CustomerEdit',
        validate
    })(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);