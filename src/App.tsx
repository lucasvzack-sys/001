import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Portal from './components/Portal';
import TemNoPosto from './components/TemNoPosto';
import LaudAi from './components/LaudAi';
import Doar from './components/Doar';
import CalculAi from './components/CalculAi';
import Footer from './components/Footer';
import { View } from './types';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Adaptamos o seu handleNavigate antigo para alterar a URL
  const handleNavigate = (view: View | string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (view === 'portal') {
      navigate('/');
    } else {
      navigate(`/${view}`);
    }
  };

  return (
    <div className="min-h-screen font-sans flex flex-col">
      <div className="flex-grow">
        {/* Passamos o location e a key para a animação saber quando a rota muda */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              >
                <Portal onNavigate={handleNavigate} />
              </motion.div>
            } />

            <Route path="/temnoposto" element={
              <motion.div
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
              >
                <TemNoPosto onNavigate={handleNavigate} />
              </motion.div>
            } />

            <Route path="/laudai" element={
              <motion.div
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
              >
                <LaudAi onNavigate={handleNavigate} />
              </motion.div>
            } />

            <Route path="/doar" element={
              <motion.div
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
              >
                <Doar onNavigate={handleNavigate} />
              </motion.div>
            } />

            <Route path="/calculai" element={
              <motion.div
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}
              >
                <CalculAi onNavigate={handleNavigate} />
              </motion.div>
            } />

          </Routes>
        </AnimatePresence>
      </div>
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}