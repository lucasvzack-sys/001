// src/components/Footer.tsx
import React from 'react';
import { View } from '../types';

interface FooterProps {
  onNavigate: (view: View) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-auto w-full">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        
        {/* Mapa do Site */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-white mb-4">Mapa do Site</h3>
          <ul className="flex flex-wrap justify-center md:justify-start gap-4 font-medium">
            <li><button onClick={() => onNavigate('portal')} className="hover:text-white transition-colors">Início</button></li>
            <li><button onClick={() => onNavigate('temnoposto')} className="hover:text-white transition-colors">TemNoPosto?</button></li>
            <li><button onClick={() => onNavigate('laudai')} className="hover:text-white transition-colors">LaudAí</button></li>
            <li><button onClick={() => onNavigate('doar')} className="hover:text-white transition-colors">Apoie o Projeto</button></li>
          </ul>
        </div>

        {/* Contato & Direitos */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-bold text-white mb-4">Contato</h3>
          <p className="mb-2">
            <a href="mailto:lucasvzack@gmail.com" className="hover:text-white transition-colors">
              SUSsegado.net
            </a>
          </p>
          <p className="text-sm text-gray-500 mt-4">
            © {new Date().getFullYear()} SUSsegado.net - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
