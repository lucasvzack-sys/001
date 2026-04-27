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
import About from './components/About';
import TermsOfUse from './components/TermsOfUse';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

useEffect(() => {
    const path = location.pathname;
    const baseUrl = "https://www.sussego.com.br";

    // 1. Atualizar o Título da Página (Seu código original expandido)
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
    } else if (path === '/termos') {
      document.title = "Termos de Uso - SUSsego.com.br";
    } else if (path === '/contato') {
      document.title = "Contato - SUSsego.com.br";
    } else if (path === '/sobre') {
      document.title = "Sobre o Projeto - SUSsego.com.br";
    }

    // 2. Lógica do Passo 3: Atualizar a Tag Canónica
    // Criamos a URL completa (ex: https://www.sussego.com.br/calculai)
    const canonicalUrl = path === '/' ? baseUrl + '/' : baseUrl + path;
    
    // Procuramos a tag <link id="canonical-link"> que você criou no index.html
    let canonicalTag = document.getElementById('canonical-link') as HTMLLinkElement;
    
    if (canonicalTag) {
      canonicalTag.href = canonicalUrl;
    } else {
      // Caso a tag ainda não exista (segurança), criamos uma nova
      canonicalTag = document.createElement('link');
      canonicalTag.id = 'canonical-link';
      canonicalTag.rel = 'canonical';
      canonicalTag.href = canonicalUrl;
      document.head.appendChild(canonicalTag);
    }
    
  }, [location.pathname]); // Executa sempre que a rota mudar
  
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
      
      <main className="flex-grow">
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

            {/* ADICIONADA A ROTA CORRETA DOS TERMOS DE USO AQUI */}
            <Route path="/termos" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <TermsOfUse onNavigate={handleNavigate} />
              </motion.div>
            } />

            <Route path="/contato" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <Contact onNavigate={handleNavigate} />
              </motion.div>
            } />

            <Route path="/sobre" element={
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <About onNavigate={handleNavigate} />
              </motion.div>
            } />

          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
