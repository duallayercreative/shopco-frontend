import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ image, title, rating, price, originalPrice, discount }) {
  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFC633] text-[#FFC633]" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFC633] text-[#FFC633]" />);
    }

    return stars;
  };

  return (
    <Link to="/product/1" className="flex flex-col gap-2 sm:gap-4 group cursor-pointer">
      {/* Image Container */}
      <div className="relative aspect-square bg-[#f0eeed] rounded-2xl overflow-hidden mb-2">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1 sm:gap-2">
        {/* Title */}
        <h3 className="text-base sm:text-xl font-bold text-black truncate">{title}</h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {renderStars()}
          </div>
          <span className="text-xs sm:text-sm text-black/60">
            {rating}/<span className="text-black/40">5</span>
          </span>
        </div>

        {/* Pricing */}
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-lg sm:text-2xl font-bold text-black">${price}</span>
          {originalPrice && (
            <span className="text-lg sm:text-2xl font-bold text-black/40 line-through">
              ${originalPrice}
            </span>
          )}
          {discount && (
            <span className="text-[10px] sm:text-xs font-medium text-[#FF3333] bg-[#FF3333]/10 px-2 py-1 rounded-full">
              -{discount}%
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
