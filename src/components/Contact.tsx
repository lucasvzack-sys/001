import React from 'react';
import Navbar from './Navbar';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact({ onNavigate }: any) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentView="contact" onNavigate={onNavigate} />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* COLUNA DA ESQUERDA: IMAGEM/ÍCONE ESTILIZADO */}
            <div className="bg-orange-600 p-12 flex flex-col items-center justify-center text-white">
              <div className="bg-orange-500 p-8 rounded-full mb-6 shadow-lg">
                <Mail size={80} strokeWidth={1.5} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Fale Conosco</h2>
              <p className="text-orange-100 text-center text-sm">
                Estamos aqui para ouvir as suas sugestões, críticas ou propostas de parceria.
              </p>
            </div>

            {/* COLUNA DA DIREITA: INFORMAÇÕES DE CONTACTO */}
            <div className="p-8 md:p-12 flex flex-col justify-center space-y-8">
              <div>
                <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Contato</h1>
                <p className="text-gray-500">
                  Utilize os canais abaixo para entrar em contato direto com a nossa equipa.
                </p>
              </div>

              <div className="space-y-4">
                <a 
                  href="mailto:lucasvzack@gmail.com" 
                  className="flex items-center p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-orange-300 hover:bg-orange-50 transition-all group"
                >
                  <div className="bg-white p-3 rounded-xl shadow-sm mr-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <Send size={24} className="text-orange-600 group-hover:text-white" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">E-mail</span>
                    <span className="text-gray-700 font-medium">lucasvzack@gmail.com</span>
                  </div>
                </a>

                <div className="flex items-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="bg-white p-3 rounded-xl shadow-sm mr-4">
                    <MapPin size={24} className="text-orange-600" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Localização</span>
                    <span className="text-gray-700 font-medium">Porto Alegre, RS - Brasil</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
