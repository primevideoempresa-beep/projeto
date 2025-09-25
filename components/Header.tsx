
import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  siteName: string;
  onLoginClick: () => void;
  onSignUpClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ siteName, onLoginClick, onSignUpClick }) => {
  return (
    <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-md shadow-cyan-500/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold text-white tracking-wider">
            <span className="text-cyan-400">Studio</span> IA Video
          </h1>
        </Link>
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-6">
            <li><a href="/#services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Serviços</a></li>
            <li><a href="/#plans" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Planos</a></li>
            <li><a href="/#about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Sobre</a></li>
            <li><a href="/#contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">Contato</a></li>
          </ul>
          <div className="flex items-center space-x-4 ml-6">
            <button onClick={onLoginClick} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              Entrar
            </button>
            <button onClick={onSignUpClick} className="px-5 py-2 bg-cyan-500 text-slate-900 font-bold rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105">
              Cadastrar
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};