import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy({ onNavigate }: { onNavigate: (view: string) => void }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
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
          <p>O <strong>SUSsego.com.br</strong> respeita a sua privacidade e está comprometido em proteger os dados pessoais de seus usuários de acordo com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).</p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">1. Coleta e Uso de Informações</h2>
          <p>Nosso site possui ferramentas como as calculadoras médicas e o sistema de busca de medicamentos que operam localmente no seu navegador. <strong>Não coletamos, não armazenamos em banco de dados e não vendemos</strong> as informações médicas ou de exames (como no LaudAí) que você digita em nossas ferramentas. O processamento é feito para fornecer o resultado imediato na tela.</p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">2. Uso de Cookies e Google AdSense</h2>
          <p>Para manter o SUSsego gratuito, exibimos anúncios fornecidos pelo <strong>Google AdSense</strong>. Ao utilizar nosso site, você concorda com o uso de cookies para essa finalidade:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Fornecedores de terceiros, incluindo o Google, usam cookies para veicular anúncios com base em visitas anteriores do usuário ao nosso website ou a outros websites.</li>
            <li>O uso de cookies de publicidade (como o cookie DART) permite que o Google e seus parceiros veiculem anúncios para os usuários com base nas visitas feitas aos seus sites e/ou a outros sites na Internet.</li>
            <li>Os usuários podem desativar a publicidade personalizada acessando as <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Configurações de anúncios do Google</a> ou acessando o site <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.aboutads.info</a> para desativar o uso de cookies de publicidade personalizada de terceiros.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">3. Consentimento</h2>
          <p>Ao utilizar o nosso site, você concorda com a nossa Política de Privacidade. Caso não concorde com os termos aqui descritos, pedimos gentilmente que interrompa o uso de nossas plataformas.</p>

          <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">4. Contato</h2>
          <p>Se você tiver alguma dúvida sobre nossa Política de Privacidade, entre em contato conosco através da nossa <button onClick={() => onNavigate('contato')} className="text-blue-600 hover:underline font-medium">Página de Contato</button>.</p>
        </div>
      </div>
    </div>
  );
}
