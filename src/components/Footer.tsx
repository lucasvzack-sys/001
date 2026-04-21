import React from 'react';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Footer({ onNavigate }: { onNavigate: (view: string) => void }) {
  const navigate = useNavigate();

  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <img src="/susegadoicone.png" alt="Logo" className="w-8 h-8 object-contain" />
              <span className="text-xl font-black text-gray-800 tracking-tighter">SUSsego.com.br</span>
            </div>
            <p className="text-gray-500 max-w-sm">
              Ferramentas gratuitas para facilitar o dia a dia médico.
            </p>
          </div>
        </div>

        {/* ESTA É A PARTE QUE ADICIONA OS LINKS LEGAIS */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SUSsego. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate('/privacidade')} 
              className="text-sm text-gray-500 hover:text-orange-600 transition-colors font-medium"
            >
            Política de Privacidade
          </button>
          <button 
            onClick={() => navigate('/contato')} 
            className="text-sm text-gray-500 hover:text-orange-600 transition-colors font-medium"
          >
            Contato
          </button>
          <button 
            onClick={() => onNavigate('sobre')} 
            className="text-sm text-gray-500 hover:text-orange-600 transition-colors font-medium"
          >
            Sobre o Projeto
          </button>
          <span className="flex items-center text-sm font-bold text-gray-400">
            Feito com <Heart size={14} className="mx-1 text-red-500" /> no Brasil
          </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
