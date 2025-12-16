
import React from 'react';
import { Home, Palette, PenTool, Layout, Layers, Lightbulb, LucideIcon } from 'lucide-react';

interface ServiceItem {
  Icon: LucideIcon;
  title: string;
  desc: string;
}

const services: ServiceItem[] = [
  { Icon: Home, title: 'Residential Design', desc: 'Personalized living spaces crafted for your lifestyle.' },
  { Icon: Palette, title: 'Color Consulting', desc: 'Expert color palettes that set the perfect mood.' },
  { Icon: PenTool, title: 'Space Planning', desc: 'Maximizing every square foot with smart layouts.' },
  { Icon: Layout, title: 'Furniture Selection', desc: 'Curating timeless pieces that speak to your style.' },
  { Icon: Layers, title: 'Material Selection', desc: 'High-quality textures and finishes for durability.' },
  { Icon: Lightbulb, title: 'Lighting Design', desc: 'Illuminating your space with both form and function.' },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-[#0a2319]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Premium Services</h2>
            <p className="text-gray-400 text-lg">We offer a wide range of interior design services to transform your vision into a stunning reality.</p>
          </div>
          <button className="text-yellow-400 font-bold flex items-center gap-2 hover:gap-4 transition-all pb-2 border-b-2 border-yellow-400">
            View All Services
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComponent = service.Icon;
            return (
              <div key={idx} className="bg-white/5 p-8 rounded-[2rem] border border-white/5 hover:bg-white/10 hover:border-yellow-400/30 transition-all group">
                <div className="w-14 h-14 bg-yellow-400/10 text-yellow-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 group-hover:text-[#0a2319] transition-all">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
