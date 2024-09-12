import React from 'react';

const InputField = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name="Email"
      className="block rounded-lg border border-gray-500"
      style={{ backgroundColor: '#F3F5F726' }}
    />
  );
};

export default InputField;
