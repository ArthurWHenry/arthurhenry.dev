import React from 'react';
import ActiveLink from '@/components/active-link';

const Nav = () => {
  return (
    <nav className="flex justify-end items-center text-gray-50 max-w-xl mx-auto p-6">
      <ActiveLink href="/">Home</ActiveLink>
      <ActiveLink href="/about">About</ActiveLink>
    </nav>
  );
};

export default Nav;
