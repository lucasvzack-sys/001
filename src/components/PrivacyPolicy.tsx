import React from 'react';
import { Shield, ArrowLeft, ExternalLink } from 'lucide-react';
import Navbar from './Navbar';

export default function PrivacyPolicy({ onNavigate }: { onNavigate: (view: any) => void }) {
  const lastUpdate = new Date().toLocaleDateString('pt-BR');

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar currentView="portal" onNavigate={onNavigate} />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <button 
          onClick={() => onNavigate('portal')} 
          className="flex items-center text-gray-500 hover:text-medical-blue transition-colors font-medium mb-8 group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
          Voltar ao Início
        </button>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-8">
            <div className="bg-blue-50 p-4 rounded-2xl">
              <Shield size={32} className="text-medical-blue" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-gray-800">Política de Privacidade</h1>
              <p className="text-gray-500 mt-1">Última atualização: {lastUpdate}</p>
            </div>
          </div>

          <div className="space-y-8 text-gray-600 leading-relaxed text-justify">
            <section>
              <p>
                O portal <strong>SUSsego.com.br</strong> tem como compromisso a transparência e a proteção da privacidade de seus usuários. Esta política descreve como tratamos as informações no contexto das nossas ferramentas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">1. Coleta de Dados e Processamento Local</h2>
              <p>
                Nossa filosofia é a minimização de dados. O processamento das calculadoras e a análise de laudos via IA ocorrem de forma temporária. <strong>Não armazenamos</strong> em nossos servidores quaisquer dados sensíveis, prontuários, nomes de pacientes ou resultados de exames inseridos nas ferramentas.
              </p>
            </section>

             <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4"> 2.Cookies e Publicidade do Google AdSense</h2>
              <p className="mb-4">
                Para manter o portal gratuito e acessível, utilizamos o <strong>Google AdSense</strong> para veicular anúncios. O Google, como fornecedor de terceiros, utiliza cookies para exibir anúncios neste site:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>O Google utiliza cookies para veicular anúncios com base em visitas anteriores do usuário ao nosso ou a outros websites.</li>
                <li>Com o uso de cookies de publicidade, o Google e os parceiros dele podem veicular anúncios para os usuários com base nas visitas feitas aos seus sites e/ou a outros sites na Internet.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">3. Como desativar a Publicidade Personalizada</h2>
              <p className="mb-4">
                Você pode optar por desativar a publicidade personalizada acessando as configurações do Google:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://www.google.com/settings/ads" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-xl font-bold text-sm hover:border-medical-blue hover:text-medical-blue transition-all"
                >
                  Configurações de Anúncios <ExternalLink size={14} />
                </a>
                <a 
                  href="http://www.aboutads.info" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-gray-200 rounded-xl font-bold text-sm hover:border-medical-blue hover:text-medical-blue transition-all"
                >
                  AboutAds (Terceiros) <ExternalLink size={14} />
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">4. Logs de Servidor</h2>
              <p>
                Como a maioria dos sites, coletamos automaticamente certas informações não identificáveis, como endereços IP, tipo de navegador, provedor de serviços de Internet (ISP), páginas de referência/saída e carimbo de data/hora para análise de tráfego e segurança do servidor.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">5. Consentimento</h2>
              <p>
                Ao utilizar o SUSsego.com.br, você concorda com os termos desta Política de Privacidade e com o processamento de dados pelo Google conforme descrito acima.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
