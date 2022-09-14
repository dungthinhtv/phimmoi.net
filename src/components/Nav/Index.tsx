import { useState } from 'react';
import { BiHomeAlt, BiInfoCircle, BiMenu, BiMoviePlay } from 'react-icons/bi';

const defaultIconSize = '1.875rem';

const items = [
  {
    label: 'Home',
    icon: <BiHomeAlt size={defaultIconSize} />,
    active: true,
  },
  {
    label: 'Movies',
    icon: <BiMoviePlay size={defaultIconSize} />,
  },

  {
    label: 'About',
    icon: <BiInfoCircle size={defaultIconSize} />,
  },
];

const Index = () => {
  return (
    <nav className="col-span-1 bg-cyan-200">
      <div className="mx-4 justify-between items-center">
        <h4 className="uppercase font-bold text-primary py-4 border-b border-b-primary text-right">
          Phimmoi.net
        </h4>
      </div>
      <ul className="mx-4 my-2">
        <li className="flex p-2 justify-end items-center cursor-pointer">
          <h3 className="mr-2">Home</h3>
          <BiHomeAlt size={defaultIconSize} />
        </li>
      </ul>
    </nav>
  );
};

export default Index;
