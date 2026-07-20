import React from 'react';
import './Input.css';

const Input = ({ label, type, name, value, error, onChange, onBlur }) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <input
        type="text"
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="input"
      />
      {error && <p className="input-error">{error}</p>}
    </div>
  );
};

export default Input;
