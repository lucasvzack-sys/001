import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Upload, 
  FileText, 
  Copy, 
  Check, 
  Sparkles, 
  AlertCircle,
  Loader2
} from 'lucide-react';
import { View } from '../types';
import AdSpace from './AdSpace';
import CrossPromo from './CrossPromo';
import Navbar from './Navbar';

interface LaudAiProps {
  onNavigate: (view: View) => void;
}

export default function LaudAi({ onNavigate }: LaudAiProps) {
  const [inputText, setInputText] = useState('');
  // PASSO 1: Agora é um Array (lista) de imagens, começa vazio []
  const [images, setImages] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Nova função para ler múltiplas imagens de uma vez
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImagesArray: string[] = [];
    
    // Transforma a lista de arquivos em um array iterável e lê cada um
    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        newImagesArray.push(reader.result as string);
        // Quando terminar de ler todas as imagens que o usuário selecionou, atualiza a tela
        if (newImagesArray.length === files.length) {
          setImages(prev => [...prev, ...newImagesArray]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  // Função para remover uma imagem específica da lista antes de enviar
  const removeImage = (indexToRemove: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setImages(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleProcess = async () => {
    // Verifica se tem texto ou pelo menos uma imagem
    if (!inputText && images.length === 0) return;

    setIsProcessing(true);
    setError(null);
    
    try {
      const apiKey = import.meta.env.VITE_GROQ_API_KEY; 
      
      if (!apiKey) {
        throw new Error('Chave da API do Groq não encontrada. Configure o .env');
      }

      const prompt = `
        Você é um assistente médico especializado em transcrição de laudos para prontuários.
        Sua tarefa é analisar o texto ou imagens fornecidas e extrair as informações essenciais de forma resumida.
        
        FORMATO DE SAÍDA OBRIGATÓRIO:
        (TIPO DE EXAME - DATA DO EXAME): EXAME 1: RESULTADO 1 | EXAME 2: RESULTADO 2 | ...
        
        Exemplo:
        (HEMOGRAMA - 10/05/2023): Hemoglobina: 14.2 | Leucócitos: 6.500 | Plaquetas: 250.000
        
        Se houver múltiplos exames no mesmo documento, separe-os por novas linhas seguindo o mesmo padrão.
        Seja conciso e use termos técnicos médicos adequados para prontuário.
      `;

      const contentPayload: any[] = [{ type: "text", text: prompt }];
      
      if (inputText) {
        contentPayload.push({ type: "text", text: `Texto do laudo: ${inputText}` });
      }
      
      // PASSO 3: Faz um loop e adiciona TODAS as imagens selecionadas no pacote de envio
      if (images.length > 0) {
        images.forEach((img) => {
          contentPayload.push({
            type: "image_url",
            image_url: { url: img }
          });
        });
      }

      // Escolhe o modelo: Llama 4 Scout para imagens, Versatile para texto puro
      const selectedModel = images.length > 0 ? "meta-llama/llama-4-scout-17b-16e-instruct" : "llama-3.3-70b-versatile";

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: selectedModel,
          messages: [
            {
              role: "user",
              content: contentPayload
            }
          ],
          temperature: 0.2,
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || 'Falha na comunicação com a IA.');
      }

      setResult(data.choices[0].message.content || 'Não foi possível processar o laudo.');
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Ocorreu um erro ao processar o laudo. Verifique sua conexão ou tente novamente.');
    } finally {
      setIsProcessing(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar currentView="laudai" onNavigate={onNavigate} />

      {/* A tag <main> que havia sido apagada sem querer foi restaurada aqui */}
      <main className="max-w-6xl mx-auto px-4 py-8 flex-grow w-full">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 flex flex-col items-center"
        >
          <img 
            src="/laudai.png" 
            alt="Logo LaudAí" 
            className="w-32 md:w-48 h-auto mb-6 object-contain" 
          />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">LaudAí</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Transforme laudos complexos em resumos técnicos prontos para o prontuário médico.
          </p>
        </motion.div>

        <div className="mb-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-gray-600 leading-relaxed text-sm md:text-base text-center">
          <p>
          A documentação médica precisa e estruturada é o pilar fundamental para a continuidade do cuidado e a segurança do paciente. O <strong>LaudAí</strong> oferece um ecossistema para a elaboração de evoluções. Nossa ferramenta padroniza o registro clínico, otimizando o tempo do profissional e elevando o rigor técnico das descrições, desde exames de imagem básicos até relatos cirúrgicos complexos.
          </p>
        </div>
        
{/* Sugestão 1: Antes da entrada de texto (com limite de altura no mobile) */}
        <AdSpace className="mb-8 max-h-[100px] md:max-h-none overflow-hidden" />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200">
              <label className="block text-sm font-bold text-gray-700 mb-3 uppercase tracking-wider">
                Entrada Multimodal
              </label>
              
              <textarea 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Cole o texto do laudo aqui..."
                className="w-full h-48 p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-medical-blue focus:ring-0 transition-all outline-none resize-none mb-4"
              />

              <div 
                onClick={() => images.length === 0 && fileInputRef.current?.click()}
                className={`relative border-2 border-dashed rounded-2xl p-6 transition-all ${
                  images.length > 0 ? 'border-transparent' : 'border-gray-200 hover:border-medical-blue hover:bg-gray-50 cursor-pointer flex flex-col items-center justify-center'
                }`}
              >
                {/* PASSO 2: A tag "multiple" foi adicionada no input abaixo */}
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  multiple 
                  className="hidden"
                />
                
                {images.length > 0 ? (
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-bold text-medical-blue">{images.length} imagem(ns) adicionada(s)</span>
                      <button 
                        onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
                        className="text-xs bg-blue-100 text-medical-blue px-3 py-1.5 rounded-full font-bold hover:bg-blue-200 transition-colors"
                      >
                        + Adicionar mais
                      </button>
                    </div>
                    {/* Galeria em Grid para mostrar as múltiplas imagens */}
                    <div className="grid grid-cols-3 gap-3">
                      {images.map((img, index) => (
                        <div key={index} className="relative w-full aspect-square rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                          <img src={img} alt={`Preview ${index}`} className="w-full h-full object-cover" />
                          <button 
                            onClick={(e) => removeImage(index, e)}
                            className="absolute top-1 right-1 p-1.5 bg-red-500/90 text-white rounded-full shadow-lg hover:bg-red-600 transition-colors"
                          >
                            <Check size={12} className="rotate-45" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="p-4 bg-blue-100 text-medical-blue rounded-full mb-3">
                      <Upload size={24} />
                    </div>
                    <p className="text-sm font-bold text-gray-700 text-center">Clique para enviar imagens</p>
                    <p className="text-xs text-gray-400 mt-1 text-center">Fotos de laudos, exames ou receitas (pode selecionar até 5 ao mesmo tempo)</p>
                  </>
                )}
              </div>

              <button 
                onClick={handleProcess}
                disabled={isProcessing || (!inputText && images.length === 0)}
                className="w-full mt-6 py-4 bg-medical-blue text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-blue-700 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={20} />
                    Processando com IA...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2" size={20} />
                    Gerar Resumo para Prontuário
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Result Section */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-200 h-full flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
                  Resultado do Prontuário
                </label>
                {result && (
                  <button 
                    onClick={copyToClipboard}
                    className={`flex items-center text-sm font-bold transition-colors ${
                      copied ? 'text-green-600' : 'text-medical-blue hover:text-blue-700'
                    }`}
                  >
                    {copied ? (
                      <><Check size={16} className="mr-1" /> Copiado!</>
                    ) : (
                      <><Copy size={16} className="mr-1" /> Copiar</>
                    )}
                  </button>
                )}
              </div>

              <div className="flex-grow bg-gray-50 rounded-2xl border-2 border-gray-100 p-6 font-mono text-sm text-gray-800 whitespace-pre-wrap relative overflow-auto min-h-[300px]">
                {!result && !isProcessing && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 p-8 text-center">
                    <FileText size={48} className="mb-4 opacity-20" />
                    <p>O resumo aparecerá aqui após o processamento.</p>
                  </div>
                )}
                
                {isProcessing && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/50 backdrop-blur-sm z-10">
                    <Loader2 className="animate-spin text-medical-blue mb-4" size={48} />
                    <p className="text-medical-blue font-bold animate-pulse">LaudAí está analisando os dados médicos...</p>
                  </div>
                )}

                {result && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {result}
                  </motion.div>
                )}
              </div>

              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-100 rounded-xl flex items-start text-red-700 text-sm">
                  <AlertCircle size={18} className="mr-2 shrink-0 mt-0.5" />
                  <p>{error}</p>
                </div>
              )}

              <button 
                onClick={copyToClipboard}
                disabled={!result}
                className="w-full mt-6 py-4 bg-gray-100 text-gray-700 rounded-2xl font-bold text-lg hover:bg-gray-200 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center"
              >
                <Copy className="mr-2" size={20} />
                Copiar para o Prontuário
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-6">
          <AdSpace />
          <CrossPromo target="temnoposto" onNavigate={onNavigate} />
          <CrossPromo target="calculai" onNavigate={onNavigate} />
          <AdSpace />
        </div>
      </main>

     {/* Bloco Informativo para AdSense e SEO */}
<section className="mt-16 text-left bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">
    Como o LaudAí otimiza o raciocínio clínico na prática médica?
  </h2>
  
  <div className="space-y-6 text-gray-600 leading-relaxed">
    <p>
      A rotina em enfermarias, ambulatórios e serviços de emergência exige agilidade, precisão e foco. A sobrecarga cognitiva é um desafio real para médicos e estudantes, onde o tempo para tomada de decisão é escasso. O <strong>LaudAí</strong> foi desenvolvido para atuar como um assistente de produtividade clínica, utilizando inteligência artificial para processar e sumarizar laudos de exames complementares extensos.
    </p>

    <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
      <h3 className="text-lg font-bold text-medical-blue mb-2">Como utilizar?</h3>
      <p>
        Ao inserir o texto bruto de um exame (como laboratoriais, tomografias, ressonâncias ou ecocardiogramas), a ferramenta estrutura as informações, destacando os achados principais, alterações significativas e as conclusões presentesm, facilitando a evolução diária em prontuários, a preparação para rounds clínicos e a passagem de plantão.
      </p>
    </div>

    <section>
      <h3 className="text-lg font-bold text-gray-800 mb-2">MAS ATENÇÃO...</h3>
      <p>
        É fundamental ressaltar que a inteligência artificial atua como uma ferramenta de apoio à leitura. O uso do LaudAí não isenta o profissional da responsabilidade de avaliar o laudo original em sua totalidade, tampouco substitui a correlação clínica com a anamnese e o exame físico do paciente. O objetivo é reduzir o tempo burocrático e permitir que o foco retorne para onde realmente importa: o cuidado com o paciente.
      </p>
    </section>
  </div>
</section>

      <footer className="bg-white py-12 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-xs font-medium uppercase tracking-widest mb-4">Aviso Ético e Legal</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Este sistema não armazena dados. Use apenas para auxílio na redação.
            Revise sempre antes de salvar no prontuário oficial.
            As ferramentas são destinadas exclusivamente para fins educativos e de apoio à decisão clínica. O conteúdo apresentado não substitui, em circunstância alguma, a avaliação, o diagnóstico ou o tratamento por um profissional de saúde qualificado. A responsabilidade pelas decisões clínicas recai inteiramente sobre o profissional assistente. O SUSsego não se responsabiliza pelo uso indevido destas ferramentas. A responsabilidade final pela informação médica é do profissional assistente.
          </p>
        </div>
      </footer>
    </div>
  );
}
