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
    <nav className="fixed bottom-0 bg-churead-gray-800 w-full max-w-[572px]">
      <ul className="flex justify-center">
        <li>
          <Link to="/" className="block p-6">
            <TiHome size={'24px'} />
          </Link>
        </li>
        <li>
          <Link to="/" className="block p-6">
            <FaPenToSquare size={'24px'} />
          </Link>
        </li>
        <li>
          <Link to="/" className="block p-6">
            <IoPerson size={'24px'} />
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
