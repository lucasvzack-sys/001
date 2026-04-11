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
      {/* Esta tag "ins" é o buraco onde o Google vai injetar o banner */}
      <ins className="adsbygoogle"
           style={{ display: 'block', width: '100%' }}
           data-ad-client="ca-pub-TEU_CODIGO_AQUI"
           data-ad-slot="TEU_BLOCO_AQUI"
           data-ad-format="auto"
           data-full-width-responsive="true">
      </ins>
    </div>
  );
}
