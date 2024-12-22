// pages/Services.jsx
import { motion } from "framer-motion";
import { Paintbrush, Grid, Home, Hammer, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Services = () => {
    const navigate = useNavigate();
    const servicesList = [
      {
        title: "Interior & Exterior Painting",
        description: "Professional painting services for residential and commercial properties",
            features: ["Color consultation", "Surface preparation", "Premium materials", "Detailed finishing"],
        link: "/services/painting",
        icon: Paintbrush
      },
      {
        title: "Custom Tiling",
        description: "Expert tile installation for floors, walls, and custom designs",
          features: ["Pattern design", "Waterproofing", "Grout sealing", "Various materials"],
        link: "/services/tiling",
        icon: Grid
      },
      {
        title: "Ceiling Work",
        description: "Specialized ceiling installation, repair, and decoration",
          features: ["Drop ceilings", "Texture application", "Repair services", "Custom designs"],
        link: "/services/ceiling",
        icon: Home
      },
      {
        title: "Construction",
        description: "Complete construction and renovation services",
          features: ["Project planning", "Custom builds", "Renovations", "Quality assurance"],
        link: "/services/construction",
        icon: Hammer
      }
    ];
  
    return (
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-600">Comprehensive solutions for all your needs</p>
          </motion.div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <service.icon className="w-12 h-12 text-red-600 mb-4" />
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                    <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors" onClick={() =>
                      navigate(service.link)}>
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
};
  
export default Services;