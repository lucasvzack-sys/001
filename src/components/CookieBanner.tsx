import React, { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já aceitou os cookies anteriormente
    const consent = localStorage.getItem('sussego_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('sussego_cookie_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-gray-900 text-white p-4 shadow-2xl transform transition-transform">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-300 leading-relaxed text-center sm:text-left">
          <strong>Aviso de Privacidade e Cookies (LGPD):</strong> Utilizamos cookies e tecnologias semelhantes para personalizar conteúdo, anúncios (via Google AdSense) e analisar nosso tráfego. Ao continuar navegando, você concorda com a nossa <a href="/privacidade" className="text-orange-400 hover:underline font-bold">Política de Privacidade</a>.
        </div>
        <button
          onClick={handleAccept}
          className="whitespace-nowrap bg-orange-700 hover:bg-orange-800 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-sm"        >
          Entendi e Aceito
        </button>
      </div>
    </div>
  );
}
