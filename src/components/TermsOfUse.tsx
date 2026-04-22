import React from 'react';
import { FileText, ArrowLeft, AlertTriangle } from 'lucide-react';
import Navbar from './Navbar';

export default function TermsOfUse({ onNavigate }: { onNavigate: (view: any) => void }) {
  const lastUpdate = new Date().toLocaleDateString('pt-BR');

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar currentView="portal" onNavigate={onNavigate} />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <button 
          onClick={() => onNavigate('portal')} 
          className="flex items-center text-gray-500 hover:text-orange-600 transition-colors font-medium mb-8 group"
        >
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
          Voltar ao Início
        </button>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-8">
            <div className="bg-orange-50 p-4 rounded-2xl">
              <FileText size={32} className="text-orange-600" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-gray-800">Termos de Uso</h1>
              <p className="text-gray-500 mt-1">Última atualização: {lastUpdate}</p>
            </div>
          </div>

          <div className="space-y-8 text-gray-600 leading-relaxed text-justify">
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">1. Natureza do Serviço</h2>
              <p>
                O <strong>SUSsego.com.br</strong> é um portal de ferramentas auxiliares para profissionais e estudantes de saúde. O acesso é gratuito e o uso implica na aceitação total destes termos.
              </p>
            </section>

            <section className="bg-red-50 p-6 rounded-2xl border border-red-100 text-red-900">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="text-red-600" />
                <h2 className="text-xl font-bold">2. Isenção de Responsabilidade Médica</h2>
              </div>
              <p className="font-medium">
                As calculadoras clínicas, o sumarizador de laudos e o buscador de medicamentos são estritamente para fins de <strong>apoio à decisão e educação</strong>. 
                Estes sistemas não substituem o julgamento clínico profissional. Toda e qualquer conduta médica, diagnóstico ou prescrição é de inteira e exclusiva responsabilidade do profissional assistente. O SUSsego não se responsabiliza por erros decorrentes do uso inadequado das ferramentas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">3. Limitações da Tecnologia (IA e Dados)</h2>
              <p className="mb-4">
                <strong>LaudAí:</strong> Utiliza modelos de inteligência artificial de terceiros (Groq/Llama). IAs podem gerar "alucinações" ou omitir dados fundamentais. A revisão humana do laudo original é obrigatória.
              </p>
              <p>
                <strong>TemNoPosto?:</strong> As informações baseiam-se na RENAME e em dados públicos municipais. A disponibilidade real pode variar conforme o estoque local e decisões administrativas das prefeituras.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">4. Links de Terceiros e Anúncios</h2>
              <p>
                O portal exibe anúncios do Google AdSense. Não controlamos o conteúdo dos sites anunciados e não nos responsabilizamos por produtos ou serviços oferecidos através desses banners.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">5. Propriedade Intelectual</h2>
              <p>
                O código-fonte, design e logotipos do portal são de propriedade do criador do projeto. É proibida a reprodução total ou parcial para fins comerciais sem autorização prévia.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">6. Alterações nos Termos</h2>
              <p>
                Reservamo-nos o direito de modificar estes termos a qualquer momento, visando a melhoria do serviço e a adequação legal. O uso continuado do portal após alterações constitui aceitação dos novos termos.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
