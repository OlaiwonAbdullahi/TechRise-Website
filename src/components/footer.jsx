const Footer = () => {
  return (
    <footer className="bg-[#0E4A00] text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">TechRise Africa</h2>
          <p className="text-sm text-gray-300">
            Empowering Africa’s future innovators through mentorship, tech skills, and a thriving digital community.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#about" className="hover:text-white">About Us</a></li>
            <li><a href="#services" className="hover:text-white">Programs</a></li>
            <li><a href="#team" className="hover:text-white">Team</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 mt-2 text-xl">
            <a href="https://chat.whatsapp.com/G3zKK3gJry6HJOKPQK3OPl" target="_blank" rel="noreferrer">
              <i className="bi bi-whatsapp hover:text-gray-300"></i>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61550959360095" target="_blank" rel="noreferrer">
              <i className="bi bi-facebook hover:text-gray-300"></i>
            </a>
            <a href="https://www.linkedin.com/in/alchemistoftech/" target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin hover:text-gray-300"></i>
            </a>
            <a href="https://www.instagram.com/tech_rise_africa/" target="_blank" rel="noreferrer">
              <i className="bi bi-instagram hover:text-gray-300"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-600 mt-8 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} TechRise Africa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

