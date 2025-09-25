
import React from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Plans } from '../components/Plans';
import { About } from '../components/About';
import { siteData } from '../data';

interface HomePageProps {
  onStartCreatingClick: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onStartCreatingClick }) => {
  return (
    <>
      <Hero
        title="Transforme suas ideias em imagens e vídeos com Inteligência Artificial"
        subtitle="Gere conteúdo de alta qualidade de forma rápida e personalizada com o Studio IA Video."
        onStartCreatingClick={onStartCreatingClick}
      />
      <Services services={siteData.services} />
      <Plans plans={siteData.plans} />
      <About about={siteData.about_us} />
    </>
  );
};