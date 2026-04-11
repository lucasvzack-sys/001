import { motion } from 'motion/react';

export default function AdSpace({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center p-8 min-h-[150px] ${className}`}
    >
      <div className="text-center">
        <p className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-1">Espaço para Anúncio</p>
        <p className="text-gray-300 text-xs italic">Publicidade</p>
      </div>
    </motion.div>
  );
}
