import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaRobot,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Navbar() {
  const [dateTime, setDateTime] = useState(new Date());
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative pb-1
    ${
      scrolled
        ? "text-gray-700 hover:text-blue-600"
        : "text-white hover:text-blue-300"
    }
    transition-colors duration-300
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500
    after:transition-all after:duration-300 hover:after:w-full
    ${isActive ? "after:w-full text-blue-500 font-semibold" : ""}`;

  return (
    <header className="fixed top-0 w-full z-50">

      {/* Date and Time */}
      <div
        className={`text-sm py-2 text-center transition-all duration-500 ${
          scrolled
            ? "bg-white text-gray-700 shadow"
            : "bg-transparent text-blue-200"
        }`}
      >
        {dateTime.toLocaleDateString("en-GB", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        | {dateTime.toLocaleTimeString()}
      </div>

      {/* Navbar */}
      <nav
        className={`transition-all duration-500 ${
          scrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            className={`flex items-center gap-2 text-2xl font-bold ${
              scrolled ? "text-blue-600" : "text-blue-300"
            }`}
          >
            <FaRobot />
            Nisan
            <span className={scrolled ? "text-gray-800" : "text-white"}>
              Solutions
            </span>
          </NavLink>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-8 font-medium whitespace-nowrap">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>

            <NavLink to="/solutions" className={linkClass}>
              Solutions
            </NavLink>

            <NavLink to="/process" className={linkClass}>
              Our Process
            </NavLink>

            <NavLink to="/CaseStudies" className={linkClass}>
              Case Studies
            </NavLink>

            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </ul>

          {/* CTA + Social Icons */}
          <div className="hidden md:flex items-center gap-6">

            {/* CTA */}
            <NavLink
              to="mailto:nisansolutions@gmail.com?subject=Consultation Request"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Get Consultation
            </NavLink>

            {/* Social Icons */}
            <a
              href="https://www.linkedin.com"
              className={`transition ${
                scrolled
                  ? "text-gray-600 hover:text-blue-600"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="https://www.facebook.com/share/1H3wWbyGWz/?mibextid=wwXIfr/#"
              className={`transition ${
                scrolled
                  ? "text-gray-600 hover:text-blue-600"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="https://www.instagram.com/nisan.realty123?igsh=MTAzc2V3MGhoOWR2Mg==/"
              className={`transition ${
                scrolled
                  ? "text-gray-600 hover:text-pink-500"
                  : "text-gray-300 hover:text-pink-300"
              }`}
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="https://youtube.com/@nisan_realty?si=0Al1n6l-MNxRdjbw/"
              className={`transition ${
                scrolled
                  ? "text-gray-600 hover:text-red-500"
                  : "text-gray-300 hover:text-red-300"
              }`}
            >
              <FaYoutube size={18} />
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`md:hidden text-2xl ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute right-4 top-full mt-2 w-64 bg-white shadow-xl rounded-xl p-6 flex flex-col gap-5 font-medium">

            {[
              "Home",
              "About",
              "Solutions",
              "Our Process",
              "Case Studies",
              "Contact",
            ].map((title, i) => (
              <NavLink
                key={i}
                to={[
                  "/",
                  "/about",
                  "/solutions",
                  "/process",
                  "/caseStudies",
                  "/contact",
                ][i]}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-blue-600 pb-1 relative transition-all duration-300
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500
                  after:transition-all after:duration-300 hover:after:w-full ${
                    isActive ? "after:w-full text-blue-600 font-semibold" : ""
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {title}
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <NavLink
              to="/contact"
              className="bg-blue-600 text-white text-center py-2 rounded-lg mt-4"
            >
              Get Consultation
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}