// src/App.tsx
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Portal from './components/Portal';
import TemNoPosto from './components/TemNoPosto';
import LaudAi from './components/LaudAi';
import Doar from './components/Doar'; // Importe a nova página
import Footer from './components/Footer'; // Importe o Footer
import { View } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('portal');

  const handleNavigate = (view: View) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen font-sans flex flex-col">
      <div className="flex-grow">
        <AnimatePresence mode="wait">
          {currentView === 'portal' && (
            <motion.div
              key="portal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Portal onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentView === 'temnoposto' && (
            <motion.div
              key="temnoposto"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TemNoPosto onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentView === 'laudai' && (
            <motion.div
              key="laudai"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <LaudAi onNavigate={handleNavigate} />
            </motion.div>
          )}

          {currentView === 'doar' && (
            <motion.div
              key="doar"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Doar onNavigate={handleNavigate} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Footer global no fundo do App */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
