import React from 'react';
import { FileText, ArrowLeft } from 'lucide-react';
import Navbar from './Navbar';

export default function TermsOfUse({ onNavigate }: { onNavigate: (view: any) => void }) {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar currentView="portal" onNavigate={onNavigate} />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <button onClick={() => onNavigate('portal')} className="flex items-center text-gray-500 hover:text-orange-600 transition-colors font-medium mb-8">
          <ArrowLeft size={20} className="mr-2" /> Voltar ao Início
        </button>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-8">
            <div className="bg-orange-50 p-4 rounded-2xl">
              <FileText size={32} className="text-orange-600" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-gray-800">Termos de Uso</h1>
              <p className="text-gray-500 mt-1">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
            </div>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">1. Aceitação dos Termos</h2>
              <p>Ao utilizar o portal <strong>SUSsego.com.br</strong>, você concorda integralmente com estes termos. Se não concordar, por favor, não utilize as ferramentas.</p>
            </section>

            <section className="bg-amber-50 p-6 rounded-2xl border border-amber-100 text-amber-900">
              <h2 className="text-xl font-bold mb-3">2. Isenção de Responsabilidade Médica</h2>
              <p className="font-medium">
                As ferramentas (CalculAí, LaudAí, TemNoPosto?) são de caráter exclusivamente informativo e de apoio à decisão. 
                <strong> Não substituem o julgamento clínico</strong>, anamnese ou exame físico. Condutas baseadas nestas ferramentas são de inteira responsabilidade do profissional de saúde.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">3. Uso do LaudAí (IA)</h2>
              <p>O LaudAí utiliza inteligência artificial para sumarização. A IA pode cometer erros ou omitir dados críticos. É obrigatório conferir o laudo original antes de qualquer decisão terapêutica.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">4. TemNoPosto?</h2>
              <p>As informações de medicamentos baseiam-se em listas públicas (RENAME). A disponibilidade física real depende do estoque local de cada unidade de saúde.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">5. Propriedade Intelectual</h2>
              <p>O design, logotipos e códigos do portal são de propriedade exclusiva do SUSsego.com.br.</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
