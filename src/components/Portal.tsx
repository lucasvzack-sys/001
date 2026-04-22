import { motion } from 'motion/react';
import { View } from '../types';
import AdSpace from './AdSpace';
import { Sparkles } from 'lucide-react';
import Navbar from './Navbar'; // Adicionamos a importação da Navbar

interface PortalProps {
  onNavigate: (view: View) => void;
}

export default function Portal({ onNavigate }: PortalProps) {
  return (
    // Tiramos o items-center e justify-center da div principal para a Navbar ocupar o topo inteiro
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-green-50">
      
      {/* Navbar inserida aqui, passando a view atual */}
      <Navbar currentView="portal" onNavigate={onNavigate} />

      {/* Nova div que vai ocupar o resto do espaço e centralizar o conteúdo do portal */}
      <div className="flex-grow flex flex-col items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl w-full text-center"
        >
          <img 
            src="/susegado.png" 
            alt="SUSsegado Logo" 
            className="h-90 mx-auto mb-8 drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />

          {/* Primeiro Banner */}
          <AdSpace className="mb-12 max-w-2xl mx-auto" />
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
            Bem-vindo ao <span className="text-medical-blue">SUS</span>sego.com.br
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Sua central de ferramentas médicas para facilitar o dia a dia na saúde.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('temnoposto')}
              className="group relative overflow-hidden bg-white p-8 rounded-3xl shadow-2xl border-2 border-transparent hover:border-sus-green transition-all text-left"
            >
              <div className="flex items-center mb-4">
                <img 
                  src="/temnoposto.png" 
                  alt="TemNoPosto Logo" 
                  className="h-16 mr-4"
                  referrerPolicy="no-referrer"
                />
                <h2 className="text-2xl font-bold text-gray-800">TemNoPosto?</h2>
              </div>
              
              <p className="text-gray-600">
                Consulte a disponibilidade de medicamentos gratuitos na rede pública do seu município de forma rápida e fácil.
              </p>
              <div className="mt-6 flex items-center text-sus-green font-bold">
                Acessar ferramenta <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('laudai')}
              className="group relative overflow-hidden bg-white p-8 rounded-3xl shadow-2xl border-2 border-transparent hover:border-medical-blue transition-all text-left"
            >
              <div className="flex items-center mb-4">
                <img 
                  src="/laudai.png" 
                  alt="LaudAí Logo" 
                  className="h-16 mr-4"
                  referrerPolicy="no-referrer"
                />
                <h2 className="text-2xl font-bold text-gray-800">LaudAí</h2>
              </div>
              <p className="text-gray-600">
                Transcreva e resuma laudos e exames médicos para prontuários em segundos usando inteligência artificial.
              </p>
              <div className="mt-6 flex items-center text-medical-blue font-bold">
                Acessar ferramenta <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate('calculai')}
              className="group relative overflow-hidden bg-white p-8 rounded-3xl shadow-2xl border-2 border-transparent hover:border-orange-400 transition-all text-left"
            >
              <div className="flex items-center mb-4">
                <img 
                  src="/calculai.png" 
                  alt="CalculAí Logo" 
                  className="h-16 mr-4"
                  referrerPolicy="no-referrer"
                />
                <h2 className="text-2xl font-bold text-gray-800">CalculAí</h2>
              </div>
              <p className="text-gray-600">
                Escores e calculadoras médicas essenciais: IMC, Risco Cardiovascular, Glasgow, CURB-65 e muito mais.
              </p>
              <div className="mt-6 flex items-center text-orange-600 font-bold">
                Acessar calculadoras <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </motion.button>

            <div className="bg-white/50 backdrop-blur-sm border-2 border-dashed border-gray-300 p-8 rounded-3xl flex flex-col items-center justify-center text-gray-500 text-center">
              <Sparkles className="mb-3 text-yellow-500" size={32} />
              <h2 className="text-xl font-bold text-gray-400">Em breve</h2>
              <p className="text-sm italic">Novas ferramentas em desenvolvimento...</p>
            </div>
          </div>

          <div className="mt-16 text-justify bg-white/80 p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Decisões clínicas inteligentes, no ritmo da sua rotina!</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              No cenário dinâmico da prática médica, cada segundo conta — e cada decisão carrega impacto direto na segurança e no desfecho do paciente. Foi justamente diante dessa realidade que nasceu o <strong>SUSsego.com.br:</strong> uma plataforma pensada para simplificar, agilizar e qualificar o atendimento em ambientes de alta demanda, como enfermarias e serviços de emergência.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Aqui, reunimos em um único lugar ferramentas baseadas em evidências, desenvolvidas para apoiar o raciocínio médico com confiança e eficiência. Nossas calculadoras clínicas são fundamentadas nas diretrizes mais atualizadas, permitindo decisões mais seguras, padronizadas e alinhadas às melhores práticas da medicina contemporânea.
             </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Além disso, a integração com inteligência artificial no <strong>LaudAí</strong> oferece suporte na interpretação e sumarização de laudos extensos, transformando informações complexas em insights claros e acionáveis — economizando tempo precioso e reduzindo a sobrecarga cognitiva do profissional.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Outro diferencial é a funcionalidade de consulta ao estoque de medicamentos nas farmácias públicas por meio do <strong>TemNoPosto?</strong>. Afinal, uma boa conduta clínica também depende da viabilidade do tratamento no mundo real.
            </p>
             <p className="text-gray-600 mb-4 leading-relaxed">
              O SUSsego.com.br não é apenas uma ferramenta — é um aliado na sua rotina. Uma solução pensada para trazer mais fluidez ao atendimento, mais segurança às decisões e mais tranquilidade para quem cuida.
            </p>
          </div>
          {/* ========================================== */}

          <AdSpace className="mt-12 max-w-2xl mx-auto" />
        </motion.div>
      </div>
    </div>
  );
}
