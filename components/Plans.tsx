
import React from 'react';
import type { Plan } from '../types';

interface PlansProps {
  plans: Plan[];
}

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);


const PlanCard: React.FC<{ plan: Plan, isFeatured: boolean }> = ({ plan, isFeatured }) => {
    const cardClasses = `bg-slate-800 p-8 rounded-xl shadow-lg flex flex-col h-full transform transition-transform duration-300 hover:scale-105 ${isFeatured ? 'border-2 border-cyan-500 relative' : ''}`;

    return (
        <div className={cardClasses}>
            {isFeatured && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-cyan-500 text-slate-900 px-4 py-1 rounded-full text-sm font-bold tracking-wider">
                    POPULAR
                </div>
            )}
            <h3 className="text-2xl font-bold text-white text-center mb-2">{plan.name}</h3>
            <p className="text-center mb-6">
                <span className="text-5xl font-extrabold text-white">R${plan.price.toFixed(2).replace('.', ',')}</span>
                <span className="text-gray-400">/mês</span>
            </p>
            <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <CheckIcon />
                        <span className="text-gray-300">{feature}</span>
                    </li>
                ))}
            </ul>
             <button className={`w-full mt-auto px-6 py-3 font-bold rounded-lg transition-colors duration-300 ${isFeatured ? 'bg-cyan-500 text-slate-900 hover:bg-cyan-400' : 'bg-slate-700 text-white hover:bg-slate-600'}`}>
                Escolher Plano
            </button>
        </div>
    );
}

export const Plans: React.FC<PlansProps> = ({ plans }) => {
  return (
    <section id="plans" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Planos Flexíveis</h2>
          <p className="text-gray-400 mt-2 max-w-2xl mx-auto">Escolha o plano ideal para suas necessidades e comece a criar hoje mesmo.</p>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} isFeatured={plan.name === "Plano Profissional"}/>
          ))}
        </div>
      </div>
    </section>
  );
};
