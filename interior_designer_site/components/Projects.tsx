
import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Modern Minimalist Loft',
    category: 'Residential',
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 2,
    title: 'Botanical Workspace',
    category: 'Commercial',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 3,
    title: 'Rustic Kitchen Design',
    category: 'Interior',
    img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 4,
    title: 'Nordic Inspired Suite',
    category: 'Hotel',
    img: 'https://images.unsplash.com/photo-1616594111350-475220eb1922?auto=format&fit=crop&q=80&w=1200'
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-[#061911]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Explore Our Work</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Take a look at some of our recent transformations where style meets comfort and functionality.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="relative group cursor-pointer overflow-hidden rounded-[2.5rem]">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2319]/90 via-[#0a2319]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <span className="text-yellow-400 text-sm font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform delay-100">{project.category}</span>
                <h3 className="text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform delay-200">{project.title}</h3>
                <button className="mt-4 w-fit bg-white text-[#0a2319] px-6 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all delay-300">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
