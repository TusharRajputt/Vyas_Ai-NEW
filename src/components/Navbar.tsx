import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleBookDemo = () => {
    navigate('/signin');
  };

  const handleGetStarted = () => {
    navigate('/signin');
  };

  const productDropdown = [
    { title: 'Universe', description: 'Open source computer vision datasets and pre-trained models', path: '/products/universe' },
    { title: 'Annotate', description: 'Label images fast with AI-assisted data annotation', path: '/products/annotate' },
    { title: 'Train', description: 'Hosted model training infrastructure and GPU access', path: '/products/train' },
    { title: 'Workflows', description: 'Low-code interface to build pipelines and applications', path: '/products/workflows' },
    { title: 'Deploy', description: 'Run models on device, at the edge, in your VPC, or via API', path: '/products/deploy' },
  ];

  const solutionsDropdown = [
    { title: 'Aerospace & Defense', path: '/solutions/aerospace-defense' },
    { title: 'Automotive', path: '/solutions/automotive' },
    { title: 'Building & Construction', path: '/solutions/construction' },
    { title: 'Government', path: '/solutions/government' },
    { title: 'Logistics', path: '/solutions/logistics' },
    { title: 'Oil & Gas', path: '/solutions/oil-and-gas' },
    { title: 'Safety & Security', path: '/solutions/safety' },
    { title: 'Transportation', path: '/solutions/transportation' },
    { title: 'Agriculture', path: '/solutions/agriculture' },
    { title: 'Banking & Finance', path: '/solutions/banking' },
    { title: 'Food & Beverage', path: '/solutions/food' },
    { title: 'Healthcare & Medicine', path: '/solutions/healthcare' },
    { title: 'Manufacturing', path: '/solutions/manufacturing' },
    { title: 'Retail & Ecommerce', path: '/solutions/retail' },
    { title: 'Telecommunications', path: '/solutions/telecom' },
    { title: 'Utilities', path: '/solutions/utilities' },
  ];

  const developersDropdown = [
    { title: 'User Forum', path: '/developers/forum' },
    { title: 'Computer Vision Models', path: '/developers/models' },
    { title: 'Learn Computer Vision', path: '/developers/learn' },
    { title: 'Weekly Product Webinar', path: '/developers/webinar' },
    { title: 'Changelog', path: '/developers/changelog' },
    { title: 'Convert Annotation Formats', path: '/developers/convert' },
    { title: 'Inference Templates', path: '/developers/templates' },
    { title: 'Model Playground', path: '/developers/playground' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-cyan-600 dark:text-cyan-400 text-2xl font-bold">
              Vyas.AI
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {/* Products Dropdown */}
            <div className="relative group">
              <Link 
                to="/products" 
                className={`px-4 py-2 inline-flex items-center ${
                  isActive('/products') 
                    ? 'text-cyan-600 dark:text-cyan-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                }`}
              >
                Products
                <span className="ml-1">▾</span>
              </Link>
              <div className="absolute left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4 space-y-4">
                  {productDropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-3 transition-colors"
                    >
                      <div className="font-medium text-gray-900 dark:text-white">{item.title}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{item.description}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <Link 
                to="/solutions" 
                className={`px-4 py-2 inline-flex items-center ${
                  isActive('/solutions') 
                    ? 'text-cyan-600 dark:text-cyan-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                }`}
              >
                Solutions
                <span className="ml-1">▾</span>
              </Link>
              <div className="absolute left-0 mt-2 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4 grid grid-cols-2 gap-2">
                  {solutionsDropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-2 transition-colors"
                    >
                      <div className="font-medium text-gray-900 dark:text-white">{item.title}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Developers Dropdown */}
            <div className="relative group">
              <Link 
                to="/developers" 
                className={`px-4 py-2 inline-flex items-center ${
                  isActive('/developers') 
                    ? 'text-cyan-600 dark:text-cyan-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                }`}
              >
                Developers
                <span className="ml-1">▾</span>
              </Link>
              <div className="absolute left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-4 space-y-2">
                  {developersDropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg p-2 transition-colors"
                    >
                      <div className="font-medium text-gray-900 dark:text-white">{item.title}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              to="/pricing" 
              className={`px-4 py-2 ${
                isActive('/pricing') 
                  ? 'text-cyan-600 dark:text-cyan-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400'
              }`}
            >
              Pricing
            </Link>

            <Link 
              to="/docs" 
              className={`px-4 py-2 ${
                isActive('/docs') 
                  ? 'text-cyan-600 dark:text-cyan-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400'
              }`}
            >
              Docs
            </Link>

            <Link 
              to="/blog" 
              className={`px-4 py-2 ${
                isActive('/blog') 
                  ? 'text-cyan-600 dark:text-cyan-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400'
              }`}
            >
              Blog
            </Link>
            
            <div className="ml-6 flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={handleBookDemo}>
                Book a demo
              </Button>
              <Button variant="primary" size="sm" onClick={handleGetStarted}>
                Get Started
              </Button>
              
              <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
          
          <div className="flex md:hidden items-center space-x-2">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 shadow-lg">
          {productDropdown.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              {item.title}
            </Link>
          ))}
          
          {solutionsDropdown.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              {item.title}
            </Link>
          ))}
          
          {developersDropdown.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              {item.title}
            </Link>
          ))}
          
          <Link 
            to="/pricing" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            Pricing
          </Link>
          
          <Link 
            to="/docs" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            Docs
          </Link>
          
          <Link 
            to="/blog" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
          >
            Blog
          </Link>
          
          <div className="px-3 py-2 space-y-2">
            <Button variant="outline" fullWidth onClick={handleBookDemo}>Book a demo</Button>
            <Button variant="primary" fullWidth onClick={handleGetStarted}>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;