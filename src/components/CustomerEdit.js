import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';

const isRequired = value =>(
    !value && " Este campo es requerido"
);

const isNumber = value => (
    isNaN(Number(value)) && 'El campo debe ser un número'
);

const MyField = ({ input, meta, type ="text", label, name}) => (
    <div>
        <label htmlFor={name}>{label} </label>
        <input {...input} type={type} />
        { meta.touched && meta.error && <span>{ meta.error }</span> }
    </div>
);

const CustomerEdit = () => {
    return (
        <div>
            <h2>Edición cliente</h2>
            <form action="">
                <Field
                    name="name"
                    component= {MyField}
                    type="text"
                    validate={isRequired}
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
            </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
};

const CustomerEditForm = reduxForm({ form: 'CustomerEdit'})(CustomerEdit);

export default setPropsAsInitial(CustomerEditForm);