import React from 'react';
import { TiHome } from 'react-icons/ti';
// import { TiHomeOutline } from 'react-icons/ti';
import { FaPenToSquare } from 'react-icons/fa6';
// import { FaRegPenToSquare } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
// import { IoPersonOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <TiHome />
          </Link>
        </li>
        <li>
          <Link to="/">
            <FaPenToSquare />
          </Link>
        </li>
        <li>
          <Link to="/">
            <IoPerson />
          </Link>
        </li>
        {/* <TiHomeOutline /> */}
        {/* <FaRegPenToSquare /> */}
        {/* <IoPersonOutline /> */}
      </ul>
    </nav>
  );
};

export default Nav;
