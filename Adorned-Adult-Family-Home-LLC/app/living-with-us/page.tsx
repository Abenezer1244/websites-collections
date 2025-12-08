import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gallery - Life at Adorned Adult Family Home | Auburn, WA Adult Family Living",
  description: "View our gallery showcasing daily life at Adorned Adult Family Home. See photos of our compassionate care, comfortable living spaces, activities, and the family-centered community in Auburn, WA.",
};

export default function LivingWithUs() {
  return (
    <main className="w-full max-w-[1600px] bg-cream lg:rounded-[2.5rem] shadow-2xl overflow-hidden relative min-h-[95vh] flex flex-col">

      <Navbar activePage="living" />

      {/* Hero Section */}
      <header className="px-6 pt-20 pb-12 md:px-12 lg:px-20 text-center relative overflow-hidden">
        {/* Decorative Blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#EBE9E4]/50 rounded-full blur-[100px] pointer-events-none -z-10"></div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-900/10 bg-white/40 backdrop-blur-sm mb-8 reveal-on-scroll">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[10px] uppercase tracking-widest font-semibold text-stone-600">Life at Adorned AFH</span>
        </div>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl mb-8 reveal-on-scroll leading-[0.9]">
          <span className="italic text-pink-500">Moments of</span> <br />
          <span className="not-italic font-sans tracking-tighter text-stone-900/90">Care & Comfort</span>
        </h1>

        <p className="max-w-xl mx-auto text-sm md:text-base text-stone-600 leading-relaxed font-medium mb-16 reveal-on-scroll">
          A visual journey through the daily joy, comfort, and compassionate care that defines our home. From shared meals to peaceful afternoons in the garden, we create a warm and inviting environment.
        </p>

        {/* Stats Row */}
        <div className="grid grid-cols-3 max-w-2xl mx-auto border-t border-stone-200 pt-8 gap-8 reveal-on-scroll">
          <div>
            <div className="font-serif text-3xl md:text-4xl italic text-pink-500">24/7</div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-stone-500 mt-1">Care &amp; Support</div>
          </div>
          <div>
            <div className="font-serif text-3xl md:text-4xl italic text-pink-500">1:2</div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-stone-500 mt-1">Staff Ratio</div>
          </div>
          <div>
            <div className="font-serif text-3xl md:text-4xl italic text-pink-500">50+</div>
            <div className="text-[10px] uppercase tracking-widest font-bold text-stone-500 mt-1">Monthly Activities</div>
          </div>
        </div>
      </header>

      {/* Gallery Masonry */}
      <section className="px-4 md:px-8 pb-20">
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 max-w-7xl mx-auto">

          {/* Image 1: Main Living Area */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=800&auto=format&fit=crop" alt="Cozy Living Room" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-stone-900">Communal Living</span>
            </div>
          </div>

          {/* Image 2: Caregiver Holding Hands */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop" alt="Holding Hands" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-stone-900">Compassion</span>
            </div>
          </div>

          {/* Image 3: Healthy Food */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop" alt="Healthy Meal" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-stone-900">Nutrition</span>
            </div>
          </div>

          {/* Image 4: Garden */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop" alt="Garden Walk" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-stone-900">Garden Walks</span>
            </div>
          </div>

          {/* Image 5: Reading */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop" alt="Reading Book" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-stone-900">Quiet Time</span>
            </div>
          </div>

          {/* Image 6: Laughing/Social */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop" alt="Seniors Laughing" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-stone-900">Social Connection</span>
            </div>
          </div>

          {/* Image 7: Chess/Game */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1528696892704-5e1122852276?q=80&w=800&auto=format&fit=crop" alt="Playing Chess" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-stone-900">Activities</span>
            </div>
          </div>

          {/* Image 8: Staff Member */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=800&auto=format&fit=crop" alt="Caring Staff" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-stone-900">Our Team</span>
            </div>
          </div>

          {/* Quote Card inserted in grid */}
          <div className="break-inside-avoid p-8 bg-[#EBE9E4] rounded-[2rem] text-center flex flex-col items-center justify-center min-h-[300px] reveal-on-scroll">
            <i data-lucide="quote" className="w-8 h-8 text-stone-900/20 mb-4 fill-current"></i>
            <p className="font-serif text-2xl italic text-stone-800 leading-tight mb-4">
              &quot;We found peace knowing our father was not just cared for, but truly loved.&quot;
            </p>
            <p className="text-[10px] uppercase tracking-widest font-bold text-stone-500">— The Anderson Family</p>
          </div>

          {/* Image 9: Bedroom */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop" alt="Comfortable Bedroom" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-stone-900">Private Rooms</span>
            </div>
          </div>

          {/* Image 10: Tea Time */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop" alt="Tea Time" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-stone-900">Afternoon Tea</span>
            </div>
          </div>

          {/* Image 11: Walking Outside */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1473649085228-583485e6e4d7?q=80&w=800&auto=format&fit=crop" alt="Walking" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-stone-900">Outdoor Access</span>
            </div>
          </div>

          {/* Image 12: Fresh Fruit */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=800&auto=format&fit=crop" alt="Fresh Fruit" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-stone-900">Fresh Ingredients</span>
            </div>
          </div>

          {/* Image 13: Flowers */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?q=80&w=800&auto=format&fit=crop" alt="Flowers" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
          </div>

          {/* Image 14: Family Visit */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=800&auto=format&fit=crop" alt="Family Visit" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-stone-900">Family Time</span>
            </div>
          </div>

          {/* Image 15: Painting/Crafts */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800&auto=format&fit=crop" alt="Art Crafts" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-stone-900">Arts &amp; Crafts</span>
            </div>
          </div>

          {/* Image 16: Kitchen */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop" alt="Clean Kitchen" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-stone-900">Modern Kitchen</span>
            </div>
          </div>

          {/* Image 17: Porch Sitting */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=800&auto=format&fit=crop" alt="Porch" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-stone-900">Relaxation</span>
            </div>
          </div>

          {/* Image 18: Music/Piano */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=800&auto=format&fit=crop" alt="Piano" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-stone-900">Music Therapy</span>
            </div>
          </div>

          {/* Image 19: Pet Therapy (Dog) */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=800&auto=format&fit=crop" alt="Therapy Dog" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-stone-900">Pet Friendly</span>
            </div>
          </div>

          {/* Image 20: Window View */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1464146072230-91cabc968266?q=80&w=800&auto=format&fit=crop" alt="Peaceful View" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
          </div>

          {/* Image 21: Knitting */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=800&auto=format&fit=crop" alt="Knitting" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-stone-900">Hobbies</span>
            </div>
          </div>

          {/* Image 22: Nurse Checkup */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" alt="Medical Check" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-stone-900">Medical Care</span>
            </div>
          </div>

          {/* Image 23: Accessibility Ramp/Walkway */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop" alt="Accessible" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-stone-900">Accessible</span>
            </div>
          </div>

          {/* Image 24: Dining Table Set */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=800&auto=format&fit=crop" alt="Dining Table" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-stone-900">Dining Together</span>
            </div>
          </div>

          {/* Image 25: Sunset/Peace */}
          <div className="break-inside-avoid group relative rounded-[2rem] overflow-hidden bg-stone-100 reveal-on-scroll">
            <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop" alt="Sunset" width={800} height={600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/30 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-stone-900">Serenity</span>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-20 reveal-on-scroll">
        <div className="bg-stone-900 rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-stone-800/50 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

          <h2 className="relative z-10 font-serif text-4xl md:text-6xl text-white italic mb-6">See it for yourself.</h2>
          <p className="relative z-10 text-stone-400 mb-10 max-w-md mx-auto">
            Pictures can only say so much. Schedule a tour to meet our staff and feel the warmth of our home in person.
          </p>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#inquire" className="px-8 py-3 rounded-full bg-white text-stone-900 text-xs font-bold uppercase tracking-widest hover:bg-stone-200 transition-colors">
              Book a Visit
            </a>
            <a href="tel:+12533865737" className="px-8 py-3 rounded-full border border-stone-700 text-white text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition-colors">
              Call (253) 386-5737
            </a>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}
