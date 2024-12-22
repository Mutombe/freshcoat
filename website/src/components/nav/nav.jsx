// components/Navbar.jsx
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex-shrink-0">
              <img src="/fresh.png" alt="Freshcoat Designs" className="h-20 w-20 rounded-lg" />
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <NavLink 
                to="/"
                className={({ isActive }) => 
                  isActive ? "text-red-600" : "text-black hover:text-red-600 transition-colors"
                }
              >
                Home
              </NavLink>
              <NavLink 
                to="/about"
                className={({ isActive }) => 
                  isActive ? "text-red-600" : "text-black hover:text-red-600 transition-colors"
                }
              >
                About
              </NavLink>
              <NavLink 
                to="/services"
                className={({ isActive }) => 
                  isActive ? "text-red-600" : "text-black hover:text-red-600 transition-colors"
                }
              >
                Services
              </NavLink>
              <NavLink 
                to="/projects"
                className={({ isActive }) => 
                  isActive ? "text-red-600" : "text-black hover:text-red-600 transition-colors"
                }
              >
                Projects
              </NavLink>
              <NavLink 
                to="/contact"
                className={({ isActive }) => 
                  isActive ? "text-red-600" : "text-black hover:text-red-600 transition-colors"
                }
              >
                Contact
              </NavLink>
            </div>
  
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black hover:text-red-600 transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 }
          }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink 
              to="/"
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md ${isActive ? "bg-red-600 text-white" : "text-black hover:bg-red-50 transition-colors"}`
              }
            >
              Home
            </NavLink><NavLink 
            to="/about"
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md ${isActive ? "bg-red-600 text-white" : "text-black hover:bg-red-50 transition-colors"}`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/services"
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md ${isActive ? "bg-red-600 text-white" : "text-black hover:bg-red-50 transition-colors"}`
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/projects"
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md ${isActive ? "bg-red-600 text-white" : "text-black hover:bg-red-50 transition-colors"}`
            }
          >
            Projects
          </NavLink>
          <NavLink 
            to="/contact"
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md ${isActive ? "bg-red-600 text-white" : "text-black hover:bg-red-50 transition-colors"}`
            }
          >
            Contact
          </NavLink>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;