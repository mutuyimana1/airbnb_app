import { Star, MapPin, Phone, Heart, Search } from 'lucide-react';

export const PlaceCard = ({ title, image, rating, reviews, description, onClick }: any) => {
  return (
    <div 
      onClick={onClick}
      className="flex bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-50 h-64 cursor-pointer group"
    >
      {/* TEXT AREA (Left) */}
      <div className="flex-1 p-8 flex flex-col justify-between text-right relative">
        <div className="flex gap-2 mb-2">
           <div className="p-2 rounded-full bg-red-50 text-[#FF5A5F]"><Heart size={14} /></div>
        </div>

        <div>
          <div className="flex items-center justify-end gap-1.5 text-xs text-gray-400 mb-2">
            <span className="text-[#FF5A5F] font-bold">({rating}) {reviews} reviews</span>
            <Star size={12} fill="#FF5A5F" className="text-[#FF5A5F]" />
          </div>
          <h3 className="text-xl font-extrabold text-gray-900 flex items-center justify-end gap-2">
             {title}
             <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-white p-0.5"><div className="w-full h-full bg-white rounded-full scale-50" /></div>
          </h3>
          <p className="text-[13px] text-gray-400 mt-4 leading-relaxed line-clamp-3">
             {description}
          </p>
        </div>

        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-100 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
          <div className="flex items-center gap-1"><MapPin size={14} /> Directions</div>
          <div className="flex items-center gap-1">456-7890(123) <Phone size={14} /></div>
        </div>
      </div>

      {/* IMAGE AREA (Right) */}
      <div className="w-[38%] relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        
        {/* Floating Badges */}
        <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
           <span className="bg-[#FF5A5F] text-white text-[9px] font-black px-3 py-1 rounded shadow-lg uppercase tracking-tighter">Featured ★</span>
           <span className="bg-white/90 backdrop-blur-sm text-black text-[9px] font-bold px-2 py-1 rounded">
             off $399: EBLWC <span className="text-[#FF5A5F]">$100</span>
           </span>
        </div>
        
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center transition-all">
           <Search className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
};
