import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaFacebookF,
} from "react-icons/fa";
import { logo } from "../assets";
import { navLinks } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-primary text-white px-6 py-12 mt-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6 md:gap-4 text-center md:text-left">
          <motion.h2
            className="text-3xl md:text-4xl font-bold"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Let’s Collaborate
          </motion.h2>
          <motion.a
            href="mailto:fatihaturrohmahyoongi@gmail.com"
            className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-full text-lg font-semibold inline-flex items-center transition duration-300 group"
            whileHover={{ scale: 1.05 }}
          >
            Contact Me
            <span className="ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </motion.a>
        </div>

        <hr className="border-gray-600 mb-8" />

        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-sm">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center justify-center md:justify-start mb-4">
              <img src={logo} alt="logo" className="w-9 h-9 mr-2" />
              <span className="font-bold text-white text-[18px]">
                Fatih
              </span>
            </div>
            <p className="text-gray-300 text-center md:text-left">
              I'm ready to help you build impactful and effective digital solutions.
              From interface design to website and mobile development—let's bring your ideas to life.
            </p>
            <div className="flex justify-center md:justify-start gap-4 mt-4 text-white text-xl">
              <motion.a
                href="https://www.instagram.com/tihart88" // Ganti ke akunmu
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="cursor-pointer"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://wa.me/6285601778422"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="cursor-pointer"
              >
                <FaWhatsapp />
              </motion.a>
              <motion.a
                href="https://github.com/umifatih" // Ganti ke akunmu
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="cursor-pointer"
              >
                <FaGithub />
              </motion.a>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center sm:text-left">
            <h3 className="text-orange-400 font-semibold mb-2">Navigation</h3>
            <ul className="space-y-2 text-gray-300">
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    className="hover:text-white transition duration-200"
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="text-orange-400 font-semibold mb-2">Contact</h3>
            <p className="text-gray-300">Phone: +62 85601778422</p>
            <p className="text-gray-300">Email: fatihaturrohmahyoongi@gmail.com</p>
          </div>
        </div>

        <hr className="border-gray-600 mt-10 mb-4" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between text-xs text-gray-400 text-center md:text-left gap-2">
          <p>&copy; 2025 Fatih. All Rights Reserved.</p>
          <div>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
