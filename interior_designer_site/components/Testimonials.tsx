
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto mb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div className="relative">
           <div className="relative z-10 rounded-[60px] overflow-hidden aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000" 
                alt="Client Portrait" 
                className="w-full h-full object-cover"
              />
           </div>
           {/* Floating Badge */}
           <div className="absolute -bottom-10 -right-10 glass p-8 rounded-[40px] max-w-xs shadow-2xl animate-float">
              <p className="text-sm italic text-white/90 leading-relaxed mb-4">
                "Poliform didn't just design a house; they curated an experience that perfectly reflects our rhythm of life."
              </p>
              <div className="flex items-center space-x-3">
                 <div className="w-8 h-8 rounded-full bg-white/20"></div>
                 <div>
                    <p className="text-white text-xs font-bold uppercase">Elena Rossi</p>
                    <p className="text-white/50 text-[10px]">Milan, IT</p>
                 </div>
              </div>
           </div>
        </div>
        
        <div className="space-y-12">
           <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-4 block">Our Impact</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">Stories from those <br/>who live in style.</h2>
           </div>
           
           <div className="space-y-8">
              <div className="border-b border-gray-100 pb-8">
                <div className="flex text-yellow-500 mb-4">
                   {[...Array(5)].map((_, i) => (
                     <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                   ))}
                </div>
                <h4 className="font-bold mb-2 uppercase text-xs tracking-widest">Unparalleled Precision</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  The attention to detail in the wood finishes and lighting integration is something we've never seen before. A truly premium service.
                </p>
              </div>

              <div className="border-b border-gray-100 pb-8">
                <h4 className="font-bold mb-2 uppercase text-xs tracking-widest">Seamless Integration</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  From the initial AI-assisted concepts to the final walk-through, every stage was handled with absolute professionalism and taste.
                </p>
              </div>
           </div>

           <button className="flex items-center space-x-3 text-sm font-bold group">
             <span>Read More Stories</span>
             <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-x-2 transition-transform">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
             </div>
           </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
