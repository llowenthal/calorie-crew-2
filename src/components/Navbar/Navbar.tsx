import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from '../../types';

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const links: NavLink[] = [
    { link: '/', description: 'Home' },
    { link: '/about', description: 'About' },
  ];
  return (
    <nav>
      <nav className="bg-gray-900 text-white p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            Calorie Crew
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            {links.map((link) => (
              <li key={link.description}>
                <Link to={link.link} className="block hover:text-gray-400">
                  {link.description}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden mt-2 space-y-2 bg-gray-800 p-4 rounded-lg">
            {links.map((link) => (
              <li key={link.description}>
                <Link
                  to={link.link}
                  className="block hover:text-gray-400"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {link.description}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </nav>
  );
};

export default Navbar;
