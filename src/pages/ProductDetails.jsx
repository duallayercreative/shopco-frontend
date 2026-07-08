import React, { useState } from 'react';
import { Star, StarHalf, ChevronRight, Check, Minus, Plus, Settings2, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ReviewCard from '../components/ReviewCard';

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('olive');
  const [selectedSize, setSelectedSize] = useState('Large');
  const [activeTab, setActiveTab] = useState('reviews');

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen pt-4 pb-24 text-black dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8 overflow-x-auto whitespace-nowrap">
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Home</a>
          <ChevronRight className="w-4 h-4" />
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Shop</a>
          <ChevronRight className="w-4 h-4" />
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Men</a>
          <ChevronRight className="w-4 h-4" />
          <span className="text-black dark:text-white font-medium">T-shirts</span>
        </nav>

        {/* Product Layout (Desktop: Gallery Left, Info Right) */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 mb-16">
          
          {/* Gallery Section */}
          <div className="w-full lg:w-1/2 flex flex-col-reverse lg:flex-row gap-4 lg:gap-6">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible w-full lg:w-[150px] flex-shrink-0">
              {[1, 2, 3].map((_, idx) => (
                <div 
                  key={idx} 
                  className={`relative aspect-square w-1/3 lg:w-full rounded-2xl overflow-hidden cursor-pointer border-2 transition-all ${idx === 0 ? 'border-black dark:border-white' : 'border-transparent hover:border-black/20'}`}
                >
                  <img src="/product_tshirt_black.png" alt="Thumbnail" className="w-full h-full object-cover bg-[#f0eeed] dark:bg-zinc-900" />
                </div>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden bg-[#f0eeed] dark:bg-zinc-900 flex-grow">
              <img src="/product_tshirt_black.png" alt="Main Product" className="w-full h-full object-cover object-top" />
            </div>
          </div>

          {/* Info Section */}
          <div className="w-full lg:w-1/2 flex flex-col pt-2 lg:pt-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-2 sm:mb-4">ONE LIFE GRAPHIC T-SHIRT</h1>
            
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="flex gap-1">
                {[1,2,3,4].map((i) => <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-[#FFC633] text-[#FFC633]" />)}
                <StarHalf className="w-5 h-5 sm:w-6 sm:h-6 fill-[#FFC633] text-[#FFC633]" />
              </div>
              <span className="text-sm sm:text-base text-black/60 dark:text-white/60">4.5/<span className="text-black/40 dark:text-white/40">5</span></span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 mb-6">
              <span className="text-3xl sm:text-4xl font-bold">$260</span>
              <span className="text-3xl sm:text-4xl font-bold text-black/30 dark:text-white/30 line-through">$300</span>
              <span className="text-sm sm:text-base font-medium text-[#FF3333] bg-[#FF3333]/10 px-3 py-1.5 rounded-full">
                -40%
              </span>
            </div>

            <p className="text-black/60 dark:text-white/60 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-200 dark:border-zinc-800">
              This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
            </p>

            {/* Colors */}
            <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-200 dark:border-zinc-800">
              <span className="block text-black/60 dark:text-white/60 text-sm sm:text-base mb-3 sm:mb-4">Select Colors</span>
              <div className="flex gap-4">
                {[
                  { id: 'olive', color: '#4F4631' },
                  { id: 'green', color: '#314F4A' },
                  { id: 'navy', color: '#31344F' }
                ].map((c) => (
                  <button 
                    key={c.id}
                    onClick={() => setSelectedColor(c.id)}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                    style={{ backgroundColor: c.color }}
                  >
                    {selectedColor === c.id && <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-gray-200 dark:border-zinc-800">
              <span className="block text-black/60 dark:text-white/60 text-sm sm:text-base mb-3 sm:mb-4">Choose Size</span>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {['Small', 'Medium', 'Large', 'X-Large'].map((size) => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base transition-colors ${
                      selectedSize === size 
                        ? 'bg-black text-white dark:bg-white dark:text-black font-semibold' 
                        : 'bg-[#F0F0F0] dark:bg-zinc-900 text-black/60 dark:text-white/60 hover:bg-gray-200 dark:hover:bg-zinc-800'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart row */}
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="flex items-center justify-between bg-[#F0F0F0] dark:bg-zinc-900 rounded-full px-4 sm:px-5 py-3 sm:py-4 w-[120px] sm:w-[150px]">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors">
                  <Minus className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <span className="font-semibold text-sm sm:text-base">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white transition-colors">
                  <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
              <button className="flex-grow bg-black text-white dark:bg-white dark:text-black rounded-full py-3 sm:py-4 font-semibold text-sm sm:text-base hover:bg-zinc-800 dark:hover:bg-gray-200 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-zinc-800 mb-6 sm:mb-8 text-sm sm:text-xl">
          {['Product Details', 'Rating & Reviews', 'FAQs'].map((tab) => {
            const isActive = activeTab === tab.toLowerCase().replace(' & ', '').replace(' ', '');
            return (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase().replace(' & ', '').replace(' ', ''))}
                className={`pb-4 sm:pb-6 flex-1 text-center font-medium transition-colors ${
                  isActive 
                    ? 'text-black dark:text-white border-b-2 border-black dark:border-white' 
                    : 'text-black/60 dark:text-white/60 hover:text-black/80 dark:hover:text-white/80'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Reviews Content */}
        {activeTab === 'reviews' && (
          <div className="flex flex-col gap-6 sm:gap-8 mb-16 sm:mb-20">
            {/* Reviews Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-bold">All Reviews</h3>
                <span className="text-xs sm:text-sm text-black/60 dark:text-white/60 mt-1">(451)</span>
              </div>
              
              <div className="flex items-center gap-2 sm:gap-4 ml-auto sm:ml-0">
                <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F0F0F0] dark:bg-zinc-900 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors">
                  <Settings2 className="w-5 h-5 sm:w-6 sm:h-6 text-black dark:text-white" />
                </button>
                <button className="hidden sm:flex items-center gap-4 bg-[#F0F0F0] dark:bg-zinc-900 rounded-full px-5 py-3 sm:px-6 sm:py-3.5 hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors">
                  <span className="text-sm font-semibold text-black dark:text-white">Latest</span>
                  <ChevronDown className="w-4 h-4 text-black dark:text-white" />
                </button>
                <button className="bg-black text-white dark:bg-white dark:text-black rounded-full px-5 py-3 sm:px-6 sm:py-3.5 font-semibold text-sm transition-colors hover:bg-zinc-800 dark:hover:bg-gray-200 whitespace-nowrap">
                  Write a Review
                </button>
              </div>
            </div>

            {/* Review Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {[
                { id: 1, name: "Samantha D.", review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt." },
                { id: 2, name: "Alex M.", review: "The t-shirt exceeded my expectations. The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me." },
                { id: 3, name: "Ethan R.", review: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt." },
                { id: 4, name: "Olivia P.", review: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out." },
                { id: 5, name: "Liam K.", review: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion." },
                { id: 6, name: "Ava H.", review: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this t-shirt a conversation starter." }
              ].map((rev) => (
                <ReviewCard 
                  key={rev.id} 
                  name={rev.name} 
                  rating={5} 
                  review={rev.review} 
                />
              ))}
            </div>

            {/* Load More Button */}
            <div className="flex justify-center mt-4">
              <button className="border border-gray-200 dark:border-zinc-800 rounded-full px-10 py-3 sm:px-12 sm:py-4 font-semibold text-sm sm:text-base hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors">
                Load More Reviews
              </button>
            </div>
          </div>
        )}

        {/* You Might Also Like Section */}
        <section className="pt-10 sm:pt-16 pb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-center tracking-tight mb-10 sm:mb-14 uppercase">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { id: 1, name: 'Polo with Contrast Trims', price: 212, originalPrice: 242, discount: 20, rating: 4.0, image: '/product_tshirt_striped.png' },
              { id: 2, name: 'Gradient Graphic T-shirt', price: 145, rating: 3.5, image: '/product_tshirt_black.png' },
              { id: 3, name: 'Polo with Tipping Details', price: 180, rating: 4.5, image: '/product_shirt_checkered.png' },
              { id: 4, name: 'Black Striped T-shirt', price: 120, originalPrice: 150, discount: 30, rating: 5.0, image: '/product_tshirt_striped.png' },
            ].map((p) => (
              <ProductCard 
                key={p.id}
                image={p.image}
                title={p.name}
                price={p.price}
                originalPrice={p.originalPrice}
                discount={p.discount}
                rating={p.rating}
              />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
