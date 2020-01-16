import React from 'react';
import PropTypes from 'prop-types';
import CustomersAction from './CustomersAction';

const CustomerData = ({
  name, dni, age, onBack,
}) => (
  <div>
    <div className="customer-data">
      <h2>Datos del cliente</h2>
      <div>
        <strong>Nombre </strong>
        <i>{name}</i>
      </div>
      <div>
        <strong>Dni </strong>
        <i>{dni}</i>
      </div>
      <div>
        <strong>Edad </strong>
        <i>{age}</i>
      </div>
      <CustomersAction>
        <button onClick={onBack}>Volver</button>
      </CustomersAction>
    </div>
  </div>
);

CustomerData.propTypes = {
  name: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  age: PropTypes.number,
  onBack: PropTypes.func.isRequired,
};

export default CustomerData;
