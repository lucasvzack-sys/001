import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Portal from './components/Portal';
import TemNoPosto from './components/TemNoPosto';
import LaudAi from './components/LaudAi';
import Doar from './components/Doar';
import CalculAi from './components/CalculAi';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/Contact';
import CookieBanner from './components/CookieBanner';
import { View } from './types';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

 useEffect(() => {
    const path = location.pathname;

    if (path === '/') {
      document.title = "SUSsego.com.br";
    } else if (path.includes('/temnoposto')) {
      document.title = "TemNoPosto? - SUSsego.com.br - consulte disponibilidade de remédios grátis";
    } else if (path.includes('/laudai')) {
      document.title = "LaudAí - SUSsego.com.br - resuma exames para o seu prontuário";
    } else if (path.includes('/doar')) {
      document.title = "Apoie o SUSsego.com.br - ajude a manter o site no ar!";
    } else if (path.includes('/calculai')) {
      document.title = "CalculAí - SUSsego.com.br - calculadoras médicas";
    } else if (path === '/privacidade') {
      document.title = "Política de Privacidade - SUSsego.com.br";
    } else if (path === '/contato') {
      document.title = "Contato - SUSsego.com.br";
    }
  }, [location.pathname]);

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
      <CookieBanner />
      
      <div className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            
            <Route path="/" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <Portal onNavigate={handleNavigate} />
              </motion.div>
            } />

            <Route path="/temnoposto" element={
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <TemNoPosto onNavigate={handleNavigate} />
              </motion.div>
            } />

            <Route path="/laudai" element={
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <LaudAi onNavigate={handleNavigate} />
              </motion.div>
            } />

            <Route path="/doar" element={
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <Doar onNavigate={handleNavigate} />
              </motion.div>
            } />

            <Route path="/calculai/:calcId?" element={
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                <CalculAi onNavigate={handleNavigate} />
              </motion.div>
            } />

            <Route path="/privacidade" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <PrivacyPolicy onNavigate={handleNavigate} />
              </motion.div>
            } />

            <Route path="/contato" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <Contact onNavigate={handleNavigate} />
              </motion.div>
            } />

          </Routes>
        </AnimatePresence>
      </div>
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
