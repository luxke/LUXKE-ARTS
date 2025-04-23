import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Main nav bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <p className="gradient-text text-2xl font-bold font-serif">
            LUXKE ARTS
          </p>

          {/* Desktop Navigation - centered */}
          <div className="hidden md:flex absolute left-0 right-0 justify-center pointer-events-none">
            <ul className="flex space-x-6 pointer-events-auto">
              <li>
                <Link 
                  to="/" 
                  className={`text-gray-600 hover:text-gray-950 ${isActive("/") ? "underline underline-offset-4 decoration-2" : ""}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/gallery" 
                  className={`text-gray-600 hover:text-gray-950 ${isActive("/gallery") ? "underline underline-offset-4 decoration-2" : ""}`}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  to="/AboutPage" 
                  className={`text-gray-600 hover:text-gray-950 ${isActive("/AboutPage") ? "underline underline-offset-4 decoration-2" : ""}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className={`text-gray-600 hover:text-gray-950 ${isActive("/contact") ? "underline underline-offset-4 decoration-2" : ""}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu - now pushes content down instead of overlapping */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-96 py-4" : "max-h-0 py-0 overflow-hidden"}`}>
          <ul className="flex flex-col space-y-2">
            <li>
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 text-gray-600 hover:text-gray-900 ${isActive("/") ? "underline underline-offset-4 decoration-2" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/gallery" 
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 text-gray-600 hover:text-gray-900 ${isActive("/gallery") ? "underline underline-offset-4 decoration-2" : ""}`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link 
                to="/AboutPage" 
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 text-gray-600 hover:text-gray-900 ${isActive("/AboutPage") ? "underline underline-offset-4 decoration-2" : ""}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 text-gray-600 hover:text-gray-900 ${isActive("/contact") ? "underline underline-offset-4 decoration-2" : ""}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;