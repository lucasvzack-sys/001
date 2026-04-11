import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { View } from '../types';

interface CrossPromoProps {
  target: View;
  onNavigate: (view: View) => void;
}

export default function CrossPromo({ target, onNavigate }: CrossPromoProps) {
  const isLaudAi = target === 'laudai';
  
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className={`p-6 rounded-2xl cursor-pointer shadow-lg border-l-8 ${
        isLaudAi ? 'bg-blue-50 border-medical-blue' : 'bg-green-50 border-sus-green'
      }`}
      onClick={() => onNavigate(target)}
    >
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Conheça também</h4>
          <h3 className={`text-xl font-bold ${isLaudAi ? 'text-medical-blue' : 'text-sus-green'}`}>
            {isLaudAi ? 'LaudAí' : 'TemNoPosto?'}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {isLaudAi 
              ? 'Resuma laudos e exames para o prontuário em segundos.' 
              : 'Saiba onde encontrar seus medicamentos gratuitamente.'}
          </p>
        </div>
        <div className={`p-3 rounded-full ${isLaudAi ? 'bg-medical-blue text-white' : 'bg-sus-green text-white'}`}>
          <ArrowRight size={20} />
        </div>
      </div>
    </motion.div>
  );
}
