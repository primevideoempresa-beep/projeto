
import React from 'react';

interface FooterProps {
  siteName: string;
  email: string;
}

export const Footer: React.FC<FooterProps> = ({ siteName, email }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-950 text-gray-400">
      <div className="container mx-auto px-6 py-10 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Entre em Contato</h3>
        <p className="mb-6">
          Tem alguma dúvida? Envie um email para nós.
        </p>
        <a 
          href={`mailto:${email}`} 
          className="text-cyan-400 text-lg hover:text-cyan-300 transition-colors duration-300"
        >
          {email}
        </a>
        <div className="mt-8 border-t border-gray-800 pt-6">
          <p>&copy; {currentYear} {siteName}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
