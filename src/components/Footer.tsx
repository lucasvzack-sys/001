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

        {/* Contato, QR Code & Direitos */}
        <div className="text-center md:text-right flex flex-col items-center md:items-end">
          <h3 className="text-lg font-bold text-white mb-4">Contato</h3>
          <p className="mb-4">
            <a href="mailto:lucasvzack@gmail.com" className="hover:text-white transition-colors">
              SUSsego.com.br
            </a>
          </p>

          {/* QR Code Discreto */}
          <div 
            className="flex flex-col items-center md:items-end mb-4 group cursor-pointer hidden sm:flex" 
            title="Acesse pelo celular"
          >
            <div className="bg-white p-1 rounded-lg opacity-30 group-hover:opacity-100 transition-opacity duration-300 shadow-sm">
              <img 
                src="/qrcode.png" 
                alt="QR Code para acesso mobile" 
                className="w-14 h-14"
              />
            </div>
            <span className="text-[10px] mt-1 text-gray-500 group-hover:text-gray-300 transition-colors">
              Versão Mobile
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-2">
            © {new Date().getFullYear()} SUSsego.com.br - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
