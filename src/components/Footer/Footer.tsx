const Footer = () => {
  return (
    <>
      <div className="flex-grow"></div>
      <footer className="bg-gray-900 text-white text-center p-4 mt-8">
        <div className="container mx-auto">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <ul className="flex justify-center space-x-6 mt-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
