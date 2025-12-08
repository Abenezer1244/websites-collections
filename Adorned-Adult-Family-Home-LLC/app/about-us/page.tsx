'use client';

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutUs() {
  return (
    <main className="w-full max-w-[1600px] bg-cream lg:rounded-[2.5rem] shadow-2xl overflow-hidden relative min-h-[95vh] flex flex-col">

      <Navbar activePage="about" />

      {/* Hero Section */}
      <section className="px-6 py-16 md:px-12 lg:px-20 md:py-24">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-900/10 bg-white/40 backdrop-blur-sm mb-8 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500"></span>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-stone-600">Our Story</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8">
            <span className="italic text-pink-500">About</span> <br />
            <span className="not-italic font-sans tracking-tighter text-stone-900">Adorned AFH.</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl">
            Adorned Adult Family Home is a warm, family-run residential care home in Auburn, WA. Established in 2022, we serve up to six adults in a cozy 3-bedroom house in downtown Auburn.
          </p>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="px-6 py-16 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6 italic">Our Mission</h2>
              <p className="text-base text-stone-600 leading-relaxed mb-6">
                To provide loving and skillful care to our residents, in the warmth and comfort of a real home, with compassionate, professional individualized care in a pleasant and peaceful environment.
              </p>
              <p className="text-base text-stone-600 leading-relaxed">
                Inside and out, the atmosphere feels like home. Common areas are bright and tidy, and a garden and living room with TV and Wi-Fi create a comfortable setting. As families note, "the environment is warm and inviting, creating a sense of belonging for every resident."
              </p>
            </div>

            <div className="relative h-[400px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=1000&auto=format&fit=crop"
                alt="Care team"
                width={1000}
                height={800}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 py-16 md:px-12 lg:px-20 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-12 italic text-center">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-3xl border border-stone-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-500 mb-6">
                <i data-lucide="heart" className="w-6 h-6 stroke-[1.5]"></i>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Dignity</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Every resident is treated with respect and valued for who they are. Each caregiver treats residents like family.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-3xl border border-stone-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 rounded-2xl bg-stone-50 flex items-center justify-center text-stone-900 mb-6">
                <i data-lucide="shield-check" className="w-6 h-6 stroke-[1.5]"></i>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Professionalism</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Fully licensed by Washington State (DSHS). Licensed nurses oversee medication systems, and caregivers are home-care-aide certified.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-3xl border border-stone-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
                <i data-lucide="users" className="w-6 h-6 stroke-[1.5]"></i>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Belonging</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                The home is immaculately clean and beautifully maintained. Rooms are cozy and well-appointed, offering a personal touch that makes residents feel at home.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white p-8 rounded-3xl border border-stone-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                <i data-lucide="sparkles" className="w-6 h-6 stroke-[1.5]"></i>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Personalized Care</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Low 1:2 staff-to-resident ratio ensures personalized attention. Each resident's care plan is tailored to their unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-16 md:px-12 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6 italic">Our Care Team</h2>
            <p className="text-base text-stone-600 max-w-2xl mx-auto">
              Our dedicated team of compassionate professionals is committed to providing exceptional care 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop"
                  alt="Team member"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-1">Licensed Care Provider</h3>
              <p className="text-sm text-stone-500 mb-3">Lead Nurse</p>
              <p className="text-xs text-stone-400 leading-relaxed">
                15+ years of experience in senior care
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
                  alt="Team member"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-1">Certified Caregiver</h3>
              <p className="text-sm text-stone-500 mb-3">Activities Coordinator</p>
              <p className="text-xs text-stone-400 leading-relaxed">
                Specialized in memory care and enrichment
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop"
                  alt="Team member"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-semibold text-stone-900 mb-1">Nutrition Specialist</h3>
              <p className="text-sm text-stone-500 mb-3">Culinary Director</p>
              <p className="text-xs text-stone-400 leading-relaxed">
                Creating healthy, delicious meals daily
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Facility */}
      <section className="px-6 py-16 md:px-12 lg:px-20 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 italic">Our Location</h2>
              <p className="text-base text-stone-300 leading-relaxed mb-6">
                Located in downtown Auburn, Washington, Adorned Adult Family Home offers a peaceful setting in a cozy 3-bedroom house with easy access to medical facilities and community amenities.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <i data-lucide="map-pin" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-sm text-stone-400">1115 I Street NE, Auburn, WA 98002</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <i data-lucide="phone" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a href="tel:+12533865737" className="text-sm text-stone-400 hover:text-white transition-colors">
                      (253) 386-5737
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <i data-lucide="mail" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:adornedafh@gmail.com" className="text-sm text-stone-400 hover:text-white transition-colors">
                      adornedafh@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[400px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop"
                alt="Facility exterior"
                width={1000}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}
