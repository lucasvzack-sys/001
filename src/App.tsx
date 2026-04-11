/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Portal from './components/Portal';
import TemNoPosto from './components/TemNoPosto';
import LaudAi from './components/LaudAi';
import { View } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('portal');

  const handleNavigate = (view: View) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView(view);
  };

  return (
    <div className="min-h-screen font-sans">
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
      </AnimatePresence>
    </div>
  );
}
