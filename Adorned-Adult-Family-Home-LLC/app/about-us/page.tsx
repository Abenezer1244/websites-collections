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
            <span className="not-italic font-sans tracking-tighter text-stone-900">Grace AFH.</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl">
            Grace Adult Family Home is a licensed 6-bed adult family home in Lake Stevens, WA, offering a warm, family-like environment for seniors. Nestled in a quiet neighborhood by Lake Stevens, we provide a tranquil haven with picturesque surroundings.
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
                We are committed to dignity and respect in caring for each resident, ensuring they feel "at home" 24/7. Our dedicated staff helps residents with daily activities while creating a strong sense of community and belonging.
              </p>
              <p className="text-base text-stone-600 leading-relaxed">
                Residents enjoy a cozy, home-like atmosphere with spacious living quarters by the lake. Engaging activities promote social interaction and well-being in our small, supportive community where personalized, compassionate care is our priority.
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
                Fully licensed by Washington State DSHS (License #751087). Authorized to care for up to 6 non-related adults with professional, compassionate service.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-3xl border border-stone-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
                <i data-lucide="users" className="w-6 h-6 stroke-[1.5]"></i>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Belonging</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                With capacity for 6 residents, our home provides an intimate setting where staff can give one-on-one attention, creating genuine connections and a true sense of family.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white p-8 rounded-3xl border border-stone-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
                <i data-lucide="sparkles" className="w-6 h-6 stroke-[1.5]"></i>
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-3">Personalized Care</h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Every resident receives personalized care tailored to their unique needs. Our small community ensures individualized attention and respect for each person's dignity.
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
                Located in Lake Stevens, Washington, Grace Adult Family Home offers a tranquil setting in a quiet residential area surrounded by mature trees and close to parks, with a fenced yard and garden space for residents to enjoy.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <i data-lucide="map-pin" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-sm text-stone-400">2415 84th Dr NE, Lake Stevens, WA 98258</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <i data-lucide="phone" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a href="tel:+14253976530" className="text-sm text-stone-400 hover:text-white transition-colors">
                      (425) 397-6530
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <i data-lucide="mail" className="w-5 h-5"></i>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-sm text-stone-400">
                      Contact us for email inquiries
                    </p>
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
