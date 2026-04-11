import React from 'react';
import { Home, Pill, FileText, Heart, Mail } from 'lucide-react';
import { View } from '../types';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

export default function Navbar({ currentView, onNavigate }: NavbarProps) {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between overflow-x-auto">
        <div 
          className="flex items-center cursor-pointer group shrink-0"
          onClick={() => onNavigate('portal')}
        >
          <img 
            src="susegado.png" 
            alt="SUSsegado" 
            className="h-8 mr-2 group-hover:scale-110 transition-transform"
            referrerPolicy="no-referrer"
          />
          <span className="font-bold text-gray-800 hidden sm:inline">SUSsegado</span>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-4 ml-4">
          <button
            onClick={() => onNavigate('portal')}
            className="p-2 sm:px-3 sm:py-2 rounded-xl flex items-center text-gray-600 hover:bg-gray-100 transition-colors"
            title="Início"
          >
            <Home size={20} className="sm:mr-2" />
            <span className="hidden md:inline font-medium">Início</span>
          </button>

          <button
            onClick={() => onNavigate('temnoposto')}
            className={`p-2 sm:px-3 sm:py-2 rounded-xl flex items-center transition-all ${
              currentView === 'temnoposto' 
                ? 'bg-green-50 text-sus-green font-bold' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            title="TemNoPosto?"
          >
            <Pill size={20} className="sm:mr-2" />
            <span className="hidden md:inline font-medium">TemNoPosto?</span>
          </button>

          <button
            onClick={() => onNavigate('laudai')}
            className={`p-2 sm:px-3 sm:py-2 rounded-xl flex items-center transition-all ${
              currentView === 'laudai' 
                ? 'bg-blue-50 text-medical-blue font-bold' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            title="LaudAí"
          >
            <FileText size={20} className="sm:mr-2" />
            <span className="hidden md:inline font-medium">LaudAí</span>
          </button>

          {/* Novo botão de Contato */}
          <a
            href="mailto:contato@sussegado.com.br"
            className="p-2 sm:px-3 sm:py-2 rounded-xl flex items-center text-gray-600 hover:bg-gray-100 transition-colors"
            title="Contato"
          >
            <Mail size={20} className="sm:mr-2" />
            <span className="hidden md:inline font-medium">Contato</span>
          </a>

          {/* Novo botão de Doação */}
          <a
            href="https://link.mercadopago.com.br/sussegado"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:px-4 sm:py-2 rounded-xl flex items-center text-pink-600 bg-pink-50 hover:bg-pink-100 transition-colors font-bold"
            title="Apoie o Projeto"
          >
            <Heart size={20} className="sm:mr-2 fill-current" />
            <span className="hidden md:inline">Doar</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
