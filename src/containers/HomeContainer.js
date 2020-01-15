import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import AppFrame from './../components/AppFrame.js';
import CustomersAction from './../components/CustomersAction.js';

class HomeContainer extends Component {
    
    handleOnClick = () => {
        console.log("handleOnClick");
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
               <AppFrame 
                    header='Home'
                    body={
                        <div>
                            Esta en la pantalla inicial 
                            <CustomersAction>
                                <button onClick={this.handleOnClick}>Listado de clientes</button>
                            </CustomersAction>
                        </div>}
                >
               </AppFrame>
            </div>
        )
    }
}

export default withRouter(HomeContainer);
