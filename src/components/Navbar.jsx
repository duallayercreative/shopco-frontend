import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/75 border-b border-gray-100 dark:bg-zinc-950/75 dark:border-zinc-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-black tracking-tighter text-black dark:text-white flex items-center gap-2">
              SHOP.CO
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `transition-colors duration-200 hover:text-black dark:hover:text-white ${
                  isActive ? 'text-black dark:text-white font-semibold' : 'text-gray-500 dark:text-gray-400'
                }`
              }
            >
              Shop
            </NavLink>
            <a href="#new-arrivals" className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-200">
              On Sale
            </a>
            <a href="#new-arrivals" className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-200">
              New Arrivals
            </a>
            <a href="#brands" className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-200">
              Brands
            </a>
          </div>

          {/* Search Bar */}
          <div className="hidden sm:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                <Search className="h-4 w-4" />
              </span>
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-zinc-900 border-none rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all text-black dark:text-white"
              />
            </div>
          </div>

          {/* Icons Group */}
          <div className="flex items-center gap-4">
            <button className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              <Search className="h-6 w-6 sm:hidden" />
            </button>
            <Link to="/cart" className="relative text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-black text-white dark:bg-white dark:text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                2
              </span>
            </Link>
            <button className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              <User className="h-6 w-6" />
            </button>
            <button className="md:hidden text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
