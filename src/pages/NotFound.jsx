import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="relative mb-6">
        <ShoppingBag className="h-24 w-24 text-gray-200 dark:text-zinc-800 animate-bounce" />
        <span className="absolute inset-0 flex items-center justify-center font-black text-2xl">404</span>
      </div>
      <h1 className="text-3xl font-extrabold tracking-tight mb-2 uppercase">Page Not Found</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-sm">
        Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
      </p>
      <Link 
        to="/" 
        className="bg-black text-white dark:bg-white dark:text-black font-semibold px-8 py-3 rounded-full text-sm hover:opacity-90 transition-opacity"
      >
        Go back home
      </Link>
    </div>
  );
}
