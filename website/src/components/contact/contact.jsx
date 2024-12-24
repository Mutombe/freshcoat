// pages/Contact.jsx
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll be in touch soon.");
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch for a free consultation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full p-3 rounded-lg border border-gray-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 w-full p-3 rounded-lg border border-gray-300"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="mt-1 w-full p-3 rounded-lg border border-gray-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-red-600" />

                  <span>+ 48 602 872 899</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-red-600" />
                  <span>+263 77 378 0144</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-red-600" />
                  <span>+263 77 100 8329</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-red-600" />
                  <span>thefreshcoatofficial@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-red-600" />
                  <span>Harare</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Business Hours</h2>
              <div className="space-y-2">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-red-600 cursor-pointer" />
                <Instagram className="w-6 h-6 text-red-600 cursor-pointer" />
                <Twitter className="w-6 h-6 text-red-600 cursor-pointer" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
