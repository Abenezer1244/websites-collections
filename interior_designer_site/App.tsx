
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GalleryGrid from './components/GalleryGrid';
import Process from './components/Process';
import FeaturedCollections from './components/FeaturedCollections';
import StyleStudio from './components/StyleStudio';
import Testimonials from './components/Testimonials';
import AIConsultant from './components/AIConsultant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fdfdfb] selection:bg-black selection:text-white overflow-x-hidden">
      {/* Header Navigation */}
      <Navbar />

      <main>
        {/* Hero Visual Section */}
        <Hero />

        {/* Brand/Featured Section */}
        <GalleryGrid />

        {/* Featured Collections / Products */}
        <FeaturedCollections />

        {/* The Methodology Section */}
        <Process />

        {/* Interactive AI Style Studio */}
        <StyleStudio />

        {/* Social Proof / Testimonials */}
        <Testimonials />

        {/* Decorative Divider */}
        <div className="max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row items-center justify-between border-t border-gray-100 gap-12">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all cursor-default overflow-hidden">
            <span className="text-2xl font-black italic">ARCHITECTS</span>
            <span className="text-2xl font-black italic">MINIMAL</span>
            <span className="text-2xl font-black italic">VOGUE</span>
            <span className="text-2xl font-black italic">DWELL</span>
            <span className="text-2xl font-black italic">BAZAAR</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">Heritage</p>
            <p className="text-sm font-medium text-gray-800">Designed in Italy, Inspired by the World.</p>
          </div>
        </div>

        {/* Footer Concept */}
        <footer className="bg-black text-white py-24 rounded-t-[60px] md:rounded-t-[100px] px-8 mt-12">
           <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">Let's build your dream space.</h2>
                <div className="flex space-x-4">
                  <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">Start a Project</button>
                  <button className="px-8 py-4 border border-white/30 rounded-full font-bold hover:bg-white/10 transition-colors">Contact Us</button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-12 text-sm text-gray-400">
                <div className="space-y-4">
                  <p className="text-white font-bold uppercase tracking-widest text-[10px]">Navigate</p>
                  <p className="hover:text-white cursor-pointer transition-colors">Collections</p>
                  <p className="hover:text-white cursor-pointer transition-colors">Bespoke Design</p>
                  <p className="hover:text-white cursor-pointer transition-colors">Our Story</p>
                  <p className="hover:text-white cursor-pointer transition-colors">Locations</p>
                </div>
                <div className="space-y-4">
                  <p className="text-white font-bold uppercase tracking-widest text-[10px]">Follow</p>
                  <p className="hover:text-white cursor-pointer transition-colors">Instagram</p>
                  <p className="hover:text-white cursor-pointer transition-colors">LinkedIn</p>
                  <p className="hover:text-white cursor-pointer transition-colors">Pinterest</p>
                  <p className="hover:text-white cursor-pointer transition-colors">Behance</p>
                </div>
              </div>
           </div>
           
           <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                 <div>
                    <h5 className="text-xs uppercase font-bold tracking-[0.2em] text-white/50 mb-6">Stay Inspired</h5>
                    <div className="flex border-b border-white/20 pb-4 max-w-sm">
                       <input type="email" placeholder="Your Email" className="bg-transparent border-none outline-none text-white text-sm w-full" />
                       <button className="text-xs font-bold uppercase">Join</button>
                    </div>
                 </div>
                 <div className="md:text-right flex flex-col justify-end">
                    <p className="text-sm font-medium">Headquarters: Via Poliform, 22066 Mariano Comense CO, Italy</p>
                 </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                <p>&copy; 2024 Poliform Studio. All rights reserved.</p>
                <div className="flex space-x-8 mt-4 md:mt-0">
                  <p className="hover:text-white cursor-pointer transition-colors">Privacy Policy</p>
                  <p className="hover:text-white cursor-pointer transition-colors">Terms of Service</p>
                  <p className="hover:text-white cursor-pointer transition-colors">Cookies</p>
                </div>
              </div>
           </div>
        </footer>
      </main>

      {/* AI Consulting Agent */}
      <AIConsultant />
    </div>
  );
}

export default App;
