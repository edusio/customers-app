import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form';

import { MyField } from './generic/MyField';
import CustomersAction from './CustomersAction';

class CustomerLogin extends Component {
    render() {
        const { handleSubmit, submitting} = this.props;

        return (
            <div>
                <h2>Formulario de acceso.</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                    <Field
                        name="name"
                        component={MyField}
                        type="text"
                        label="Usuario"
                    />
                    <Field
                        name="pass"
                        component={MyField}
                        type="text"
                        label="Contraseña"
                    />
                    <CustomersAction>
                        <div>
                            <button type="submit"  disabled={submitting} className="btn btn-primary">Aceptar</button>
                        </div>
                    </CustomersAction>
                    </div>
                </form>
               
            </div>
        )
    }
};

CustomerLogin.propTypes = {

};

const CustomerLoginForm = reduxForm(
    {
        form: 'CustomerLogin',
    }
)(CustomerLogin);

export default CustomerLoginForm;
