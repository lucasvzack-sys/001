import { useEffect } from 'react';

export default function AdSpace({ className = "" }: { className?: string }) {
  
  useEffect(() => {
    // Este código avisa o Google que o espaço está pronto para receber o anúncio
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (e) {
      console.error("Erro no anúncio", e);
    }
  }, []);

  return (
    <div className={`flex items-center justify-center min-h-[150px] overflow-hidden ${className}`}>
      {/* Substitua os valores de data-ad-client e data-ad-slot pelos SEUS dados! */}
      <ins className="adsbygoogle"
           style={{ display: 'block', width: '100%' }}
           data-ad-client="ca-pub-SEU_NUMERO_AQUI" 
           data-ad-slot="SEU_SLOT_AQUI"
           data-ad-format="auto"
           data-full-width-responsive="true">
      </ins>
    </div>
  );
}
