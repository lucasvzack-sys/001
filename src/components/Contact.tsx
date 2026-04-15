import React from 'react';
import { Mail, MessageSquare, ArrowLeft } from 'lucide-react';

export default function Contact({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <button onClick={() => onNavigate('portal')} className="flex items-center text-gray-500 hover:text-orange-600 transition-colors font-medium mb-8">
        <ArrowLeft size={20} className="mr-2" /> Voltar ao Início
      </button>

      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 text-center">
        <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <MessageSquare size={40} className="text-orange-600" />
        </div>
        
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">Fale Conosco</h1>
        <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
          Tem alguma dúvida, sugestão de nova calculadora ou quer reportar um problema? Estamos à disposição para ouvir você.
        </p>

        <div className="bg-gray-50 p-8 rounded-2xl max-w-md mx-auto border border-gray-100 flex flex-col items-center">
          <Mail size={32} className="text-gray-400 mb-4" />
          <h2 className="text-xl font-bold text-gray-700 mb-2">E-mail de Contato</h2>
          <a 
            href="mailto:contato@sussego.com.br" 
            className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-md w-full"
          >
            lucasvzack@gmail.com
          </a>
        </div>
        
        <p className="text-sm text-gray-400 mt-10">
          Nota: O SUSsego é um projeto independente e não possui vínculo oficial com o Ministério da Saúde ou o Governo Federal.
        </p>
      </div>
    </div>
  );
}
