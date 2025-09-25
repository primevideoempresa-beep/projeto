
import React from 'react';
import type { About as AboutType } from '../types';

interface AboutProps {
  about: AboutType;
}

export const About: React.FC<AboutProps> = ({ about }) => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-4xl font-bold text-white mb-4">{about.title}</h2>
        <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4 mb-6"></div>
        <p className="text-lg text-gray-300 leading-relaxed">
          {about.content}
        </p>
      </div>
    </section>
  );
};
