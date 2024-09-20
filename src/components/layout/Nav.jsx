import React from 'react';
import { TiHome } from 'react-icons/ti';
import { TiHomeOutline } from 'react-icons/ti';
import { FaPenToSquare } from 'react-icons/fa6';
import { FaRegPenToSquare } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Nav = () => {
  const navList = [
    {
      id: 1,
      pathname: '/',
      icon: <TiHome size={'24px'} />,
      activeIcon: <TiHomeOutline size={'24px'} />,
    },
    {
      id: 2,
      pathname: '/post',
      icon: <FaPenToSquare size={'24px'} />,
      activeIcon: <FaRegPenToSquare size={'24px'} />,
    },
    {
      id: 3,
      pathname: '/profile',
      icon: <IoPerson size={'24px'} />,
      activeIcon: <IoPersonOutline size={'24px'} />,
    },
  ];

  return (
    <nav className="fixed bottom-0 bg-churead-gray-800 w-full max-w-[572px]">
      <ul className="flex justify-center">
        {navList.map((nav) => (
          <li key={nav.id}>
            <Link to={nav.pathname} className="block p-6">
              {nav.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
