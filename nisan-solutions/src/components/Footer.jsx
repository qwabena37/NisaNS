import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const linkStyle =
    "text-gray-300 hover:text-white transition duration-300 hover:translate-x-1";

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className="bg-blue-900 text-white py-12 mt-16"
    >
      {/* Horizontal Flex Container */}
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-8">

        {/* Company Info */}
        <motion.div variants={item} className="flex-1 min-w-[200px]">
          <h3 className="text-xl font-bold mb-4 text-blue-400">
            Nisan <span className="text-white">Solutions</span>
          </h3>
          <p className="text-gray-300">
            Empowering businesses with AI-driven technology solutions and digital innovation across Ghana.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={item} className="flex-1 min-w-[150px]">
          <h4 className="font-semibold text-blue-400 mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className={linkStyle}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={linkStyle}>About</NavLink>
            </li>
            <li>
              <NavLink to="/solutions" className={linkStyle}>Solutions</NavLink>
            </li>
            <li>
              <NavLink to="/case-studies" className={linkStyle}>Case Studies</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
            </li>
          </ul>
        </motion.div>

        {/* Locations */}
        <motion.div variants={item} className="flex-1 min-w-[150px]">
          <h4 className="font-semibold text-blue-400 mb-3">Our Locations</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Accra</li>
            <li>Kumasi</li>
            <li>Tema</li>
            <li>Cape Coast</li>
            <li>Takoradi</li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div variants={item} className="flex-1 min-w-[150px]">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>AI Solutions</li>
            <li>Data Analytics</li>
            <li>Digital Transformation</li>
            <li>Consulting & Integration</li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div variants={item} className="flex-1 min-w-[150px]">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">
            Follow Us
          </h3>

          <div className="flex space-x-4 text-gray-300 text-xl">

            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://www.facebook.com/share/1H3wWbyGWz/?mibextid=wwXIfr/"
              className="hover:text-blue-400"
            >
              <FaFacebook />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="https://www.instagram.com/nisan.realty123"
              className="hover:text-blue-400"
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://www.tiktok.com/@nisanrealty123"
              className="hover:text-blue-400"
            >
              <FaTiktok />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="https://youtube.com/@nisan_realty"
              className="hover:text-blue-400"
            >
              <FaYoutube />
            </motion.a>

          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={item} className="flex-1 min-w-[200px]">
          <h4 className="font-semibold text-blue-400 mb-3">Contact</h4>
          <p className="text-gray-300">info@nisansolutions.com</p>
          <p className="text-gray-300">+233 123 456 789</p>
          <p className="text-gray-300 mt-2">Accra, Ghana</p>
        </motion.div>

      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center text-gray-400 mt-10 border-t border-blue-700 pt-6"
      >
        © {new Date().getFullYear()} Nisan Solutions. All rights reserved.
      </motion.div>
    </motion.footer>
  );
}