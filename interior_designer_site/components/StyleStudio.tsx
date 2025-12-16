
import React, { useState } from 'react';
import { generateStylePalette } from '../services/geminiService';

const StyleStudio: React.FC = () => {
  const [style, setStyle] = useState('');
  const [palette, setPalette] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!style.trim()) return;
    setLoading(true);
    try {
      const data = await generateStylePalette(style);
      setPalette(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const suggestions = ["Japandi", "Brutalism", "Mid-Century Modern", "Desert Chic"];

  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto mb-32">
      <div className="bg-[#f2f1ed] rounded-[60px] p-8 md:p-20 relative overflow-hidden">
        {/* Decor Background Element */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-4 block">AI Concept Studio</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">Visualize your atmosphere instantly.</h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Enter an interior style name, and our AI will generate a professional color palette and material recommendation tailored for contemporary living.
          </p>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input 
              type="text" 
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              placeholder="e.g. Minimalist Zen"
              className="flex-1 px-8 py-5 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-black/5"
            />
            <button 
              onClick={handleGenerate}
              disabled={loading}
              className="bg-black text-white px-10 py-5 rounded-full font-bold hover:bg-gray-800 transition-all disabled:opacity-50"
            >
              {loading ? "Imagining..." : "Generate Palette"}
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            {suggestions.map((s) => (
              <button 
                key={s} 
                onClick={() => setStyle(s)}
                className="text-[10px] uppercase font-bold tracking-widest text-gray-400 border border-gray-200 px-4 py-2 rounded-full hover:border-black hover:text-black transition-all"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {palette && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <div>
              <h4 className="text-xs uppercase font-bold tracking-widest text-gray-400 mb-6">Color Palette</h4>
              <div className="flex flex-wrap gap-4">
                {palette.colors?.map((c: any, i: number) => (
                  <div key={i} className="group">
                    <div 
                      className="w-16 h-16 md:w-20 md:h-20 rounded-2xl shadow-sm mb-2 group-hover:scale-110 transition-transform cursor-pointer"
                      style={{ backgroundColor: c.hex }}
                    ></div>
                    <p className="text-[10px] font-bold uppercase truncate w-20 text-center">{c.name}</p>
                    <p className="text-[8px] text-gray-400 text-center">{c.hex}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs uppercase font-bold tracking-widest text-gray-400 mb-6">Key Materials</h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {palette.materials?.map((m: string, i: number) => (
                  <span key={i} className="bg-white px-4 py-2 rounded-lg text-xs font-medium shadow-sm border border-gray-50">{m}</span>
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed italic border-l-2 border-black pl-4">
                "{palette.summary}"
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StyleStudio;
