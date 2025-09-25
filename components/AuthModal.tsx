import React, { useState, useEffect } from 'react';
import { GoogleIcon } from './GoogleIcon';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView: 'login' | 'signup';
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, initialView }) => {
  const [view, setView] = useState(initialView);
  
  useEffect(() => {
      setView(initialView);
  }, [initialView]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Submitting for ${view}`);
    // Here you would handle form submission to your backend
  };

  const handleGoogleAuth = () => {
    console.log(`Signing in with Google for ${view}`);
    // Here you would initiate Google OAuth flow
  };
  
  const TabButton: React.FC<{ tabName: 'login' | 'signup', label: string }> = ({ tabName, label }) => (
    <button
      onClick={() => setView(tabName)}
      className={`w-1/2 py-3 text-center text-lg font-bold transition-colors duration-300 ${view === tabName ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400 hover:text-white'}`}
    >
      {label}
    </button>
  );

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-slate-800 rounded-2xl shadow-2xl shadow-cyan-500/10 w-full max-w-md m-4 relative transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors duration-300"
          aria-label="Fechar modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex border-b border-slate-700">
            <TabButton tabName="login" label="Entrar" />
            <TabButton tabName="signup" label="Cadastrar" />
        </div>
        
        <div className="p-8">
            <form onSubmit={handleAuth}>
                <div className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            required
                            className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                            placeholder="seu@email.com"
                        />
                    </div>
                     <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Senha</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            required
                            minLength={6}
                            className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all"
                            placeholder="••••••••"
                        />
                    </div>
                </div>

                <button type="submit" className="w-full mt-8 py-3 bg-cyan-500 text-slate-900 font-bold rounded-lg hover:bg-cyan-400 transition-colors duration-300 transform hover:scale-105">
                    {view === 'login' ? 'Entrar' : 'Criar Conta'}
                </button>
            </form>

            <div className="flex items-center my-6">
                <div className="flex-grow border-t border-slate-700"></div>
                <span className="mx-4 text-sm text-gray-500">OU</span>
                <div className="flex-grow border-t border-slate-700"></div>
            </div>
            
            <button 
              onClick={handleGoogleAuth}
              className="w-full flex items-center justify-center py-3 bg-white text-slate-800 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-300"
            >
              <GoogleIcon />
              Continuar com Google
            </button>
        </div>
      </div>
    </div>
  );
};
