import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import AppFrame from './../components/AppFrame.js';
import CustomerLogin from '../components/CustomerLogin.js';
import fetchUsers from '../actions/fetchUsers';
import fetchUser from '../actions/fetchUser';


class HomeContainer extends Component {
    
    //handleOnClick = () => this.props.history.push('/customers');
    onBack = () => console.log("back");

    handleSubmit = (values) => {
        //hacemos el return para que funcione el submitting de customerEdit.js
        //llamar al fetch del usuario
        return this.props.fetchUser(values);
    };

    handleOnSubmitSusccess = () => this.props.history.push('/customers');
    
    componentDidMount() {
        this.props.fetchUsers();
    }
    
    render() {
        return (
            <div>
               <AppFrame 
                    header='Home'
                    body={
                        <div>
                           <CustomerLogin {...this.props}
                                onSubmit={this.handleSubmit}
                                onSubmitSuccess={this.handleOnSubmitSusccess}
                            />
                        </div>}
                >
               </AppFrame>
            </div>
        )
    }
};

HomeContainer.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    user: state.user
});

export default withRouter(connect(mapStateToProps, { fetchUsers, fetchUser })(HomeContainer));
