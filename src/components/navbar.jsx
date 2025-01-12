import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Active style or class
  const activeClassName = "text-orange-500";

  return (
    <nav className="bg-gray-800 text-white font-bold shadow-md mx-15 sticky  top-0 z-50 ">
      <div className="py-4">
        <div className="hidden md:flex justify-between w-full px-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-orange-400 text-white px-4 py-2 rounded-full"
                : "hover:bg-orange-500 px-4 py-2 rounded-full transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "bg-orange-400 text-white px-4 py-2 rounded-full"
                : "hover:bg-orange-500 px-4 py-2 rounded-full transition-colors"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "bg-orange-400 text-white px-4 py-2 rounded-full"
                : "hover:bg-orange-500 px-4 py-2 rounded-full transition-colors"
            }
          >
            About
          </NavLink>
          <a href="/" className="text-2xl font-bold">
            Logo
          </a>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive
                ? "bg-orange-400 text-white px-4 py-2 rounded-full"
                : "hover:bg-orange-500 px-4 py-2 rounded-full transition-colors"
            }
          >
            Resume
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "bg-orange-400 text-white px-4 py-2 rounded-full"
                : "hover:bg-orange-500 px-4 py-2 rounded-full transition-colors"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "bg-orange-400 text-white px-4 py-2 rounded-full"
                : "hover:bg-orange-500 px-4 py-2 rounded-full transition-colors"
            }
          >
            Contact
          </NavLink>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${activeClassName} block px-4 py-2 bg-orange-400 text-white rounded`
                : "block px-4 py-2 hover:bg-orange-500 transition-colors rounded"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? `${activeClassName} block px-4 py-2 bg-orange-400 text-white rounded`
                : "block px-4 py-2 hover:bg-orange-400 transition-colors rounded"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? `${activeClassName} block px-4 py-2 bg-orange-400 text-white rounded`
                : "block px-4 py-2 hover:bg-orange-500 transition-colors rounded"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              isActive
                ? `${activeClassName} block px-4 py-2 bg-orange-400 text-white rounded`
                : "block px-4 py-2 hover:bg-orange-500 transition-colors rounded"
            }
          >
            Resume
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? `${activeClassName} block px-4 py-2 bg-orange-400 text-white rounded`
                : "block px-4 py-2 hover:bg-orange-500 transition-colors rounded"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? `${activeClassName} block px-4 py-2 bg-orange-400 text-white rounded`
                : "block px-4 py-2 hover:bg-orange-500 transition-colors rounded"
            }
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
