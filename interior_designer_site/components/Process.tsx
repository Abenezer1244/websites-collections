
import React from 'react';

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We begin with a deep dive into your lifestyle, preferences, and the architectural context of your space."
  },
  {
    num: "02",
    title: "Concept",
    desc: "Our designers craft a visual narrative through mood boards, material samples, and spatial layouts."
  },
  {
    num: "03",
    title: "Development",
    desc: "Precision technical drawings and 3D visualizations bring the concept into a tangible reality."
  },
  {
    num: "04",
    title: "Realization",
    desc: "Master craftsmen and project managers oversee every detail of the installation and finishing."
  }
];

const Process: React.FC = () => {
  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto mb-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-4 block">How we work</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">The Path to <br/>Mastery.</h2>
        </div>
        <p className="max-w-md text-gray-500 text-sm leading-relaxed">
          Our methodology is rooted in Italian heritage and modern efficiency, ensuring a seamless journey from the first sketch to the final touch.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
        {steps.map((step, idx) => (
          <div key={idx} className="group p-8 rounded-[40px] bg-white border border-transparent hover:border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500">
            <span className="text-4xl font-black text-gray-100 group-hover:text-black transition-colors duration-500 block mb-8">{step.num}</span>
            <h3 className="text-xl font-bold mb-4">{step.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
