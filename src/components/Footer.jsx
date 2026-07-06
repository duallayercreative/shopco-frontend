import React from 'react';
import { Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-900 transition-colors duration-300">
      {/* Newsletter signup container - overlapping background look */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -translate-y-10">
        <div className="bg-black dark:bg-white rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-black tracking-tight max-w-lg md:text-left text-center">
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="w-full max-w-sm flex flex-col gap-3">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full pl-12 pr-4 py-3 bg-white dark:bg-zinc-900 text-black dark:text-white rounded-full text-sm border-none focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <button className="w-full bg-white text-black dark:bg-black dark:text-white font-semibold py-3 rounded-full hover:bg-opacity-95 transition-all text-sm shadow-md">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand block */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-black tracking-tighter text-black dark:text-white mb-4">
              SHOP.CO
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 max-w-sm leading-relaxed">
              We have clothes that suit your style and which you're proud to wear. From women to men.
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 flex items-center justify-center text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-black dark:text-white mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Works</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Career</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-black dark:text-white mb-4">
              Help
            </h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Customer Support</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Delivery Details</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-black dark:text-white mb-4">
              FAQ
            </h4>
            <ul className="space-y-3 text-sm text-gray-500 dark:text-gray-400">
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Account</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Manage Deliveries</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Orders</a></li>
              <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Payments</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-zinc-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2000-2026 Shop.co. All Rights Reserved.</p>
          <div className="flex gap-4">
            {/* Payment badge simulations */}
            <span className="px-2 py-1 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded text-[9px] font-bold text-gray-500 tracking-wider">VISA</span>
            <span className="px-2 py-1 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded text-[9px] font-bold text-gray-500 tracking-wider">MASTERCARD</span>
            <span className="px-2 py-1 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded text-[9px] font-bold text-gray-500 tracking-wider">PAYPAL</span>
            <span className="px-2 py-1 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded text-[9px] font-bold text-gray-500 tracking-wider">APPLE PAY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
