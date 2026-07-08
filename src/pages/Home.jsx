import React from 'react';
import { Star, ArrowRight, ShieldCheck } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ReviewCard from '../components/ReviewCard';

const BRANDS = ['VERSACE', 'ZARA', 'GUCCI', 'PRADA', 'CALVIN KLEIN'];

const NEW_ARRIVALS = [
  {
    id: 1,
    name: 'T-shirt with Tape Details',
    price: 120,
    rating: 4.5,
    image: '/product_tshirt_black.png',
  },
  {
    id: 2,
    name: 'Skinny Fit Jeans',
    price: 240,
    originalPrice: 260,
    discount: 20,
    rating: 3.5,
    image: '/product_jeans_blue.png',
  },
  {
    id: 3,
    name: 'Checkered Shirt',
    price: 180,
    rating: 4.5,
    image: '/product_shirt_checkered.png',
  },
  {
    id: 4,
    name: 'Sleeve Striped T-shirt',
    price: 130,
    originalPrice: 160,
    discount: 30,
    rating: 4.5,
    image: '/product_tshirt_striped.png',
  },
];

const TOP_SELLING = [
  {
    id: 5,
    name: 'Vertical Striped Shirt',
    price: 212,
    originalPrice: 232,
    discount: 20,
    rating: 5.0,
    image: '/product_tshirt_striped.png',
  },
  {
    id: 6,
    name: 'Courage Graphic T-shirt',
    price: 145,
    rating: 4.0,
    image: '/product_tshirt_black.png',
  },
  {
    id: 7,
    name: 'Loose Fit Bermuda Shorts',
    price: 80,
    rating: 3.0,
    image: '/product_jeans_blue.png',
  },
  {
    id: 8,
    name: 'Faded Skinny Jeans',
    price: 210,
    rating: 4.5,
    image: '/product_jeans_blue.png',
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
      <section className="bg-[#f2f0f1] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch min-h-[500px] lg:min-h-[660px]">
            {/* Left Column: Text & Stats */}
            <div className="flex flex-col justify-center py-12 md:py-16 text-left space-y-6 sm:space-y-8 z-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none text-black uppercase">
                FIND CLOTHES<br />THAT MATCHES<br />YOUR STYLE
              </h1>
              <p className="text-black/60 text-sm sm:text-base max-w-lg leading-relaxed">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
              </p>
              <div className="pt-2">
                <a 
                  href="#new-arrivals" 
                  className="w-full sm:w-auto inline-block bg-black text-white font-medium px-16 py-4 rounded-full hover:bg-zinc-800 transition-colors text-center text-sm sm:text-base"
                >
                  Shop Now
                </a>
              </div>

              {/* Stat Blocks */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 pt-4 max-w-xl">
                <div className="text-left">
                  <span className="block text-2xl sm:text-4xl font-bold text-black">200+</span>
                  <span className="text-[10px] sm:text-sm text-black/60 block">International Brands</span>
                </div>
                <div className="text-left border-l border-black/10 pl-4 sm:pl-8">
                  <span className="block text-2xl sm:text-4xl font-bold text-black">2,000+</span>
                  <span className="text-[10px] sm:text-sm text-black/60 block">High-Quality Products</span>
                </div>
                <div className="text-left border-l border-black/10 pl-4 sm:pl-8">
                  <span className="block text-2xl sm:text-4xl font-bold text-black">30,000+</span>
                  <span className="text-[10px] sm:text-sm text-black/60 block">Happy Customers</span>
                </div>
              </div>
            </div>

            {/* Right Column: Image and Absolute Sparkles */}
            <div className="relative flex items-end justify-center lg:justify-end min-h-[380px] lg:min-h-full">
              {/* Sparkle 1 (Middle-left) */}
              <svg 
                className="absolute left-[5%] top-[50%] w-8 h-8 sm:w-11 sm:h-11 fill-current text-black animate-pulse z-10" 
                viewBox="0 0 24 24"
              >
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
              </svg>
              
              {/* Sparkle 2 (Top-right) */}
              <svg 
                className="absolute right-[5%] sm:right-[10%] top-[12%] w-16 h-16 sm:w-20 sm:h-20 fill-current text-black animate-pulse z-10" 
                viewBox="0 0 24 24"
              >
                <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
              </svg>

              {/* Models Image */}
              <img 
                src="/hero.jpg" 
                alt="Models Showcase" 
                className="max-h-[380px] sm:max-h-[500px] md:max-h-[580px] lg:max-h-[660px] w-auto object-contain z-0 select-none"
              />
            </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {NEW_ARRIVALS.map((product) => (
            <ProductCard 
              key={product.id}
              image={product.image}
              title={product.name}
              rating={product.rating}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
            />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="border border-gray-200 dark:border-zinc-800 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black font-semibold px-12 py-3 rounded-full text-sm transition-all duration-300">
            View All
          </button>
        </div>
      </section>

      {/* Top Selling Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center tracking-tight mb-12 uppercase">
          Top Selling
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {TOP_SELLING.map((product) => (
            <ProductCard 
              key={product.id}
              image={product.image}
              title={product.name}
              rating={product.rating}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
            />
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
                src="/category_casual.png" 
                alt="Casual Style" 
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10">
                <span className="text-black text-2xl sm:text-3xl font-extrabold tracking-tight bg-white/70 px-4 py-1 rounded-lg backdrop-blur-sm">Casual</span>
              </div>
            </div>
            
            {/* Formal */}
            <div className="relative group overflow-hidden rounded-2xl h-[260px] md:col-span-2 cursor-pointer">
              <img 
                src="/category_formal.png" 
                alt="Formal Style" 
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10">
                <span className="text-black text-2xl sm:text-3xl font-extrabold tracking-tight bg-white/70 px-4 py-1 rounded-lg backdrop-blur-sm">Formal</span>
              </div>
            </div>

            {/* Party */}
            <div className="relative group overflow-hidden rounded-2xl h-[260px] md:col-span-2 cursor-pointer">
              <img 
                src="/category_party.png" 
                alt="Party Style" 
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10">
                <span className="text-black text-2xl sm:text-3xl font-extrabold tracking-tight bg-white/70 px-4 py-1 rounded-lg backdrop-blur-sm">Party</span>
              </div>
            </div>

            {/* Gym */}
            <div className="relative group overflow-hidden rounded-2xl h-[260px] md:col-span-1 cursor-pointer">
              <img 
                src="/category_gym.png" 
                alt="Gym Style" 
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10">
                <span className="text-black text-2xl sm:text-3xl font-extrabold tracking-tight bg-white/70 px-4 py-1 rounded-lg backdrop-blur-sm">Gym</span>
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
            <ReviewCard 
              key={testimonial.id}
              name={testimonial.name}
              rating={testimonial.rating}
              review={testimonial.review}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
