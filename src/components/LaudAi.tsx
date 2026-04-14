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
  const [image, setImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProcess = async () => {
    if (!inputText && !image) return;

    setIsProcessing(true);
    setError(null);
    
    try {
      // No Vite, as variáveis de ambiente começam com VITE_ e são acessadas via import.meta.env
      const apiKey = import.meta.env.VITE_GROQ_API_KEY; 
      
      if (!apiKey) {
        throw new Error('Chave da API do Groq não encontrada. Configure o .env');
      }

      const prompt = `
        Você é um assistente médico especializado em transcrição de laudos para prontuários.
        Sua tarefa é analisar o texto ou imagem fornecida e extrair as informações essenciais de forma resumida.
        
        FORMATO DE SAÍDA OBRIGATÓRIO:
        (TIPO DE EXAME - DATA DO EXAME): EXAME 1: RESULTADO 1 | EXAME 2: RESULTADO 2 | ...
        
        Exemplo:
        (HEMOGRAMA - 10/05/2023): Hemoglobina: 14.2 | Leucócitos: 6.500 | Plaquetas: 250.000
        
        Se houver múltiplos exames no mesmo documento, separe-os por novas linhas seguindo o mesmo padrão.
        Seja conciso e use termos técnicos médicos adequados para prontuário.
      `;

      // Prepara o conteúdo dinamicamente dependendo se tem imagem ou não
      const contentPayload: any[] = [{ type: "text", text: prompt }];
      
      if (inputText) {
        contentPayload.push({ type: "text", text: `Texto do laudo: ${inputText}` });
      }
      
      if (image) {
        contentPayload.push({
          type: "image_url",
          image_url: { url: image } // A imagem já está em Base64 Data URL
        });
      }

      // Escolhe o modelo: Vision para imagens, Versatile para texto puro
      const selectedModel = image ? "llama-3.2-11b-vision-preview" : "llama-3.3-70b-versatile";

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
          temperature: 0.2, // Temperatura baixa para respostas médicas precisas e sem invenções
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error?.message || 'Falha na comunicação com o GroqCloud.');
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

      <main className="flex-grow max-w-4xl mx-auto w-full px-4 py-8">
        <AdSpace className="mb-8" />

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
                onClick={() => fileInputRef.current?.click()}
                className={`relative border-2 border-dashed rounded-2xl p-8 transition-all cursor-pointer flex flex-col items-center justify-center ${
                  image ? 'border-medical-blue bg-blue-50' : 'border-gray-200 hover:border-medical-blue hover:bg-gray-50'
                }`}
              >
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
                
                {image ? (
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                    <img src={image} alt="Preview" className="w-full h-full object-cover" />
                    <button 
                      onClick={(e) => { e.stopPropagation(); setImage(null); }}
                      className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600"
                    >
                      <Check size={16} className="rotate-45" />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="p-4 bg-blue-100 text-medical-blue rounded-full mb-3">
                      <Upload size={24} />
                    </div>
                    <p className="text-sm font-bold text-gray-700">Arraste ou clique para enviar imagem</p>
                    <p className="text-xs text-gray-400 mt-1">Fotos de laudos, exames ou receitas</p>
                  </>
                )}
              </div>

              <button 
                onClick={handleProcess}
                disabled={isProcessing || (!inputText && !image)}
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
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/50 backdrop-blur-sm">
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

      <footer className="bg-white py-12 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-xs font-medium uppercase tracking-widest mb-4">Aviso Ético e Legal</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Este sistema não armazena dados. Use apenas para auxílio na redação.
            Revise sempre antes de salvar no prontuário oficial.
            A responsabilidade final pela informação médica é do profissional assistente.
          </p>
        </div>
      </footer>
    </div>
  );
}
