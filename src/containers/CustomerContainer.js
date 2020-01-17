import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';

import AppFrame from './../components/AppFrame';
import { getCustomerDni } from '../selectors/customers';
import CustomerEdit from '../components/CustomerEdit';
import CustomerData from '../components/CustomerData';
import fetchCustomers from './../actions/fetchCustomers';
import updateCustomer from '../actions/updateCustomer';
import deleteCustomer from '../actions/deleteCustomer';

class CustomerContainer extends Component {
    
    handleSubmit = (values) => {
        const { id } = values;
        //hacemos el return para que funcione el submitting de customerEdit.js
        return this.props.updateCustomer(id, values);
    };

    handleOnBack = () => {
        this.props.history.goBack();
    };

    handleOnSubmitSusccess = () => {
        this.props.history.goBack();
    };

    handleOnDelete = (id) => {
        this.props.deleteCustomer(id).then(() => {
            this.props.history.goBack();
        });
    };

    renderCustomerControl = (isEdit, isDelete) => {
        const CustomerControl = isEdit ? CustomerEdit : CustomerData;
        return <CustomerControl {...this.props.customer} 
                    onSubmit={this.handleSubmit}
                    onSubmitSuccess={this.handleOnSubmitSusccess}
                    onBack={this.handleOnBack}
                    isDeleteAllow={!!isDelete}
                    onDelete={this.handleOnDelete}
                />;
    };

    renderBody = () => (
        <Route path="/customers/:dni/edit" children={
            ({ match: isEdit }) => (
                <Route path="/customers/:dni/del" children={
                    ({ match: isDelete }) => (
                        this.renderCustomerControl(isEdit, isDelete)
                )}/>    
        )}/>
    );

    componentDidMount() {
        if(!this.props.customer) {
            this.props.fetchCustomers();
        }
    }

    render() {
        return (
            <div>
                <AppFrame
                    header={`Cliente ${this.props.dni}`}
                    body={this.renderBody()}>
                </AppFrame>
            </div>
        );
    }
}

CustomerContainer.propTypes = {
    dni: PropTypes.string.isRequired,
    customer: PropTypes.object,
    fetchCustomers: PropTypes.func.isRequired,
    updateCustomer: PropTypes.func.isRequired,
    deleteCustomer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) =>({
    customer: getCustomerDni(state, props),
});

export default withRouter(connect(mapStateToProps, {
    fetchCustomers,
    updateCustomer,
    deleteCustomer,
})(CustomerContainer));