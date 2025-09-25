import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  onStartCreatingClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, onStartCreatingClick }) => {
  return (
    <section id="hero" className="relative py-20 md:py-32 text-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1600/900?grayscale&blur=2')" }}></div>
      <div className="absolute inset-0 bg-slate-900/70"></div>
      <div className="relative container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
          {title}
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
          {subtitle}
        </p>
         <button onClick={onStartCreatingClick} className="mt-8 px-8 py-3 bg-cyan-500 text-slate-900 font-bold rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105">
          Comece a Criar
        </button>
      </div>
    </section>
  );
};
