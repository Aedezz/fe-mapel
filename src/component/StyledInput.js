import React from 'react';
import '../css/Label.css';

const StyledInput = ({ id, name, value, onChange, placeholder, icon: Icon, type = 'text', required = false }) => (
  <div className="floating-outlined-field">
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="floating-input peer"
      placeholder=" " // Keep placeholder empty to enable floating label
      required={required}
    />
    <label
      htmlFor={id}
      className="floating-label peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4"
    >
      {placeholder}
    </label>
    {Icon && (
      <Icon className="input-icon" />
    )}
  </div>
);

export default StyledInput;
