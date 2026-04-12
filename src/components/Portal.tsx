import { motion } from 'motion/react';
import { View } from '../types';
import AdSpace from './AdSpace';
import { Sparkles } from 'lucide-react';

interface PortalProps {
  onNavigate: (view: View) => void;
}

export default function Portal({ onNavigate }: PortalProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-green-50">
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

        {/* Primeiro Banner (Já existente) */}
        <AdSpace className="mb-12 max-w-2xl mx-auto" />
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
          Bem-vindo ao <span className="text-medical-blue">SUS</span>sego.com.br
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Sua central de ferramentas para facilitar o dia a dia na saúde.
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
        </div>

        {/* NOVO BANNER "EM BREVE NOVIDADES" */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white/50 backdrop-blur-sm border-2 border-dashed border-gray-300 p-6 rounded-3xl flex items-center justify-center text-gray-500 max-w-2xl mx-auto"
        >
          <Sparkles className="mr-2 text-yellow-500" size={20} />
          <span className="font-medium italic">Em breve novidades...</span>
        </motion.div>

        <AdSpace className="mt-12 max-w-2xl mx-auto" />
      </motion.div>
    </div>
  );
}
