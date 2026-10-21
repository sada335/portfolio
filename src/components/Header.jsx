import { Link, useLocation } from "react-router-dom";
import { name } from "../database/sidebar.json";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Function to check if a path is active
  const isActive = (path) => {
    if (path === "/portfolio" && (location.pathname === "/" || location.pathname === "/portfolio")) {
      return true;
    }
    return location.pathname === path;
  };

  // Function to get link classes with active state styling
  const getLinkClasses = (path) => {
    const baseClasses = "text-base lg:text-lg transition-all duration-300 ease-in-out relative px-3 py-2 rounded-lg";
    const activeClasses = "bg-blue-100 text-blue-700 font-semibold shadow-sm border-b-2 border-blue-500";
    const inactiveClasses = "text-gray-700 hover:text-blue-600 hover:bg-gray-50";

    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  return (
    <div className="flex flex-col lg:flex-row justify-start items-center gap-4 border-b border-gray-200 h-auto lg:h-20 px-4 lg:px-0">
      <div className="cormorant-garamond-bold text-2xl lg:text-3xl px-4 lg:px-10 py-4 lg:py-0 w-full lg:w-auto flex justify-between items-center">
        <Link
          to="/portfolio"
          className={`transition-all duration-300 ${isActive("/portfolio") ? "text-blue-700" : "text-gray-900 hover:text-blue-600"}`}
        >
          {name}
        </Link>
        <button 
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className={`lg:ml-6 w-full lg:w-auto ${isMenuOpen ? 'block' : 'hidden lg:block'}`}>
        <ul className="flex flex-col lg:flex-row justify-start items-center gap-2 lg:gap-4 pb-4 lg:pb-0">
          <li>
            <Link to="/publications" onClick={() => setIsMenuOpen(false)} className={getLinkClasses("/publications")}>
              Publications
            </Link>
          </li>
          <li>
              <Link to="/projects" onClick={() => setIsMenuOpen(false)} className={getLinkClasses("/projects")}>
                Projects
              </Link>
          </li>
          <li>
              <Link to="/experiences" onClick={() => setIsMenuOpen(false)} className={getLinkClasses("/experiences")}>
                Experience
              </Link>
          </li>
          <li>
            <Link to="/teaching-services" onClick={() => setIsMenuOpen(false)} className={getLinkClasses("/teaching-services")}>
              Teaching & Services
            </Link>
          </li>
          <li>
            <Link to="/awards" onClick={() => setIsMenuOpen(false)} className={getLinkClasses("/awards")}>
              Awards
            </Link>
          </li>
          <li>
            <Link to="/cv" onClick={() => setIsMenuOpen(false)} className={getLinkClasses("/cv")}>
              CV
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
