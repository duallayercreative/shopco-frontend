import React from 'react';
import { ChevronRight, Trash2, Minus, Plus, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useShop();

  const subtotal = getCartTotal();
  const discount = subtotal * 0.2; // 20% discount example
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen pt-4 pb-24 text-black dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-black dark:text-white font-medium">Cart</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-6 sm:mb-8">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800">
            <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/" className="bg-black text-white dark:bg-white dark:text-black px-8 py-3 rounded-full font-semibold hover:opacity-80 transition-opacity">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            
            {/* Cart Items List */}
            <div className="w-full lg:w-3/5 xl:w-2/3 border border-gray-200 dark:border-zinc-800 rounded-3xl p-4 sm:p-6 flex flex-col gap-6">
              {cart.map((item, index) => (
                <div key={`${item.id}-${item.color}-${item.size}-${index}`} className="flex gap-4 sm:gap-6 border-b border-gray-100 dark:border-zinc-800 pb-6 last:border-0 last:pb-0">
                  {/* Item Image */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl bg-[#f0eeed] dark:bg-zinc-900 overflow-hidden flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover object-top" />
                  </div>
                  
                  {/* Item Details */}
                  <div className="flex flex-col justify-between flex-grow py-1">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h3 className="font-bold text-base sm:text-xl line-clamp-1">{item.name}</h3>
                        <p className="text-sm text-black/60 dark:text-white/60 mt-1 capitalize">Size: <span className="text-black/40 dark:text-white/40">{item.size}</span></p>
                        <p className="text-sm text-black/60 dark:text-white/60 capitalize">Color: <span className="text-black/40 dark:text-white/40">{item.color}</span></p>
                      </div>
                      <button onClick={() => removeFromCart(item.id, item.size, item.color)} className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-950 rounded-full transition-colors flex-shrink-0">
                        <Trash2 className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4">
                      <span className="font-bold text-xl sm:text-2xl">${item.price}</span>
                      <div className="flex items-center justify-between bg-[#F0F0F0] dark:bg-zinc-900 rounded-full px-3 sm:px-4 py-2 sm:py-2.5 w-[100px] sm:w-[120px]">
                        <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)} className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors">
                          <Minus className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                        <span className="font-semibold text-sm sm:text-base">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)} className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors">
                          <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-2/5 xl:w-1/3 border border-gray-200 dark:border-zinc-800 rounded-3xl p-5 sm:p-6 sticky top-24">
              <h2 className="text-xl sm:text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="flex flex-col gap-4 text-sm sm:text-base mb-6">
                <div className="flex justify-between">
                  <span className="text-black/60 dark:text-white/60">Subtotal</span>
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/60 dark:text-white/60">Discount (-20%)</span>
                  <span className="font-bold text-red-500">-${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/60 dark:text-white/60">Delivery Fee</span>
                  <span className="font-bold">${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="w-full h-px bg-gray-200 dark:bg-zinc-800 my-1"></div>
                <div className="flex justify-between items-center">
                  <span className="text-base sm:text-lg text-black dark:text-white">Total</span>
                  <span className="text-xl sm:text-2xl font-bold">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="flex gap-3 mb-6">
                <div className="relative flex-grow">
                  <Tag className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Add promo code" 
                    className="w-full bg-[#F0F0F0] dark:bg-zinc-900 border-none rounded-full py-3 sm:py-3.5 pl-12 pr-4 focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white text-sm sm:text-base"
                  />
                </div>
                <button className="bg-black text-white dark:bg-white dark:text-black px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold hover:bg-zinc-800 dark:hover:bg-gray-200 transition-colors text-sm sm:text-base">
                  Apply
                </button>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-black text-white dark:bg-white dark:text-black py-4 sm:py-4.5 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-zinc-800 dark:hover:bg-gray-200 transition-colors text-sm sm:text-base">
                Go to Checkout
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
