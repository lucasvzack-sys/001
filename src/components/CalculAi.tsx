import React, { useState, useMemo } from 'react';
import { 
  Activity, Heart, Brain, Baby, Stethoscope, 
  ArrowLeft, Smile, Calendar, PlusSquare, FileText
} from 'lucide-react';
import { View } from '../types';
import Navbar from './Navbar';

interface CalculAiProps {
  onNavigate: (view: View) => void;
}

type Category = 'Geral' | 'Cardiologia' | 'Emergência e UTI' | 'Neurologia' | 'Psiquiatria' | 'Obstetrícia' | 'Pediatria';

// ==========================================
// COMPONENTE AUXILIAR COMPARTILHADO
// ==========================================
const CheckboxItem = ({ label, checked, onChange }: { label: string, checked: boolean, onChange: (c: boolean) => void }) => (
  <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
    <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="w-5 h-5 text-orange-600 rounded border-gray-300 focus:ring-orange-500" />
    <span className="text-gray-700">{label}</span>
  </label>
);

// ==========================================
// COMPONENTES DAS CALCULADORAS (ATUALIZADOS)
// ==========================================

const CalcIMC = () => {
  const [imc, setImc] = useState({ peso: '', altura: '' });
  
  const imcInfo = useMemo(() => {
    const p = parseFloat(imc.peso);
    const a = parseFloat(imc.altura) / 100;
    if (p > 0 && a > 0) {
      const valor = p / (a * a);
      let classificacao = "";
      let cor = "text-orange-600";

      if (valor < 18.5) { classificacao = "Abaixo do peso"; cor = "text-yellow-600"; }
      else if (valor < 25) { classificacao = "Peso normal"; cor = "text-green-600"; }
      else if (valor < 30) { classificacao = "Sobrepeso"; cor = "text-orange-500"; }
      else if (valor < 35) { classificacao = "Obesidade Grau I"; cor = "text-orange-700"; }
      else if (valor < 40) { classificacao = "Obesidade Grau II"; cor = "text-red-600"; }
      else { classificacao = "Obesidade Grau III"; cor = "text-red-800"; }

      return { valor: valor.toFixed(1), classificacao, cor };
    }
    return null;
  }, [imc]);

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Peso (kg)</label>
          <input type="number" value={imc.peso} onChange={(e) => setImc({...imc, peso: e.target.value})} className="block w-full rounded-xl border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 bg-gray-50 p-4 text-lg" placeholder="Ex: 70" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Altura (cm)</label>
          <input type="number" value={imc.altura} onChange={(e) => setImc({...imc, altura: e.target.value})} className="block w-full rounded-xl border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 bg-gray-50 p-4 text-lg" placeholder="Ex: 175" />
        </div>
        {imcInfo && (
          <div className="mt-8 p-6 bg-orange-50 rounded-2xl text-center">
            <span className="text-sm text-orange-800 block uppercase font-bold tracking-wider mb-2">Resultado</span>
            <span className={`text-6xl font-black ${imcInfo.cor}`}>{imcInfo.valor}</span>
            <span className={`block text-xl font-bold mt-2 ${imcInfo.cor}`}>{imcInfo.classificacao}</span>
          </div>
        )}
      </div>
    </div>
  );
};

const CalcMEEM = () => {
  const [meem, setMeem] = useState({ orientacao: 0, registro: 0, atencao: 0, evocacao: 0, linguagem: 0 });
  const scoreMeem = useMemo(() => Object.values(meem).reduce((a, b) => a + b, 0), [meem]);

  const sections = [
    { key: 'orientacao', label: 'Orientação Temporal e Espacial', max: 10, instrucao: 'Perguntar: Ano, mês, dia do mês, dia da semana, hora aproximada; Local, andar, cidade, estado e país.' },
    { key: 'registro', label: 'Registro de Memória', max: 3, instrucao: 'Diga 3 palavras (ex: Casa, Sapato, Avião). Peça para repetir imediatamente. 1 ponto por acerto.' },
    { key: 'atencao', label: 'Atenção e Cálculo', max: 5, instrucao: 'Subtração sucessiva de 7 a partir de 100 (5 vezes) OU soletrar a palavra MUNDO de trás para frente.' },
    { key: 'evocacao', label: 'Evocação (Memória Tardia)', max: 3, instrucao: 'Peça para o paciente repetir as 3 palavras ditas anteriormente no item "Registro".' },
    { key: 'linguagem', label: 'Linguagem e Praxia', max: 9, instrucao: 'Nomear 2 objetos; Repetir frase; Comando de 3 etapas; Ler e executar "Feche os olhos"; Escrever frase; Copiar desenho.' }
  ];

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <div className="space-y-6">
        {sections.map(({ key, label, max, instrucao }) => (
          <div key={key} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
              <span className="text-md text-gray-800 font-bold">{label}</span>
              <div className="flex items-center mt-2 sm:mt-0">
                <span className="text-xs text-gray-400 mr-2">Pontos (Max: {max})</span>
                <input type="number" min="0" max={max} value={(meem as any)[key]} onChange={(e) => setMeem({...meem, [key]: parseInt(e.target.value) || 0})} className="w-16 p-2 bg-white border border-gray-300 rounded-lg text-center text-lg focus:ring-yellow-500 font-bold" />
              </div>
            </div>
            <p className="text-xs text-gray-500 italic leading-relaxed">{instrucao}</p>
          </div>
        ))}
        <div className="mt-8 p-6 bg-yellow-50 rounded-2xl text-center border border-yellow-100">
          <span className="text-sm text-yellow-800 block uppercase font-bold tracking-wider mb-2">Score Total</span>
          <span className="text-6xl font-black text-yellow-600">{scoreMeem} <span className="text-2xl font-normal text-yellow-800">/ 30</span></span>
        </div>
      </div>
    </div>
  );
};

// ... (Manter os outros componentes CalcGlasgow, CalcCURB65, CalcCHADS, CalcIdadeGestacional, CalcDUMUSG, CalcNIHSS, CalcPHQ9 sem alterações na lógica, apenas títulos se necessário)

const CalcIdadeGestacionalUSG = () => {
  const [usgData, setUsgData] = useState({ data: '', semanas: '', dias: '' });
  const resultUsg = useMemo(() => {
    if (!usgData.data || !usgData.semanas) return null;
    const dataRef = new Date(usgData.data);
    dataRef.setHours(dataRef.getHours() + 12);
    const totalDiasUsg = (parseInt(usgData.semanas) * 7) + (parseInt(usgData.dias) || 0);
    const dumCorrigida = new Date(dataRef);
    dumCorrigida.setDate(dumCorrigida.setDate() - totalDiasUsg);
    const hoje = new Date();
    const diffTime = hoje.getTime() - dumCorrigida.getTime();
    const diffDias = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const igSemanas = Math.floor(diffDias / 7);
    const igDias = diffDias % 7;
    const dppDate = new Date(dumCorrigida);
    dppDate.setDate(dppDate.getDate() + 280);
    return { dum: dumCorrigida.toLocaleDateString('pt-BR'), ig: `${igSemanas}s ${igDias}d`, dpp: dppDate.toLocaleDateString('pt-BR') };
  }, [usgData]);

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Data da realização do Ultrassom</label>
          <input type="date" value={usgData.data} onChange={(e) => setUsgData({...usgData, data: e.target.value})} className="block w-full rounded-xl border-gray-300 bg-gray-50 p-4 text-lg" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Semanas no USG</label>
            <input type="number" value={usgData.semanas} onChange={(e) => setUsgData({...usgData, semanas: e.target.value})} className="block w-full rounded-xl border-gray-300 bg-gray-50 p-4 text-lg" placeholder="Ex: 12" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Dias no USG</label>
            <input type="number" value={usgData.dias} onChange={(e) => setUsgData({...usgData, dias: e.target.value})} className="block w-full rounded-xl border-gray-300 bg-gray-50 p-4 text-lg" placeholder="Ex: 3" />
          </div>
        </div>
        {resultUsg && (
          <div className="mt-8 space-y-4">
            <div className="p-4 bg-green-50 rounded-xl flex justify-between items-center"><span className="text-sm font-bold text-green-800">DUM ESTIMADA:</span><span className="text-xl font-bold text-green-600">{resultUsg.dum}</span></div>
            <div className="p-4 bg-blue-50 rounded-xl flex justify-between items-center"><span className="text-sm font-bold text-blue-800">IG ATUAL:</span><span className="text-xl font-bold text-blue-600">{resultUsg.ig}</span></div>
            <div className="p-4 bg-purple-50 rounded-xl flex justify-between items-center"><span className="text-sm font-bold text-purple-800">DPP:</span><span className="text-xl font-bold text-purple-600">{resultUsg.dpp}</span></div>
          </div>
        )}
      </div>
    </div>
  );
};

// ... (Outros componentes Calcs existentes)

export default function CalculAi({ onNavigate }: CalculAiProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('Geral');
  const [selectedCalc, setSelectedCalc] = useState<string | null>(null);

  const categories: { name: Category; icon: any }[] = [
    { name: 'Geral', icon: Stethoscope },
    { name: 'Cardiologia', icon: Heart },
    { name: 'Emergência e UTI', icon: Activity },
    { name: 'Neurologia', icon: Brain },
    { name: 'Psiquiatria', icon: Smile },
    { name: 'Obstetrícia', icon: Baby },
    { name: 'Pediatria', icon: Baby },
  ];

  const calculatorsList = [
    { id: 'imc', title: 'Calculadora de IMC', category: 'Geral', desc: 'Cálculo com classificação nutricional completa', icon: Activity },
    { id: 'chads', title: 'CHA₂DS₂-VASc', category: 'Cardiologia', desc: 'Risco de AVC em pacientes com Fibrilação Atrial', icon: Heart },
    { id: 'glasgow', title: 'Escala de Glasgow', category: 'Emergência e UTI', desc: 'Avaliação neurológica e nível de consciência', icon: Activity },
    { id: 'curb65', title: 'Escore CURB-65', category: 'Emergência e UTI', desc: 'Estratificação de risco para Pneumonia', icon: Activity },
    { id: 'nihss', title: 'Escala NIHSS', category: 'Neurologia', desc: 'Déficit neurológico padronizado no AVC', icon: FileText },
    { id: 'meem', title: 'Mini-Mental (MEEM)', category: 'Neurologia', desc: 'Rastreio cognitivo com instruções detalhadas', icon: Brain },
    { id: 'phq9', title: 'Questionário PHQ-9', category: 'Psiquiatria', desc: 'Ferramenta de rastreio de depressão', icon: Smile },
    { id: 'ig', title: 'Idade Gestacional / DPP', category: 'Obstetrícia', desc: 'Cálculo a partir da DUM', icon: Calendar },
    { id: 'dum_usg', title: 'Idade Gestacional pelo Ultrassom', category: 'Obstetrícia', desc: 'Estimativa via biometria fetal', icon: PlusSquare },
  ];

  const filteredCalculators = calculatorsList.filter(calc => calc.category === activeCategory);
  const currentCalcData = calculatorsList.find(c => c.id === selectedCalc);

  const renderCalculatorContent = () => {
    switch (selectedCalc) {
      case 'imc': return <CalcIMC />;
      case 'meem': return <CalcMEEM />;
      case 'dum_usg': return <CalcIdadeGestacionalUSG />;
      // ... adicionar os cases para as outras calculadoras aqui
      default: return <p className="text-center py-10">Calculadora em desenvolvimento.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar currentView="calculai" onNavigate={onNavigate} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        
        {selectedCalc ? (
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <button onClick={() => setSelectedCalc(null)} className="flex items-center text-gray-500 hover:text-orange-600 transition-colors font-medium">
                <ArrowLeft size={20} className="mr-2" /> Voltar
              </button>
              <div className="flex items-center bg-white px-5 py-2 rounded-2xl shadow-sm border border-gray-100">
                <img src="/calculai.png" alt="Logo" className="w-8 h-8 mr-3 object-contain" />
                <h2 className="text-xl font-bold text-gray-800">{currentCalcData?.title}</h2>
              </div>
            </div>
            {renderCalculatorContent()}
          </div>
        ) : (
          <>
            <header className="mb-8 flex items-center">
              <img src="/calculai.png" alt="CalculAí" className="w-12 h-12 mr-4 object-contain" />
              <div>
                <h1 className="text-3xl font-extrabold text-gray-800">CalculAí</h1>
                <p className="text-gray-500">Suporte à decisão clínica baseada em evidências.</p>
              </div>
            </header>

            <div className="flex space-x-3 mb-10 overflow-x-auto pb-4 scrollbar-hide">
              {categories.map((cat) => (
                <button key={cat.name} onClick={() => setActiveCategory(cat.name)} className={`flex items-center px-5 py-3 rounded-2xl whitespace-nowrap transition-all font-medium ${activeCategory === cat.name ? 'bg-orange-600 text-white shadow-lg shadow-orange-200' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}>
                  <cat.icon size={18} className="mr-2" /> {cat.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCalculators.map((calc) => (
                <div key={calc.id} onClick={() => setSelectedCalc(calc.id)} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md hover:border-orange-200 hover:-translate-y-1 transition-all group">
                  <div className="bg-orange-50 w-12 h-12 flex items-center justify-center rounded-2xl mb-4 group-hover:bg-orange-100 transition-colors">
                    <calc.icon size={24} className="text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{calc.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{calc.desc}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
