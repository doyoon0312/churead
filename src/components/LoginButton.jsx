import React from 'react';

const LoginButton = ({ category, name, onClick }) => {
  return (
    <button
      type={category === 'login' ? 'submit' : 'button'}
      className={`p-5 ${
        category === 'login'
          ? 'bg-white text-gray-600 w-full rounded-xl'
          : 'w-full border border-gray-600 rounded-2xl flex items-center justify-center gap-4'
      }`}
      onClick={onClick}
    >
      {category === 'signlogin' && (
        <img src="./images/google.svg" alt="구글로고" />
      )}

      {name}
    </button>
  );
};

export default LoginButton;
