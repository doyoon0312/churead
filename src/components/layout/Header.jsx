import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="max-w-[572px] fixed top-0 left-0 right-0 mx-auto">
      <h1 className="py-2 text-center grid grid-cols-3">
        <Link to="/" className="w-fit inline-block col-start-2">
          <img src="./images/logo.svg" className="mx-auto h-18" alt="로고" />
        </Link>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className=" font-bold p-2 bg-white text-gray-600 rounded-xl"
          >
            로그아웃
          </button>
        </div>
      </h1>
    </header>
  );
};

export default Header;
