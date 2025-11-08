export default function Gallery() {
  const galleryPlaceholders = [
    { id: 1, title: "Facility exterior" },
    { id: 2, title: "Main living room" },
    { id: 3, title: "Dining area" },
    { id: 4, title: "Bedroom example" },
    { id: 5, title: "Activities & recreation" },
    { id: 6, title: "Outdoor spaces" },
    { id: 7, title: "Kitchen & meals" },
    { id: 8, title: "Common areas" },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/90 to-primary/70 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Gallery</h1>
          <p className="text-lg mt-4 opacity-90 max-w-2xl">
            Take a tour of Ark Care AFH and see our comfortable, welcoming home environment
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryPlaceholders.map((item) => (
              <div
                key={item.id}
                className="group relative bg-card rounded-lg overflow-hidden border border-border hover:shadow-md transition-all cursor-pointer"
              >
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="p-4 group-hover:bg-primary/5 transition-colors">
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Schedule a Tour
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We'd love to show you around Ark Care AFH! Contact us to schedule a personalized tour of our facility and meet our caring staff.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Schedule Your Tour
          </a>
        </div>
      </section>
    </>
  )
}
