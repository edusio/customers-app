import React from 'react';
import PropTypes from 'prop-types';
import CustomersAction from './CustomersAction';

const CustomerData = ({
  name, dni, age, id, onBack, isDeleteAllow, onDelete
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
        <button type="button" className="btn btn-secondary"onClick={onBack}>Volver</button>
        {isDeleteAllow && <button onClick={() => onDelete(id)} type="button" className="btn btn-danger">Eliminar</button>}
      </CustomersAction>
    </div>
  </div>
);

CustomerData.propTypes = {
  name: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  age: PropTypes.number,
  id: PropTypes.number.isRequired,
  onBack: PropTypes.func.isRequired,
  isDeleteAllow: PropTypes.bool,
  onDelete: PropTypes.func,
};

export default CustomerData;
