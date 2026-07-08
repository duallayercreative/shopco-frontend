import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { 
  Search, 
  ShoppingCart, 
  CircleUser, 
  Menu, 
  X, 
  ChevronDown 
} from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function Navbar() {
  const [showPromo, setShowPromo] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getCartCount } = useShop();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="w-full z-50 sticky top-0 bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* Top Promotion Bar */}
      {showPromo && (
        <div className="bg-black text-white text-xs sm:text-sm py-2.5 px-4 relative flex items-center justify-center">
          <div className="text-center font-normal tracking-wide">
            Sign up and get 20% off to your first order.{' '}
            <a href="#" className="underline font-medium hover:text-gray-300 transition-colors">
              Sign Up Now
            </a>
          </div>
          <button 
            onClick={() => setShowPromo(false)}
            className="absolute right-3 sm:right-6 p-1 text-white hover:opacity-80 transition-opacity"
            aria-label="Close promotion banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Main Navigation Bar */}
      <nav className="border-b border-gray-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-22 gap-4">
            
            {/* Left: Mobile Hamburger & Logo */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-1 text-black dark:text-white hover:opacity-75 transition-opacity"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
              
              <Link to="/" className="text-2xl sm:text-3.5xl font-black tracking-tighter text-black dark:text-white select-none">
                SHOP.CO
              </Link>
            </div>

            {/* Middle: Navigation Links (Desktop) */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-base font-normal">
              {/* Shop Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setShopDropdownOpen(true)}
                onMouseLeave={() => setShopDropdownOpen(false)}
              >
                <button className="flex items-center gap-1.5 text-black dark:text-white hover:opacity-70 transition-opacity py-2 font-normal">
                  Shop
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${shopDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {shopDropdownOpen && (
                  <div className="absolute top-full left-0 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-xl shadow-lg py-2 w-48 animate-in fade-in slide-in-from-top-1 duration-200">
                    <Link to="/men" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800">Men's Fashion</Link>
                    <Link to="/women" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800">Women's Fashion</Link>
                    <Link to="/kids" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800">Kids' Clothing</Link>
                    <Link to="/accessories" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800">Accessories</Link>
                  </div>
                )}
              </div>

              <a href="/#top-selling" className="text-black dark:text-white hover:opacity-70 transition-opacity">
                On Sale
              </a>
              <a href="/#new-arrivals" className="text-black dark:text-white hover:opacity-70 transition-opacity">
                New Arrivals
              </a>
              <a href="/#brands" className="text-black dark:text-white hover:opacity-70 transition-opacity">
                Brands
              </a>
            </div>

            {/* Middle Search Input */}
            <div className="hidden md:flex flex-1 max-w-xl">
              <form onSubmit={handleSearch} className="relative w-full">
                <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
                  <Search className="h-5 w-5" />
                </span>
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-zinc-100 dark:bg-zinc-900 border-none rounded-full text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white transition-all text-black dark:text-white"
                />
              </form>
            </div>

            {/* Right: Icons */}
            <div className="flex items-center gap-4 sm:gap-5">
              {/* Mobile Search Button */}
              <button className="md:hidden p-1 text-black dark:text-white hover:opacity-75 transition-opacity" aria-label="Search">
                <Search className="h-6 w-6" />
              </button>
              
              {/* Cart */}
              <Link to="/cart" className="relative p-1 text-black dark:text-white hover:opacity-75 transition-opacity" aria-label="Cart">
                <ShoppingCart className="h-6 w-6" />
                {getCartCount() > 0 && (
                  <span className="absolute top-0 right-0 bg-black text-white dark:bg-white dark:text-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold scale-90 translate-x-1 -translate-y-1">
                    {getCartCount()}
                  </span>
                )}
              </Link>
              
              {/* User Account */}
              <button className="p-1 text-black dark:text-white hover:opacity-75 transition-opacity" aria-label="Account">
                <CircleUser className="h-6 w-6" />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
          
          {/* Drawer content */}
          <div className="relative flex flex-col w-full max-w-xs bg-white dark:bg-zinc-900 h-full p-6 shadow-2xl animate-in slide-in-from-left duration-300">
            <div className="flex items-center justify-between mb-8">
              <span className="text-xl font-black tracking-tighter text-black dark:text-white">
                SHOP.CO
              </span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-black dark:text-white hover:opacity-75"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex flex-col space-y-6 text-lg font-medium">
              <button 
                onClick={() => setShopDropdownOpen(!shopDropdownOpen)}
                className="flex items-center justify-between text-left text-black dark:text-white"
              >
                <span>Shop</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${shopDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {shopDropdownOpen && (
                <div className="pl-4 flex flex-col space-y-4 text-base text-gray-500 dark:text-gray-400">
                  <Link to="/men" onClick={() => setMobileMenuOpen(false)}>Men's Fashion</Link>
                  <Link to="/women" onClick={() => setMobileMenuOpen(false)}>Women's Fashion</Link>
                  <Link to="/kids" onClick={() => setMobileMenuOpen(false)}>Kids' Clothing</Link>
                  <Link to="/accessories" onClick={() => setMobileMenuOpen(false)}>Accessories</Link>
                </div>
              )}

              <a href="/#top-selling" onClick={() => setMobileMenuOpen(false)} className="text-black dark:text-white">
                On Sale
              </a>
              <a href="/#new-arrivals" onClick={() => setMobileMenuOpen(false)} className="text-black dark:text-white">
                New Arrivals
              </a>
              <a href="/#brands" onClick={() => setMobileMenuOpen(false)} className="text-black dark:text-white">
                Brands
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
