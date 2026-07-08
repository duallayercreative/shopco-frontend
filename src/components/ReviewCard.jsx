import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

export default function ReviewCard({ name, rating, review }) {
  return (
    <div className="p-6 sm:p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 flex flex-col text-left space-y-4 hover:shadow-lg transition-shadow duration-300">
      {/* Testimonial rating */}
      <div className="flex gap-0.5">
        {Array.from({ length: rating }).map((_, idx) => (
          <Star key={idx} className="h-5 w-5 fill-[#FFC633] text-[#FFC633]" />
        ))}
      </div>
      
      {/* User badge */}
      <div className="flex items-center gap-1">
        <span className="font-bold text-base text-black">{name}</span>
        <ShieldCheck className="h-5 w-5 text-[#01AB31] fill-[#01AB31]/20" />
      </div>
      
      <p className="text-black/60 text-sm leading-relaxed">
        "{review}"
      </p>
    </div>
  );
}
