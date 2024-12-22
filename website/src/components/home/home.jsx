import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  Paintbrush,
  Grid,
  Home as HomeIcon,
  Hammer,
  ChevronRight,
  Phone,
  Calendar,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background image with overlay layers */}
      <div className="absolute inset-0">
        <img
          src="/const.png"
          alt="Construction site"
          className="w-full h-full object-cover"
        />
        {/* Multiple overlay layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-red-700/90" />
        <div className="absolute inset-0 bg-black/40" />
        {/* Diagonal overlay for added dimension */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-transparent" />
      </div>

      {/* Content container with improved spacing */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full py-32"
        >
          {/* Main content with enhanced typography */}
          <div className="max-w-4xl mx-auto text-center text-white space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                Transform Your Space with{" "}
                <span className="text-red-300">Professional Excellence</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              Bringing your vision to life through expert painting, tiling,
              construction, and ceiling work since 2010.
            </motion.p>

            {/* Enhanced button container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                Get Free Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/projects")}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
              >
                View Our Work
              </motion.button>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
};

// FeaturedServices Component
const FeaturedServices = () => {
  const services = [
    {
      icon: Paintbrush,
      title: "Expert Painting",
      description:
        "Professional interior and exterior painting with premium materials and perfect finish.",
      bgImage: "/painting.jpg",
      path: "/services/painting",
    },
    {
      icon: Grid,
      title: "Custom Tiling",
      description:
        "Precision tile installation for floors, walls, and custom designs.",
      bgImage: "/tiling.webp",
      path: "/services/tiling",
    },
    {
      icon: HomeIcon,
      title: "Ceiling Work",
      description:
        "Specialized ceiling installations, repairs, and decorative finishes.",
      bgImage: "/ceiling.png",
      path: "/services/ceiling",
    },
    {
      icon: Hammer,
      title: "Construction",
      description:
        "Comprehensive construction and renovation services for any project.",
      bgImage: "/const.png",
      path: "/services/construction",
    },
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive solutions for all your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-xl"
            >
              <div className="absolute inset-0">
                <img
                  src={service.bgImage}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
              </div>
              <div className="relative p-6 h-full flex flex-col">
                <service.icon className="w-12 h-12 text-white mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-200 mb-4">{service.description}</p>
                <Link
                  to={service.path}
                  className="mt-auto text-white font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Testimonials Component
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Moyo",
      role: "Homeowner",
      content:
        "Freshcoat transformed our home completely. The attention to detail and professionalism was outstanding.",
      rating: 5,
    },
    {
      name: "Mark Joma",
      role: "Business Owner",
      content:
        "The team at Freshcoat delivered our office renovation project on time and within budget. Exceptional work!",
      rating: 5,
    },
    {
      name: "Emily Manhongo",
      role: "Interior Designer",
      content:
        "As a designer, I have high standards. Freshcoat consistently exceeds my expectations with their quality.",
      rating: 5,
    },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Real feedback from satisfied customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const CallToAction = () => {
  return (
    <div className="relative py-24 overflow-hidden">
      {/* Background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1920/600"
            alt="Construction background"
            className="w-full h-full object-cover mix-blend-overlay opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Ready to Transform <br />
              Your Space?
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl">
              Get in touch today for a free consultation and detailed quote. Our
              expert team is ready to bring your vision to life with precision
              and excellence.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-200">
                <Clock className="w-6 h-6" />
                <span>Quick response within 24 hours</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <Calendar className="w-6 h-6" />
                <span>Flexible scheduling for your convenience</span>
              </div>
            </div>
          </motion.div>

          {/* Action Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl"
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <h3
                  className="text-2xl font-bold text-white"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us Today
                </h3>
                <p className="text-gray-200">
                  Let's discuss your project requirements
                </p>
              </div>

                          <div className="space-y-4">
                              <Link to="/contact" className="mb-4">
                <motion.button
                  onClick={() => navigate("/contact")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Schedule Consultation <ArrowRight className="w-5 h-5" />
                </motion.button></Link>

                              <Link to="/contact">
                <motion.button
                  onClick={() => navigate("/contact")}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </motion.button></Link>
              </div>

              <p className="text-sm text-gray-200 text-center">
                Free, no-obligation consultation and quote
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Main Home Component
const Home = () => {
  return (
    <div className="bg-white">
      <Hero />
      <FeaturedServices />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Home;
