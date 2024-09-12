import React from 'react';

const LoginButton = ({ text, className }) => {
  return (
    <button type="button" className={className}>
      {text}
    </button>
  );
};

export default LoginButton;
