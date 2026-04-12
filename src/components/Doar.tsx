// src/components/Doar.tsx
import React from 'react';
import { Heart, Mail, ExternalLink } from 'lucide-react';
import { View } from '../types';
import Navbar from './Navbar';

interface DoarProps {
  onNavigate: (view: View) => void;
}

export default function Doar({ onNavigate }: DoarProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar currentView="doar" onNavigate={onNavigate} />
      
      <main className="flex-grow max-w-4xl mx-auto px-4 py-12 w-full">
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
          
          <div className="flex flex-col items-center justify-center text-center mb-10">
            <div className="bg-pink-100 p-4 rounded-full mb-4">
              <Heart className="text-pink-600 w-12 h-12" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Apoie o SUSsegado.net</h1>
          </div>

          <div className="space-y-8 text-gray-700">
            {/* Quem Somos */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Quem Somos?</h2>
              <p className="leading-relaxed text-lg">
                Olá! Meu nome é Lucas Zacaria, sou estudante de medicina e o criador deste projeto. O <strong>SUSsegado</strong> nasceu com o objetivo de transformar burocracia em facilidade. Por meio das ferramentas TemNoPosto? e o LaudAí, meu objetivo é democratizar o acesso à informação e simplificar a compreensão de exames e a busca por medicamentos, conectando as demandas do dia a dia às soluções digitais.
              </p>
            </section>

            {/* Por que doar? */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Por que a sua doação é importante?</h2>
              <p className="leading-relaxed text-lg">
                Todas as ferramentas oferecidas aqui (como o <i>TemNoPosto?</i> e o <i>LaudAí</i>) são mantidas de forma <strong>100% gratuita</strong>. Porém, manter esse site funcionando envolve custos constantes com servidores de hospedagem, domínios, integração de dados e APIs de inteligência artificial utilizadas para os laudos médicos. 
              </p>
              <p className="leading-relaxed text-lg mt-3">
                Sua contribuição, de qualquer valor, ajuda a cobrir esses custos operacionais e me permite dedicar mais tempo ao desenvolvimento de novas funcionalidades para ajudar pacientes e profissionais de saúde.
              </p>
            </section>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 pt-8">
              <a
                href="https://link.mercadopago.com.br/sussegado"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-4 bg-pink-600 text-white rounded-xl font-bold hover:bg-pink-700 transition-colors shadow-lg transform hover:-translate-y-1"
              >
                <Heart className="mr-2 fill-current" size={20} />
                Doar pelo Mercado Pago
                <ExternalLink className="ml-2" size={18} />
              </a>
              
              <a
                href="mailto:lucasvzack@gmail.com"
                className="flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-800 rounded-xl font-bold hover:bg-gray-200 transition-colors shadow-sm"
              >
                <Mail className="mr-2" size={20} />
                Falar com o Desenvolvedor
              </a>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
