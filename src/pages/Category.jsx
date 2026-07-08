import React, { useState, useEffect } from 'react';
import { ChevronRight, Settings2, ChevronDown, Check } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';

export default function Category() {
  const location = useLocation();
  const path = location.pathname;

  // Determine current active category based on path
  let currentCategory = 'shop';
  let categoryTitle = 'All Products';
  if (path.includes('/men')) {
    currentCategory = 'men';
    categoryTitle = "Men's Fashion";
  } else if (path.includes('/women')) {
    currentCategory = 'women';
    categoryTitle = "Women's Fashion";
  } else if (path.includes('/kids')) {
    currentCategory = 'kids';
    categoryTitle = "Kids' Clothing";
  } else if (path.includes('/accessories')) {
    currentCategory = 'accessories';
    categoryTitle = "Accessories";
  }

  // Filter States
  const [selectedStyle, setSelectedStyle] = useState('All'); // Dress styles: All, Casual, Formal, Party, Gym
  const [selectedSubCategory, setSelectedSubCategory] = useState('All'); // T-shirts, Shorts, Shirts, Hoodie, Jeans
  const [priceMax, setPriceMax] = useState(400);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [sortBy, setSortBy] = useState('popularity'); // popularity, price-low, price-high
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Search query from URL params (if any)
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search') || '';

  // Filtered Products State
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  const applyFilters = () => {
    let result = [...PRODUCTS];

    // 1. Filter by Main Category (from route)
    if (currentCategory !== 'shop') {
      result = result.filter(p => p.category === currentCategory);
    }

    // 2. Filter by Dress Style
    if (selectedStyle !== 'All') {
      result = result.filter(p => p.style.toLowerCase() === selectedStyle.toLowerCase());
    }

    // 3. Filter by Subcategory (text match on title/description)
    if (selectedSubCategory !== 'All') {
      result = result.filter(p => p.name.toLowerCase().includes(selectedSubCategory.toLowerCase().slice(0, -1))); // slice 's' off plural
    }

    // 4. Filter by Price
    result = result.filter(p => p.price <= priceMax);

    // 5. Filter by Colors
    if (selectedColors.length > 0) {
      result = result.filter(p => p.colors.some(c => selectedColors.includes(c)));
    }

    // 6. Filter by Sizes
    if (selectedSizes.length > 0) {
      result = result.filter(p => p.sizes.some(s => selectedSizes.includes(s)));
    }

    // 7. Filter by Search Query
    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // 8. Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else {
      // default sorting by rating/popularity
      result.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(result);
  };

  // Re-run filter when category, sorting, search, or location change
  useEffect(() => {
    applyFilters();
  }, [currentCategory, sortBy, searchQuery, location]);

  const clearFilters = () => {
    setSelectedStyle('All');
    setSelectedSubCategory('All');
    setPriceMax(400);
    setSelectedColors([]);
    setSelectedSizes([]);
    setFilteredProducts(PRODUCTS.filter(p => currentCategory === 'shop' ? true : p.category === currentCategory));
  };

  // Helper color map
  const colorMap = {
    green: '#00C12B',
    red: '#F50606',
    yellow: '#F5DD06',
    orange: '#F57906',
    lightBlue: '#06CAF5',
    blue: '#063AF5',
    purple: '#7D06F5',
    pink: '#F506A4',
    white: '#FFFFFF',
    black: '#000000',
  };

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen pt-4 pb-24 text-black dark:text-white transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-black dark:hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/shop" className="hover:text-black dark:hover:text-white transition-colors">Shop</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-black dark:text-white font-medium capitalize">{categoryTitle}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between border-b border-gray-200 dark:border-zinc-800 pb-4">
            <h1 className="text-2xl font-bold capitalize">{categoryTitle}</h1>
            <button 
              onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              className="p-2 bg-[#F0F0F0] dark:bg-zinc-900 rounded-full"
            >
              <Settings2 className="w-5 h-5" />
            </button>
          </div>

          {/* Left Sidebar Filters */}
          <div className={`w-full lg:w-1/4 xl:w-1/5 flex-shrink-0 ${mobileFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="border border-gray-200 dark:border-zinc-800 rounded-2xl p-5 sm:p-6 sticky top-24 bg-white dark:bg-zinc-950 z-20">
              
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200 dark:border-zinc-800">
                <h3 className="font-bold text-xl">Filters</h3>
                <button onClick={clearFilters} className="text-sm text-red-500 font-semibold hover:underline">Clear All</button>
              </div>

              {/* Subcategories */}
              <div className="mb-6 pb-6 border-b border-gray-200 dark:border-zinc-800 flex flex-col gap-3 text-black/60 dark:text-white/60">
                {['All', 'T-shirts', 'Shorts', 'Shirts', 'Jeans'].map((sub) => (
                  <button 
                    key={sub}
                    onClick={() => setSelectedSubCategory(sub)}
                    className={`flex justify-between items-center transition-colors ${selectedSubCategory === sub ? 'text-black dark:text-white font-bold' : 'hover:text-black dark:hover:text-white'}`}
                  >
                    <span>{sub}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ))}
              </div>

              {/* Price */}
              <div className="mb-6 pb-6 border-b border-gray-200 dark:border-zinc-800">
                <h4 className="font-bold mb-4 flex justify-between items-center">
                  Max Price <ChevronDown className="w-4 h-4" />
                </h4>
                <input 
                  type="range" 
                  min="30" 
                  max="500" 
                  value={priceMax} 
                  onChange={(e) => setPriceMax(Number(e.target.value))}
                  className="w-full mb-2 accent-black dark:accent-white cursor-pointer" 
                />
                <div className="flex justify-between text-sm font-medium">
                  <span>$30</span>
                  <span className="font-bold">${priceMax}</span>
                </div>
              </div>

              {/* Colors */}
              <div className="mb-6 pb-6 border-b border-gray-200 dark:border-zinc-800">
                <h4 className="font-bold mb-4 flex justify-between items-center">
                  Colors <ChevronDown className="w-4 h-4" />
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {Object.keys(colorMap).map((colorName) => (
                    <button 
                      key={colorName}
                      onClick={() => {
                        if (selectedColors.includes(colorName)) {
                          setSelectedColors(selectedColors.filter(color => color !== colorName));
                        } else {
                          setSelectedColors([...selectedColors, colorName]);
                        }
                      }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110 border ${colorName === 'white' ? 'border-gray-300 dark:border-gray-600' : 'border-transparent'}`}
                      style={{ backgroundColor: colorMap[colorName] }}
                    >
                      {selectedColors.includes(colorName) && <Check className={`w-4 h-4 ${colorName === 'white' ? 'text-black' : 'text-white'}`} />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div className="mb-6 pb-6 border-b border-gray-200 dark:border-zinc-800">
                <h4 className="font-bold mb-4 flex justify-between items-center">
                  Size <ChevronDown className="w-4 h-4" />
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Small', 'Medium', 'Large', 'X-Large'].map((size) => {
                    const isSelected = selectedSizes.includes(size);
                    return (
                      <button 
                        key={size}
                        onClick={() => {
                          if (isSelected) {
                            setSelectedSizes(selectedSizes.filter(s => s !== size));
                          } else {
                            setSelectedSizes([...selectedSizes, size]);
                          }
                        }}
                        className={`px-4 py-2 rounded-full text-xs sm:text-sm transition-colors ${
                          isSelected 
                            ? 'bg-black text-white dark:bg-white dark:text-black font-semibold' 
                            : 'bg-[#F0F0F0] dark:bg-zinc-900 text-black/60 dark:text-white/60 hover:bg-gray-200 dark:hover:bg-zinc-800'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dress Style */}
              <div className="mb-6">
                <h4 className="font-bold mb-4 flex justify-between items-center">
                  Dress Style <ChevronDown className="w-4 h-4" />
                </h4>
                <div className="flex flex-col gap-3 text-black/60 dark:text-white/60">
                  {['All', 'Casual', 'Formal', 'Party', 'Gym'].map((style) => (
                    <button 
                      key={style}
                      onClick={() => setSelectedStyle(style)}
                      className={`flex justify-between items-center transition-colors ${selectedStyle === style ? 'text-black dark:text-white font-bold' : 'hover:text-black dark:hover:text-white'}`}
                    >
                      <span>{style}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => {
                  applyFilters();
                  setMobileFilterOpen(false);
                }}
                className="w-full bg-black text-white dark:bg-white dark:text-black py-3.5 rounded-full font-semibold hover:opacity-85 transition-opacity"
              >
                Apply Filters
              </button>
              
            </div>
          </div>

          {/* Right Product Grid */}
          <div className="w-full lg:w-3/4 xl:w-4/5 flex flex-col">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <h1 className="text-3xl font-black uppercase tracking-tight hidden lg:block">{categoryTitle}</h1>
              <div className="flex items-center justify-between sm:justify-end gap-6 text-sm text-black/60 dark:text-white/60 w-full">
                <span>Showing {filteredProducts.length} of {PRODUCTS.length} Products</span>
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline-block">Sort by:</span>
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="font-semibold text-black dark:text-white bg-transparent border-none focus:outline-none cursor-pointer"
                  >
                    <option value="popularity">Most Popular</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 bg-zinc-50 dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-zinc-800">
                <h3 className="text-xl font-bold mb-2">No products match your filters</h3>
                <p className="text-black/50 dark:text-white/50 mb-6">Try clearing filters or adjusting your settings.</p>
                <button onClick={clearFilters} className="bg-black text-white dark:bg-white dark:text-black px-6 py-2.5 rounded-full font-semibold hover:opacity-80">
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10">
                {filteredProducts.map((p) => (
                  <ProductCard 
                    key={p.id}
                    id={p.id}
                    image={p.image}
                    title={p.name}
                    price={p.price}
                    originalPrice={p.originalPrice}
                    discount={p.discount}
                    rating={p.rating}
                  />
                ))}
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
