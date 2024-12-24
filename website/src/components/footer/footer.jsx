// components/Footer.jsx
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
    return (
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold "><span className="text-red-500">Fresh</span><span className="text-italic">coat</span></h2>
              <p className="text-gray-400">
                Transforming spaces with quality and innovation since 2010.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/" className="block text-gray-400 hover:text-white transition-colors">Home</Link>
                <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">About</Link>
                <Link to="/services" className="block text-gray-400 hover:text-white transition-colors">Services</Link>
                <Link to="/projects" className="block text-gray-400 hover:text-white transition-colors">Projects</Link>
                <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <div className="space-y-2">
                <span className="block text-gray-400">Interior Painting</span>
                <span className="block text-gray-400">Exterior Painting</span>
                <span className="block text-gray-400">Tiling</span>
                <span className="block text-gray-400">Ceiling Work</span>
                <span className="block text-gray-400">Construction</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-gray-400">+ 48 602 872 899</span>
                </div>

                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-gray-400">+263 77 378 0144</span>
                            </div>
                            <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-gray-400">+263 77 100 8329</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-gray-400">thefreshcoatofficial@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-gray-400">Harare</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">&copy; 2024 Freshcoat Designs. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    );
};
  
  export default Footer;