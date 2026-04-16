import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import Navbar from './Navbar'; // Adicionado

export default function PrivacyPolicy({ onNavigate }: { onNavigate: (view: any) => void }) {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Adicionamos a Navbar aqui */}
      <Navbar currentView="portal" onNavigate={onNavigate} />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <button onClick={() => onNavigate('portal')} className="flex items-center text-gray-500 hover:text-orange-600 transition-colors font-medium mb-8">
          <ArrowLeft size={20} className="mr-2" /> Voltar ao Início
        </button>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-8">
            <div className="bg-blue-50 p-4 rounded-2xl">
              <Shield size={32} className="text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-gray-800">Política de Privacidade</h1>
              <p className="text-gray-500 mt-1">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
            </div>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>O <strong>SUSsego.com.br</strong> respeita a sua privacidade e está comprometido em proteger os dados pessoais de seus usuários de acordo com a Lei Geral de Proteção de Dados Pessoais (LGPD).</p>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">1. Coleta e Uso de Informações</h2>
            <p>Nosso site opera localmente no seu navegador. <strong>Não coletamos e não armazenamos</strong> as informações médicas ou de exames que você digita em nossas ferramentas.</p>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">2. Uso de Cookies e Google AdSense</h2>
            <p>Exibimos anúncios fornecidos pelo <strong>Google AdSense</strong>. Ao utilizar nosso site, você concorda com o uso de cookies para essa finalidade.</p>
            
            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">3. Consentimento</h2>
            <p>Ao utilizar o nosso site, você concorda com a nossa Política de Privacidade.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
