import React from 'react';

const Alert = ({ message }) =>
  message ? (
    <div
      style={{
        background: '#4caf50',
        color: '#fff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 4,
      }}
    >
      {message}
    </div>
  ) : null;

export default Alert;
