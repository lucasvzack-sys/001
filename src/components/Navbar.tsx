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
            src="susegadoicone.png" 
            alt="SUSsego.com.br" 
            className="h-14 mr-2 group-hover:scale-110 transition-transform"
            referrerPolicy="no-referrer"
          />
          <span className="font-bold text-gray-800 hidden sm:inline">SUSsego.com.br</span>
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
            href="mailto:lucasvzack@gmail.com"
            className="p-2 sm:px-3 sm:py-2 rounded-xl flex items-center text-gray-600 hover:bg-gray-100 transition-colors"
            title="Contato"
          >
            <Mail size={20} className="sm:mr-2" />
            <span className="hidden md:inline font-medium">Contato</span>
          </a>

          {/* Botão de Doação atualizado */}
          <button
            onClick={() => onNavigate('doar')}
            className={`p-2 sm:px-4 sm:py-2 rounded-xl flex items-center font-bold transition-colors ${
              currentView === 'doar'
                ? 'bg-pink-100 text-pink-700'
                : 'text-pink-600 bg-pink-50 hover:bg-pink-100'
            }`}
            title="Apoie o Projeto"
          >
            <Heart size={20} className="sm:mr-2 fill-current" />
            <span className="hidden md:inline">Doar</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
