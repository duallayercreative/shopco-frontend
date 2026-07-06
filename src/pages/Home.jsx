import React from 'react';
import { Star, ArrowRight, ShieldCheck } from 'lucide-react';

const BRANDS = ['VERSACE', 'ZARA', 'GUCCI', 'PRADA', 'CALVIN KLEIN'];

const NEW_ARRIVALS = [
  {
    id: 1,
    name: 'T-shirt with Tape Details',
    price: 120,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    id: 2,
    name: 'Skinny Fit Jeans',
    price: 240,
    originalPrice: 260,
    discount: 20,
    rating: 3.5,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    id: 3,
    name: 'Checkered Shirt',
    price: 180,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
  {
    id: 4,
    name: 'Sleeve Striped T-shirt',
    price: 130,
    originalPrice: 160,
    discount: 30,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah M.',
    rating: 5,
    review: "I'm blown away by the quality and style of the clothes I received from Shop.co. The fit is perfect and the fabric is incredibly soft.",
  },
  {
    id: 2,
    name: 'Alex K.',
    rating: 5,
    review: "Finding clothes that align with my personal taste used to be a struggle, but Shop.co has made it so easy. Every piece is exactly as described.",
  },
  {
    id: 3,
    name: 'James L.',
    rating: 5,
    review: "The customer service was amazing, and the shipping was fast. The shirt I got fits like a glove and the design is super modern and stylish.",
  },
];

export default function Home() {
  return (
    <div className="bg-white dark:bg-zinc-950 text-black dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-zinc-100 dark:bg-zinc-900 pt-8 pb-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-6xl font-black tracking-tighter leading-tight sm:leading-none">
              FIND CLOTHES THAT MATCH YOUR STYLE
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base max-w-lg leading-relaxed">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <div className="pt-2">
              <a 
                href="#new-arrivals" 
                className="inline-flex items-center justify-center bg-black dark:bg-white text-white dark:text-black font-semibold px-8 py-4 rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all text-sm group"
              >
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Stat Blocks */}
            <div className="grid grid-cols-3 gap-6 pt-4 divide-x divide-gray-200 dark:divide-zinc-800">
              <div className="text-left">
                <span className="block text-2xl sm:text-4xl font-bold">200+</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">International Brands</span>
              </div>
              <div className="pl-6 text-left">
                <span className="block text-2xl sm:text-4xl font-bold">2,000+</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">High-Quality Products</span>
              </div>
              <div className="pl-6 text-left">
                <span className="block text-2xl sm:text-4xl font-bold">30,000+</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Happy Customers</span>
              </div>
            </div>
          </div>

          {/* Hero Image Container */}
          <div className="relative h-[350px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center group">
            {/* Visual design styling */}
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-300/40 to-transparent dark:from-zinc-950/80 mix-blend-overlay z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80" 
              alt="Hero Showcase" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Sparkles or decorative design elements */}
            <div className="absolute top-8 right-8 z-20 animate-pulse text-black dark:text-white font-extrabold text-4xl">✦</div>
            <div className="absolute bottom-16 left-8 z-20 animate-pulse text-black dark:text-white font-extrabold text-2xl">✦</div>
          </div>
        </div>
      </section>

      {/* Brands Bar */}
      <section className="bg-black py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center sm:justify-between items-center gap-8 sm:gap-4">
            {BRANDS.map((brand) => (
              <span key={brand} className="text-white text-lg sm:text-2xl font-black tracking-widest opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section id="new-arrivals" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100 dark:border-zinc-900">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center tracking-tight mb-12 uppercase">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {NEW_ARRIVALS.map((product) => (
            <div key={product.id} className="group relative flex flex-col cursor-pointer">
              {/* Product Image */}
              <div className="aspect-[3/4] w-full rounded-2xl bg-zinc-100 dark:bg-zinc-900 overflow-hidden mb-4 relative shadow-sm border border-gray-100 dark:border-zinc-800">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {product.discount && (
                  <span className="absolute top-4 left-4 bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400 text-xs font-bold px-2.5 py-1 rounded-full">
                    -{product.discount}%
                  </span>
                )}
              </div>
              
              {/* Product Info */}
              <h3 className="font-bold text-sm sm:text-base text-left group-hover:underline line-clamp-1">
                {product.name}
              </h3>
              
              {/* Rating */}
              <div className="flex items-center gap-1 my-1 text-left">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star 
                    key={idx} 
                    className={`h-4 w-4 ${
                      idx < Math.floor(product.rating) 
                        ? 'fill-amber-400 text-amber-400' 
                        : 'text-gray-300 dark:text-zinc-700'
                    }`} 
                  />
                ))}
                <span className="text-xs font-medium ml-1">{product.rating}/5</span>
              </div>
              
              {/* Price */}
              <div className="flex items-center gap-2 text-left mt-1">
                <span className="text-base sm:text-lg font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-400 line-through font-medium">${product.originalPrice}</span>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="border border-gray-200 dark:border-zinc-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-semibold px-12 py-3 rounded-full text-sm transition-all duration-300">
            View All
          </button>
        </div>
      </section>

      {/* Browse By Dress Style */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-6 sm:p-14">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-center tracking-tight mb-12 uppercase">
            Browse by Dress Style
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Casual */}
            <div className="relative group overflow-hidden rounded-2xl h-[260px] md:col-span-1 cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80" 
                alt="Casual Style" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent p-6 sm:p-8 flex items-start justify-start">
                <span className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight">Casual</span>
              </div>
            </div>
            
            {/* Formal */}
            <div className="relative group overflow-hidden rounded-2xl h-[260px] md:col-span-2 cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&auto=format&fit=crop&q=80" 
                alt="Formal Style" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent p-6 sm:p-8 flex items-start justify-start">
                <span className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight">Formal</span>
              </div>
            </div>

            {/* Party */}
            <div className="relative group overflow-hidden rounded-2xl h-[260px] md:col-span-2 cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1549060274-8b1b7f0f3f8a?w=800&auto=format&fit=crop&q=80" 
                alt="Party Style" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent p-6 sm:p-8 flex items-start justify-start">
                <span className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight">Party</span>
              </div>
            </div>

            {/* Gym */}
            <div className="relative group overflow-hidden rounded-2xl h-[260px] md:col-span-1 cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80" 
                alt="Gym Style" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent p-6 sm:p-8 flex items-start justify-start">
                <span className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight">Gym</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-left tracking-tight mb-12 uppercase flex justify-between items-center">
          <span>Our Happy Customers</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="p-6 sm:p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 flex flex-col text-left space-y-4 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Testimonial rating */}
              <div className="flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              {/* User badge */}
              <div className="flex items-center gap-1">
                <span className="font-bold text-base">{testimonial.name}</span>
                <ShieldCheck className="h-5 w-5 text-emerald-500 fill-emerald-100 dark:fill-emerald-950" />
              </div>
              
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
