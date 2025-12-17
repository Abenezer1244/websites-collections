
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto mb-12">
      <div className="relative h-[600px] md:h-[700px] w-full rounded-[40px] overflow-hidden group">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2070" 
          alt="Luxury Living Room" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        
        {/* Main Title */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-white text-[12vw] md:text-[8rem] font-bold tracking-tight opacity-90 drop-shadow-2xl">
            Contemporary
          </h1>
        </div>

        {/* Info Card Overlay - Left */}
        <div className="absolute bottom-10 left-6 md:left-12 max-w-sm glass rounded-3xl p-6 text-white animate-float">
          <p className="text-sm leading-relaxed mb-4 text-gray-100">
            Crafting spaces that harmonize modern aesthetics with timeless elegance, our contemporary interior designs breathe life into every room, redefining the essence of chic living.
          </p>
          <button className="flex items-center space-x-2 bg-black/80 text-white px-6 py-3 rounded-full text-xs font-bold hover:bg-white hover:text-black transition-all group/btn">
            <span>View More</span>
            <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Video Preview / Mini Card - Center Bottom */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex glass p-2 rounded-2xl w-48 h-32 overflow-hidden border border-white/30 cursor-pointer hover:scale-105 transition-transform">
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&h=400&fit=crop"
            className="w-full h-full object-cover rounded-xl"
            alt="Interior detail"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
             </div>
          </div>
        </div>

        {/* Badge - Right */}
        <div className="absolute bottom-16 right-12 hidden md:block">
           <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text className="text-[10px] uppercase font-medium tracking-[0.2em] fill-white">
                  <textPath xlinkHref="#circlePath">
                    Modern • Minimalist • Modern • Minimalist •
                  </textPath>
                </text>
              </svg>
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
