
import React from 'react';
import { Link } from 'react-router-dom';
import type { Service } from '../types';

interface ServicesProps {
  services: Service[];
}

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300 transform hover:-translate-y-2">
    <h3 className="text-2xl font-bold text-cyan-400 mb-3">{service.name}</h3>
    <p className="text-gray-400 mb-4">{service.description}</p>
    <Link to={service.url} className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors duration-300">
      Saiba mais &rarr;
    </Link>
  </div>
);

export const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Nossos Serviços</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};