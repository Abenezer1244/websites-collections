'use client';

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full max-w-[1600px] bg-cream lg:rounded-[2.5rem] shadow-2xl overflow-hidden relative min-h-[95vh] flex flex-col">

      <Navbar activePage="home" />

      {/* Hero Bento Grid */}
      <section className="p-4 md:p-6 lg:p-8 pt-0">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-4 h-auto lg:h-[750px]">

          {/* Main Headline Cell */}
          <div className="md:col-span-6 lg:col-span-8 bg-[#EBE9E4] rounded-[2rem] p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-stone-300/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-900/10 bg-white/40 backdrop-blur-sm mb-8 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[10px] uppercase tracking-widest font-semibold text-stone-600">Accepting Residents</span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-6">
                <span className="italic text-pink-500">A tranquil haven</span> <br />
                <span className="not-italic font-sans tracking-tighter text-stone-900">for your loved ones.</span>
              </h1>
              <p className="max-w-md text-sm md:text-base text-stone-600 leading-relaxed font-medium">
                Grace Adult Family Home offers a warm, family-like environment in Lake Stevens, WA. Our dedicated staff provides personalized, compassionate care with dignity and respect in a peaceful, home-like setting.
              </p>
            </div>

            <div className="relative z-10 mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-[#EBE9E4] object-cover" alt="Staff" />
                <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-[#EBE9E4] object-cover" alt="Staff" />
                <div className="w-10 h-10 rounded-full border-2 border-[#EBE9E4] bg-white flex items-center justify-center text-xs font-semibold text-stone-900">+6</div>
              </div>
              <div className="text-xs font-medium text-stone-500">
                <span className="block text-stone-900">Dedicated Care Team</span>
                24/7 On-site Support
              </div>
            </div>

            {/* Decorative Icon */}
            <i data-lucide="sun" className="absolute bottom-8 right-8 w-24 h-24 text-stone-900/5 rotate-12 group-hover:rotate-45 transition-transform duration-700 ease-out"></i>
          </div>

          {/* Visual Cell */}
          <div className="md:col-span-3 lg:col-span-4 bg-stone-900 rounded-[2rem] relative overflow-hidden group min-h-[300px]">
            <Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop" alt="Interior" width={1000} height={800} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-white/60 text-xs uppercase tracking-widest mb-2">Environment</p>
              <h3 className="text-white font-serif text-3xl italic">Peaceful Living</h3>
            </div>
          </div>

          {/* Stats/Interactive Cell */}
          <div className="md:col-span-3 lg:col-span-4 bg-white border border-stone-100 rounded-[2rem] p-8 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-stone-400">Wellness Metrics</h3>
                <i data-lucide="activity" className="w-5 h-5 text-stone-900"></i>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-medium mb-2">
                    <span>Staff to Resident Ratio</span>
                    <span>1:2</span>
                  </div>
                  <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                    <div className="h-full bg-stone-900 w-[90%] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-medium mb-2">
                    <span>Resident Satisfaction</span>
                    <span>98%</span>
                  </div>
                  <div className="w-full h-1.5 bg-stone-100 rounded-full overflow-hidden">
                    <div className="h-full bg-stone-900 w-[98%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-stone-100 mt-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                  <i data-lucide="shield-check" className="w-4 h-4"></i>
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-stone-900">WA State Licensed</p>
                  <p className="text-stone-500">License #751087</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Cell */}
          <div className="md:col-span-6 lg:col-span-8 bg-[#D4D1CA] rounded-[2rem] p-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#1c1917 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

            <div className="relative shrink-0">
              <div className="w-20 h-20 rounded-full bg-stone-900 text-white flex items-center justify-center font-serif text-3xl italic">
                "
              </div>
            </div>
            <div className="relative z-10 text-center md:text-left">
              <p className="font-serif text-2xl md:text-3xl text-stone-900 leading-tight mb-4">
                Creating a sense of community and belonging where residents feel at home. We provide compassionate, personalized care in a tranquil setting by the lake, ensuring dignity and respect for each resident 24/7.
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-stone-700">Our Mission</p>
            </div>
          </div>

        </div>
      </section>

      {/* Marquee Divider */}
      <div className="py-12 overflow-hidden bg-white border-y border-stone-100">
        <div className="flex whitespace-nowrap animate-marquee">
          <span className="text-6xl md:text-8xl font-serif italic text-stone-100 mx-8">Dignity</span>
          <span className="text-6xl md:text-8xl font-sans font-bold text-stone-900 tracking-tighter mx-8">RESPECT</span>
          <span className="text-6xl md:text-8xl font-serif italic text-stone-100 mx-8">Community</span>
          <span className="text-6xl md:text-8xl font-sans font-bold text-stone-900 tracking-tighter mx-8">Wellness</span>
          <span className="text-6xl md:text-8xl font-serif italic text-stone-100 mx-8">Dignity</span>
          <span className="text-6xl md:text-8xl font-sans font-bold text-stone-900 tracking-tighter mx-8">RESPECT</span>
          <span className="text-6xl md:text-8xl font-serif italic text-stone-100 mx-8">Community</span>
          <span className="text-6xl md:text-8xl font-sans font-bold text-stone-900 tracking-tighter mx-8">Wellness</span>
        </div>
      </div>

      {/* Services / Philosophy Section */}
      <section className="px-6 py-24 md:px-12 lg:px-20 bg-cream">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3 sticky top-32 self-start">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6 italic">Holistic Living</h2>
            <p className="text-sm md:text-base text-stone-600 leading-relaxed mb-8">
              Our approach goes beyond basic needs. We curate an environment where physical health, mental stimulation, and emotional connection thrive together.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-900 border-b border-stone-900 pb-1 hover:text-stone-600 hover:border-stone-600 transition-colors">
              View Care Options <i data-lucide="arrow-right" className="w-4 h-4"></i>
            </a>
          </div>

          <div className="lg:w-2/3 grid gap-6">
            {/* Service Card 1 */}
            <div className="group bg-white p-8 rounded-3xl border border-stone-100 hover:border-stone-300 transition-all duration-300 hover:shadow-xl hover:shadow-stone-200/50">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
                  <i data-lucide="heart-pulse" className="w-6 h-6 stroke-[1.5]"></i>
                </div>
                <span className="text-[10px] font-mono text-stone-400">01</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3 group-hover:translate-x-2 transition-transform duration-300">Personal Care & Daily Assistance</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Live-in caregivers provide 24/7 assistance with bathing, dressing, grooming, meals, and daily activities. Medication management and health monitoring ensure residents feel safe and comfortable around the clock.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="group bg-white p-8 rounded-3xl border border-stone-100 hover:border-stone-300 transition-all duration-300 hover:shadow-xl hover:shadow-stone-200/50">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
                  <i data-lucide="utensils" className="w-6 h-6 stroke-[1.5]"></i>
                </div>
                <span className="text-[10px] font-mono text-stone-400">02</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3 group-hover:translate-x-2 transition-transform duration-300">Medication & Health Support</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Coordinated medication management and pharmacy services with staff assistance for medication reminders. Basic health monitoring ensures residents receive appropriate care and attention to their medical needs.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="group bg-white p-8 rounded-3xl border border-stone-100 hover:border-stone-300 transition-all duration-300 hover:shadow-xl hover:shadow-stone-200/50">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-colors duration-300">
                  <i data-lucide="flower-2" className="w-6 h-6 stroke-[1.5]"></i>
                </div>
                <span className="text-[10px] font-mono text-stone-400">03</span>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3 group-hover:translate-x-2 transition-transform duration-300">Engaging Social Activities</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Regular recreational and craft activities encourage socialization and vibrant community life. In our intimate 6-resident setting, staff provides one-on-one attention that fosters meaningful connections and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquire" className="relative px-4 pb-4">
        <div className="bg-stone-900 rounded-[2.5rem] p-8 md:p-20 text-white overflow-hidden relative">
          {/* Abstract BG */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-stone-800/30 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div className="flex flex-col justify-between">
              <div>
                <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-4">Start the conversation</p>
                <h2 className="font-serif text-4xl md:text-6xl mb-6">
                  Is Grace AFH right for your family?
                </h2>
                <p className="text-stone-400 text-sm md:text-base max-w-md leading-relaxed">
                  We understand this is a significant decision. Schedule a tour to meet our dedicated caregivers, see our warm 6-bed home by Lake Stevens, and experience our supportive community firsthand.
                </p>
              </div>

              <div className="hidden lg:block mt-12">
                <div className="flex items-center gap-4 text-stone-400 text-sm">
                  <div className="w-12 h-[1px] bg-stone-700"></div>
                  <p>Located in Lake Stevens, WA</p>
                </div>
              </div>
            </div>

            <form className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-stone-400">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-stone-700 py-2 text-sm focus:outline-none focus:border-white transition-colors placeholder-stone-600" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-stone-400">Phone</label>
                  <input type="tel" className="w-full bg-transparent border-b border-stone-700 py-2 text-sm focus:outline-none focus:border-white transition-colors placeholder-stone-600" placeholder="(555) 000-0000" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-semibold text-stone-400">Interest Level</label>
                <div className="flex gap-4 pt-2">
                  <label className="cursor-pointer group flex items-center gap-2">
                    <div className="relative w-5 h-5 border border-stone-600 rounded-full flex items-center justify-center">
                      <input type="radio" name="interest" className="peer appearance-none w-full h-full absolute inset-0 cursor-pointer" />
                      <div className="w-2.5 h-2.5 bg-white rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
                    </div>
                    <span className="text-sm text-stone-400 group-hover:text-white transition-colors">Immediate Need</span>
                  </label>
                  <label className="cursor-pointer group flex items-center gap-2">
                    <div className="relative w-5 h-5 border border-stone-600 rounded-full flex items-center justify-center">
                      <input type="radio" name="interest" className="peer appearance-none w-full h-full absolute inset-0 cursor-pointer" />
                      <div className="w-2.5 h-2.5 bg-white rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
                    </div>
                    <span className="text-sm text-stone-400 group-hover:text-white transition-colors">Planning Ahead</span>
                  </label>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <label className="text-[10px] uppercase tracking-widest font-semibold text-stone-400">Care Urgency (1-10)</label>
                  <span className="text-xs font-mono text-white" id="rangeValue">5</span>
                </div>
                <input type="range" min="1" max="10" defaultValue="5" className="w-full" onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  const rangeValueEl = document.getElementById('rangeValue');
                  if (rangeValueEl) rangeValueEl.innerText = target.value;
                }} />
              </div>

              <button type="button" className="w-full bg-white text-stone-950 rounded-full py-4 text-xs font-bold uppercase tracking-widest hover:bg-stone-200 transition-colors mt-4">
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}
