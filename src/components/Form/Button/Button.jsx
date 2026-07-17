import React from 'react';
import './Button.css';

const Button = ({ label, type, disabled }) => {
  return (
    <button type={type} className="button" disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
