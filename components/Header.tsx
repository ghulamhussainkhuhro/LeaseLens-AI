
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const activeLinkClass = 'text-primary-600 font-semibold';
  const inactiveLinkClass = 'text-slate-600 hover:text-primary-600 transition-colors';

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-10 border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-2xl font-bold text-primary-600">
            LeaseLens
          </NavLink>
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}>
              Home
            </NavLink>
            <NavLink to="/app" className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}>
              App
            </NavLink>
            <NavLink to="/api" className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}>
              API
            </NavLink>
          </nav>
          <NavLink to="/app" className="hidden md:inline-block bg-primary-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-primary-700 transition-colors shadow-sm">
            Try Now
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
