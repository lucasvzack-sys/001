import React, { useState, useEffect } from 'react';

export default function AntiAdBlock() {
  const [isAdBlockEnabled, setIsAdBlockEnabled] = useState(false);

  useEffect(() => {
    const detectAdBlock = () => {
      // Cria um elemento "isca" com classes comumente bloqueadas por extensões de AdBlock
      const ad = document.createElement('div');
      ad.className = 'ad-banner adsbox ad-placement';
      ad.style.height = '1px';
      ad.style.width = '1px';
      ad.style.position = 'absolute';
      ad.style.left = '-999px';
      document.body.appendChild(ad);

      // Checa após um pequeno delay se o AdBlock removeu o elemento ou zerou sua altura
      setTimeout(() => {
        const isBlocked = ad.offsetHeight === 0 || window.getComputedStyle(ad).display === 'none';
        if (isBlocked) {
          setIsAdBlockEnabled(true);
        }
        // Limpa a isca do DOM
        ad.remove();
      }, 300);
    };

    detectAdBlock();
  }, []);

  // Se não detectou AdBlock, não renderiza nada
  if (!isAdBlockEnabled) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/90 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md text-center shadow-2xl border border-gray-100">
        <div className="text-5xl mb-4">🛑</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Bloqueador de Anúncios Detectado</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Notamos que você está usando um AdBlock. O <strong>SUSsego.com.br</strong> é um projeto gratuito mantido pela exibição de anúncios e doações. 
          <br/><br/>
          Por favor, considere adicionar nosso site à sua lista de exceções (whitelist) para continuar utilizando nossas calculadoras e ferramentas.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-orange-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-orange-700 transition-colors w-full shadow-lg shadow-orange-200"
        >
          Já desativei, recarregar a página
        </button>
      </div>
    </div>
  );
}
