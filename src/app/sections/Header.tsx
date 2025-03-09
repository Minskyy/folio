import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-50 shadow-lg text-black p-4 shadow-md flex justify-between items-center rounded-full w-1/2 m-auto fixed top-0 left-0 right-0 z-50">
      <nav className="flex space-x-4 mx-auto font-semibold">
        <a href="#about">About</a>
        <a href="#career">Career</a>
        <a href="#projects">Projects</a>
        </nav>
    </header>
  );
};

export default Header;