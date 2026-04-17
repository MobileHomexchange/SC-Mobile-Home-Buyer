import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calculator } from 'lucide-react';
import Logo from './Logo';
import { useScrollDirection } from '../hooks/useScrollDirection';

interface HeaderProps {
  onEvaluate?: () => void;
}

export default function Header({ onEvaluate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleEvaluate = () => {
    if (onEvaluate) {
      onEvaluate();
    }
    setIsOpen(false);
  };

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled 
      ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
      : 'bg-white py-5'
  } ${
    scrollDirection === 'down' && isScrolled ? '-translate-y-full' : 'translate-y-0'
  }`;

  return (
    <header className={headerClass}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="relative z-10">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-700 hover:text-teal-600 font-medium transition-colors ${
                  location.pathname === item.path ? 'text-teal-600' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={handleEvaluate}
              className="flex items-center gap-2 px-5 py-2.5 border-2 border-teal-500 text-teal-600 rounded-lg font-semibold hover:bg-teal-50 transition-all duration-200"
            >
              <Calculator className="w-4 h-4" />
              Value Home
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-10 text-gray-700"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Mobile Navigation */}
          <div
            className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ top: 0 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-xl text-gray-700 hover:text-teal-600 font-medium transition-colors ${
                    location.pathname === item.path ? 'text-teal-600' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={handleEvaluate}
                className="flex items-center gap-2 px-6 py-3 border-2 border-teal-500 text-teal-600 rounded-lg font-semibold text-lg hover:bg-teal-50 transition-all duration-200"
              >
                <Calculator className="w-5 h-5" />
                Value Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
