import React from 'react';

export const MyField = ({input, meta, type = 'text', label, name}) => (
    <div>
      <label htmlFor={name}>
        {label}
        {' '}
      </label>
      <input {...input} className="form-control" type={type} />
      { meta.touched && meta.error && <div className="alert alert-danger" role="alert">{ meta.error }</div>}
      <br/>
    </div>
  );
