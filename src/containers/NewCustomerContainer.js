import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppFrame from './../components/AppFrame';
import CustomerEdit from '../components/CustomerEdit';
import createCustomer from '../actions/createCustomer';

class NewCustomerContainer extends Component {
    
    handleSubmit = (values) => this.props.createCustomer(values);

    handleOnBack = () => this.props.history.goBack();

    handleOnSubmitSusccess = () => this.props.history.goBack();

    renderBody = () => 
        <CustomerEdit
                    onSubmit={this.handleSubmit}
                    onSubmitSuccess={this.handleOnSubmitSusccess}
                    onBack={this.handleOnBack}
        />

    render() {
        return (
            <div>
            <AppFrame
                header={`Nuevo Cliente`}
                body={this.renderBody()}>
            </AppFrame>
        </div>
        )
    }
}

NewCustomerContainer.propTypes = {
    createCustomer: PropTypes.func.isRequired,
};

export default withRouter(connect(null,{ createCustomer})(NewCustomerContainer));
