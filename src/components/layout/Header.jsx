import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">
          <img src="./images/logo.svg" alt="로고" />
        </Link>
        <button type="submit">로그아웃</button>
      </h1>
    </header>
  );
};

export default Header;
