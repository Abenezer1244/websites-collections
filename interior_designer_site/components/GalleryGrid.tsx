
import React from 'react';

const GalleryGrid: React.FC = () => {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
      {/* Left Large Card */}
      <div className="md:col-span-2 relative h-[400px] md:h-[500px] rounded-[40px] overflow-hidden shadow-sm group">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Kitchen" 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-8 left-8">
          <span className="bg-white/20 backdrop-blur-md text-white text-[10px] px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/30 mb-4 inline-block">
            Project Showcase
          </span>
          <h3 className="text-white text-3xl font-bold">The Nordic Retreat</h3>
        </div>
      </div>

      {/* Right Column Grid */}
      <div className="flex flex-col gap-8">
        {/* Info Box */}
        <div className="bg-[#f2f1ed] rounded-[40px] p-8 flex flex-col justify-between h-[230px] shadow-sm">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-4 block">Aesthetic</span>
            <h4 className="text-2xl font-bold leading-tight">Into a gallery of fine furniture.</h4>
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            Every piece tells a story of style and precision craftsmanship.
          </p>
        </div>

        {/* Small Image Card */}
        <div className="relative rounded-[40px] overflow-hidden h-[230px] shadow-sm group">
          <img
            src="https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?w=1000&h=667&fit=crop"
            alt="Interior detail"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors"></div>
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
