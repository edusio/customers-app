import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import { connect} from 'react-redux';

import fetchCustomers from './../actions/fetchCustomers';
import AppFrame from './../components/AppFrame';
import CustomerList from './../components/CustomerList';
import CustomersAction from '../components/CustomersAction';
import { getCustomers } from '../selectors/customers';
import { accessControl } from '../helpers/accessControl';
import { CUSTOMER_LIST, CUSTOMER_VIEW } from '../constants/permission';

class CustomersContainer extends Component {
    
    componentDidMount() {
        if(this.props.customers.length === 0) {
            this.props.fetchCustomers();
        }
    }

    handleAddNew = () => {
        this.props.history.push('customers/new');
    }

    renderBody = (customers, user) => (
        <div>
            <CustomerList 
                customers={customers} 
                urlPath={'customers/'}
                user
            />
            <CustomersAction>
                <button onClick={this.handleAddNew} type="button" className ="btn btn-primary">Nuevo Cliente</button>
            </CustomersAction>
        </div>
    );

    render() {
        const { customers } = this.props;
        return (
            <div>
                <AppFrame 
                    header={'Listado de clientes'}
                    body={this.renderBody(customers)}>
                </AppFrame>
            </div>
        )
    }
};

CustomersContainer.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired,
    customers: PropTypes.array.isRequired,
};

CustomersContainer.defaultProps = {
    customers:  [],
};

const mapStateToProps = state => ({
    customers: getCustomers(state),
    user: state.user
});

export default withRouter(connect(mapStateToProps, { fetchCustomers })(accessControl([CUSTOMER_LIST, CUSTOMER_VIEW])(CustomersContainer)));
