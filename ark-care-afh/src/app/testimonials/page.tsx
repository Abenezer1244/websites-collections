export default function Testimonials() {
  const testimonials = [
    {
      text: "Ark Care AFH has been wonderful for my mother. She feels at home here, the staff treats her with genuine care and respect, and I feel confident knowing she's in good hands. The whole team goes above and beyond.",
      author: "Margaret S.",
      relation: "Daughter"
    },
    {
      text: "I moved here 6 months ago and it's been the best decision. The caregivers are patient and kind, the meals are delicious, and there's always something to do. I feel like part of a family here.",
      author: "Henry P.",
      relation: "Resident"
    },
    {
      text: "We can't thank Sarah and her team enough. The level of personalized attention my father receives is exceptional. They communicate with us regularly and truly care about his well-being.",
      author: "Jennifer K.",
      relation: "Daughter"
    },
    {
      text: "The staff here is professional, compassionate, and attentive. My wife receives excellent care for her specific needs, and I'm grateful for the peace of mind and support we receive.",
      author: "Robert M.",
      relation: "Spouse"
    },
    {
      text: "Coming to Ark Care AFH was the right choice for me. The environment is warm and welcoming, the meals are great, and the activities keep me engaged. I've made wonderful friends here too.",
      author: "Dorothy R.",
      relation: "Resident"
    },
    {
      text: "The transition to in-home care was smooth thanks to the team at Ark Care AFH. They listened to our concerns, answered all our questions, and created a care plan that works perfectly for my mother.",
      author: "David T.",
      relation: "Son"
    },
    {
      text: "What impressed me most was how they treat my mother as an individual with her own preferences and routines. They respect her independence while providing the support she needs.",
      author: "Linda J.",
      relation: "Daughter"
    },
    {
      text: "The safety and cleanliness of the facility are excellent. The staff is friendly, professional, and really seems to enjoy working with residents. We feel very fortunate to have found Ark Care AFH.",
      author: "James W.",
      relation: "Family Member"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-primary/70 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Testimonials</h1>
          <p className="text-lg mt-4 opacity-90 max-w-2xl">
            Hear from residents and families about their experience at Ark Care AFH
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What People Are Saying
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real reviews from residents and their families about the care they receive at Ark Care AFH
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-lg shadow-sm border border-border p-8 hover:shadow-md transition-shadow"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.relation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Why Families Trust Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">6</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Dedicated Staff
              </h3>
              <p className="text-muted-foreground">
                Trained, qualified professionals committed to excellent care
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">24</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Hours Care
              </h3>
              <p className="text-muted-foreground">
                Round-the-clock support and assistance available anytime
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Quality Assured
              </h3>
              <p className="text-muted-foreground">
                Rigorous standards and continuous improvement in all aspects of care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join Our Family
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Experience the Ark Care AFH difference. Schedule a tour and meet our team today.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Schedule a Tour
          </a>
        </div>
      </section>
    </>
  )
}
