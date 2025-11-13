'use client'

import Link from 'next/link'

export function WhyChooseSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-white via-slate-50/30 to-white overflow-hidden" data-section="why-choose">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-primary/6 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/4 via-primary/2 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 rounded-full mb-8 backdrop-blur-sm">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-bold text-sm uppercase tracking-wider">Why Choose Us</span>
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-tight">
            Experience the
            <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Difference
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Compassionate care meets professional excellence in a warm, home-like environment
          </p>
        </div>

        {/* Main Content - Creative Layout */}
        <div className="space-y-16 md:space-y-24">
          {/* Feature 1 - Large Left, Small Right */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl" />
              <div className="relative bg-white rounded-3xl p-10 md:p-12 shadow-xl border border-slate-200/50">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-5xl font-black text-primary mb-2">01</div>
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                      24/7 Professional Care
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Round-the-clock support from licensed professionals ensuring safety and comfort at all times.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Licensed nursing professionals</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Emergency response systems</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Medication management</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-black text-primary/20 mb-4">24/7</div>
                  <div className="text-xl font-bold text-slate-700">Always Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 - Small Left, Large Right */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center p-8">
                <div className="text-center">
                  <svg className="w-24 h-24 text-primary/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <div className="text-xl font-bold text-slate-700">Home-Like</div>
                </div>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl" />
              <div className="relative bg-white rounded-3xl p-10 md:p-12 shadow-xl border border-slate-200/50">
                <div className="flex items-start gap-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-5xl font-black text-primary mb-2">02</div>
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                      Home-Like Environment
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  A warm, welcoming setting designed to feel like home while providing professional care.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Comfortable private rooms</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Community gathering spaces</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Beautiful outdoor areas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 - Centered Large Card */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-3xl p-10 md:p-16 shadow-2xl border border-slate-200/50">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center gap-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="text-6xl font-black text-primary">03</div>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                    Activity & Engagement
                  </h3>
                  <p className="text-xl text-slate-700 leading-relaxed mb-8 max-w-2xl mx-auto">
                    Meaningful activities and social engagement to support physical and mental well-being.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl">
                    <div className="text-3xl font-black text-primary mb-2">Daily</div>
                    <div className="text-slate-700">Social activities</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl">
                    <div className="text-3xl font-black text-primary mb-2">Fun</div>
                    <div className="text-slate-700">Recreational programs</div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl">
                    <div className="text-3xl font-black text-primary mb-2">Support</div>
                    <div className="text-slate-700">Mental wellness</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-10 py-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl border-2 border-primary/20 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-lg font-bold text-slate-900">Ready to learn more?</p>
                <p className="text-sm text-slate-600">Schedule a tour and see our facility</p>
              </div>
            </div>
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg"
            >
              Schedule Tour
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

