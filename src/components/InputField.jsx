import React from 'react';

const InputField = ({ type, field }) => {
  return (
    <input
      type={type}
      placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
      name={field}
      className="block rounded-lg border border-gray-800 w-full bg-gray-400 text-white placeholder-gray-700 p-5"
    />
  );
};

export default InputField;
