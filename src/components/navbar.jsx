import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-gray-800 text-white shadow-md mx-15">
      <div className=" py-4">
        <div className="hidden md:flex justify-between w-full px-10">
          <a href="/" className="hover:text-orange-500 transition-colors">
            Home
          </a>
          <a href="/services" className="hover:text-orange-500  transition-colors">
            Services
          </a>
          <a href="/about" className="hover:text-orange-500 transition-colors">
            About
          </a>
          <a href="/" className="text-2xl font-bold">
          Logo
        </a>
          <a href="/resume" className="hover:text-orange-500  transition-colors">
            Resume
          </a>
          <a href="/resume" className="hover:text-orange-500  transition-colors">
            Projects
          </a>

          <a href="/contact" className="hover:text-orange-500  transition-colors">
            Contact
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" // Close icon
                  : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
              }
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black">
          <a
            href="/"
            className="block px-4 py-2 hover:bg-blue-800 transition-colors"
          >
            Home
          </a>
          <a
            href="/services"
            className="block px-4 py-2 hover:bg-blue-800 transition-colors"
          >
            Services
          </a>
          <a
            href="/about"
            className="block px-4 py-2 hover:bg-blue-800 transition-colors"
          >
            About
          </a>
          <a
            href="/resume"
            className="block px-4 py-2 hover:bg-blue-800 transition-colors"
          >
            Resume
          </a>
            <a
            href="/resume"
            className="block px-4 py-2 hover:bg-blue-800 transition-colors"
          >
            Resume
          </a>
          <a
            href="/contact"
            className="block px-4 py-2 hover:bg-blue-800 transition-colors"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
