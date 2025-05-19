import { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when user clicks outside
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e) => {
      if (open && e.target.id === "mobile-menu-overlay") {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-white/95 py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-[#0e4A00]">
            <img src="/logo.png" alt="" srcset="" className=" h-auto w-20" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <ul className="flex">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="px-4 py-2 mx-1 text-gray-700 font-medium hover:text-[#0e4A00] transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0e4A00] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="hidden md:flex items-center space-x-1">
          <div className="ml-6">
            <a
              href="#contact"
              className="bg-[#0e4A00] hover:bg-[#0a3800] text-white px-6 py-2.5 rounded-md transition-colors duration-300 font-medium shadow-sm"
            >
              Contact Us
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center border border-[#0e4A00]/30 rounded-full p-2 hover:bg-[#0e4A00]/10 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {open ? (
            <LiaTimesSolid className="w-6 h-6 text-[#0e4A00]" />
          ) : (
            <CiMenuFries className="w-6 h-6 text-[#0e4A00]" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu-overlay"
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <div className="text-xl font-bold text-[#0e4A00]">
            Tech<span className="text-black">Rise</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <LiaTimesSolid className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <nav className="py-8">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-[#0e4A00]/10 hover:text-[#0e4A00] rounded-lg transition-colors font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 px-6">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block w-full bg-[#0e4A00] hover:bg-[#0a3800] text-white py-3 px-4 rounded-md text-center transition-colors duration-300 font-medium"
            >
              Contact Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
