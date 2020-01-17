import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';

const CustomerList = ({ customers, urlPath }) => (
  <div className="col-12">
    
    <div className="customers-list ">
      {
                    customers.map((customer) => (
                      <CustomerListItem
                        key={customer.dni}
                        dni={customer.dni}
                        name={customer.name}
                        editAction="Editar"
                        delAction="Eliminar"
                        urlPath={urlPath}
                      />
                    ))
                }
    </div>
  </div>
);

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
  urlPath: PropTypes.string.isRequired,
};

export default CustomerList;
