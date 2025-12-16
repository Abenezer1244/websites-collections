
import React from 'react';

const collections = [
  {
    name: "Mondrian Sofa",
    designer: "Jean-Marie Massaud",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000",
    tag: "New Arrival"
  },
  {
    name: "Concorde Table",
    designer: "Emmanuel Gallina",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=1000",
    tag: "Timeless"
  },
  {
    name: "Ipanema Chair",
    designer: "Jean-Marie Massaud",
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=1000",
    tag: "Exclusive"
  }
];

const FeaturedCollections: React.FC = () => {
  return (
    <section className="bg-white py-32 mb-32 overflow-hidden">
      <div className="px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl font-bold tracking-tighter">Iconic Pieces.</h2>
          <button className="text-xs font-bold uppercase tracking-widest border-b border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
            Browse All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {collections.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative h-[450px] rounded-[40px] overflow-hidden mb-6">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    {item.tag}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-xl mb-1">{item.name}</h4>
                  <p className="text-gray-400 text-sm italic">{item.designer}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
