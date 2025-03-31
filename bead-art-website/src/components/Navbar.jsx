import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark"); 
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p to="/" className="text-2xl font-bold text-gray-800 dark:text-white font-serif">
          LUXKE ARTS
        </p>

        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="text-gray-600 dark:text-gray-300">Home</Link></li>
          <li><Link to="/gallery" className="text-gray-600 dark:text-gray-300">Gallery</Link></li>
          <li><Link to="/AboutPage" className="text-gray-600 dark:text-gray-300">About</Link></li>
          <li><Link to="/contact" className="text-gray-600 dark:text-gray-300">Contact</Link></li>
        </ul>

        <div
          className="relative flex items-center space-x-2 cursor-pointer"
          onClick={() => setDarkMode(!darkMode)}
        >
          
          <div className="relative w-14 h-7 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1">
            <div className={`w-6 h-6 bg-white dark:bg-yellow-400 rounded-full shadow-md transform transition-transform duration-300 
              ${darkMode ? "translate-x-7" : "translate-x-0"}`}>
            </div>
          </div>
          {darkMode ? <Moon className="text-gray-500" size={20} /> : <Sun className="text-yellow-500" size={20} />}
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <ul className="md:hidden bg-gray-100 dark:bg-gray-800 p-4">
          <li><Link to="/" className="block py-2">Home</Link></li>
          <li><Link to="/gallery" className="block py-2">Gallery</Link></li>
          <li><Link to="/AboutPage" className="block py-2">About</Link></li>
          <li><Link to="/contact" className="block py-2">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;