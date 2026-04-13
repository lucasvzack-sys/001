import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { View } from '../types';

interface CrossPromoProps {
  target: View;
  onNavigate: (view: View) => void;
}

export default function CrossPromo({ target, onNavigate }: CrossPromoProps) {
  let config = {
    bgClass: '',
    borderClass: '',
    textClass: '',
    logo: '',
    alt: '',
    title: '',
    desc: '',
    btnClass: ''
  };

  if (target === 'laudai') {
    config = {
      bgClass: 'bg-blue-50',
      borderClass: 'border-medical-blue',
      textClass: 'text-medical-blue',
      logo: '/laudai.png',
      alt: 'Logo LaudAí',
      title: 'LaudAí',
      desc: 'Resuma laudos e exames para o prontuário em segundos.',
      btnClass: 'bg-medical-blue text-white'
    };
  } else if (target === 'temnoposto') {
    config = {
      bgClass: 'bg-green-50',
      borderClass: 'border-sus-green',
      textClass: 'text-sus-green',
      logo: '/temnoposto.png',
      alt: 'Logo TemNoPosto?',
      title: 'TemNoPosto?',
      desc: 'Saiba onde encontrar seus medicamentos gratuitamente.',
      btnClass: 'bg-sus-green text-white'
    };
  } else if (target === 'calculai') {
    config = {
      bgClass: 'bg-orange-50',
      borderClass: 'border-orange-500',
      textClass: 'text-orange-600',
      logo: '/calculai.png',
      alt: 'Logo CalculAí',
      title: 'CalculAí',
      desc: 'Escores e calculadoras médicas essenciais de forma rápida.',
      btnClass: 'bg-orange-600 text-white'
    };
  } else {
    return null;
  }
  
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className={`p-6 rounded-2xl cursor-pointer shadow-lg border-l-8 ${config.bgClass} ${config.borderClass}`}
      onClick={() => onNavigate(target)}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img 
            src={config.logo} 
            alt={config.alt} 
            className="w-16 h-16 object-contain drop-shadow-sm"
          />
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Conheça também</h4>
            <h3 className={`text-xl font-bold ${config.textClass}`}>
              {config.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {config.desc}
            </p>
          </div>
        </div>
        <div className={`p-3 shrink-0 rounded-full self-end sm:self-auto ${config.btnClass}`}>
          <ArrowRight size={20} />
        </div>
      </div>
    </motion.div>
  );
}
