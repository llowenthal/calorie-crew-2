import React, { FC } from 'react';
import { NavLink } from '../../types';
import { Link } from 'react-router-dom';

const Footer: FC = () => {
  const links: NavLink[] = [
    { link: '/privacy', description: 'Privacy Policy' },
    { link: '/terms-of-service', description: 'Terms of Service' },
    { link: '/contact', description: 'Contact' },
  ];
  return (
    <>
      <div className="flex-grow"></div>
      <footer className="bg-gray-900 text-white text-center p-4 mt-8">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Calorie Crew. All rights reserved.</p>
          <ul className="flex justify-center space-x-6 mt-2">
            {links.map((link) => (
              <li key={link.description}>
                <Link to={link.link} className="hover:text-gray-400">
                  {link.description}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
