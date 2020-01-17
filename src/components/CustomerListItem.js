import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CustomerListItem = ({
  name, editAction, delAction, dni, urlPath,
}) => (
    <div className="container">
      <hr/>
      <div className="row">
        <div className="col-6">
          <Link to={`${urlPath}${dni}`}>{name}</Link>
        </div>
        <div className="col-3">
          <Link to={`${urlPath}${dni}/edit`}>{editAction}</Link>
        </div>
        <div className="col-3">
          <Link to={`${urlPath}${dni}/del`}>{delAction}</Link>
        </div>
    </div>
    
  </div>
);

CustomerListItem.propTypes = {
  name: PropTypes.string.isRequired,
  editAction: PropTypes.string.isRequired,
  delAction: PropTypes.string.isRequired,
  urlPath: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
};

export default CustomerListItem;
