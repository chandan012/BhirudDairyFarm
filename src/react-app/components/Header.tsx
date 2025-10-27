import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="p-1">
              <img
                src="/Bhirudlogo.webp"
                alt="Bhirud Dairy Farm Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                Bhirud Dairy Farm
              </h1>
              <p className="text-sm text-green-600 font-medium">Pure & Fresh</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 text-xl font-bold transition-colors">
              Home
            </a>
            <a href="#products" className="text-gray-700 hover:text-green-600 text-xl font-bold transition-colors">
              Products
            </a>
            <a href="#farm" className="text-gray-700 hover:text-green-600 text-xl font-bold transition-colors">
              Our Farm
            </a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 text-xl font-bold transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md text-xl font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#products"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md text-xl font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#farm"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md text-xl font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Farm
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-gray-50 rounded-md text-xl font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
