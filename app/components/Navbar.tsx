import { navLinks } from "../data/data";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-700">Safety bridge</div>

        {/* Links */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="hover:text-blue-600">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
          Contact Us
        </button>
      </div>
    </nav>
  );
};



