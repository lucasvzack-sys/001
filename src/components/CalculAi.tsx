import React, { useState, useMemo } from 'react';
import { Calculator, Activity, Heart, Brain, Baby, Stethoscope } from 'lucide-react';
import { View } from '../types';
import Navbar from './Navbar';

interface CalculAiProps {
  onNavigate: (view: View) => void;
}

type Category = 'Geral' | 'Cardio' | 'Emergência/UTI' | 'Neuro/Psi' | 'Obstetrícia/Ped';

export default function CalculAi({ onNavigate }: CalculAiProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('Geral');

  // --- ESTADOS DAS CALCULADORAS ---
  
  // 1. GERAL: IMC
  const [imc, setImc] = useState({ peso: '', altura: '' });
  const resultImc = useMemo(() => {
    const p = parseFloat(imc.peso);
    const a = parseFloat(imc.altura) / 100;
    if (p > 0 && a > 0) return (p / (a * a)).toFixed(1);
    return null;
  }, [imc]);

  // 2. EMERGÊNCIA: Glasgow
  const [glasgow, setGlasgow] = useState({ ocular: 4, verbal: 5, motor: 6 });

  // 3. EMERGÊNCIA: CURB-65
  const [curb, setCurb] = useState({ confusao: false, ureia: false, resp: false, pa: false, idade: false });
  const scoreCurb = useMemo(() => Object.values(curb).filter(Boolean).length, [curb]);

  // 4. CARDIO: CHA2DS2-VASc
  const [chads, setChads] = useState({ insuficiencia: false, has: false, idade: '<65', diabetes: false, stroke: false, vascular: false, sexo: 'M' });
  const scoreChads = useMemo(() => {
    let score = 0;
    if (chads.insuficiencia) score += 1;
    if (chads.has) score += 1;
    if (chads.idade === '65-74') score += 1;
    if (chads.idade === '>=75') score += 2;
    if (chads.diabetes) score += 1;
    if (chads.stroke) score += 2;
    if (chads.vascular) score += 1;
    if (chads.sexo === 'F') score += 1;
    return score;
  }, [chads]);

  // 5. OBSTETRÍCIA: DUM por USG
  const [usgData, setUsgData] = useState({ data: '', semanas: '', dias: '' });
  const resultUsg = useMemo(() => {
    if (!usgData.data || !usgData.semanas) return null;
    const dataRef = new Date(usgData.data);
    dataRef.setHours(dataRef.getHours() + 12);
    
    const totalDiasUsg = (parseInt(usgData.semanas) * 7) + (parseInt(usgData.dias) || 0);
    const dumCorrigida = new Date(dataRef);
    dumCorrigida.setDate(dumCorrigida.getDate() - totalDiasUsg);
    
    const hoje = new Date();
    const diffTime = hoje.getTime() - dumCorrigida.getTime();
    const diffDias = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    const igSemanas = Math.floor(diffDias / 7);
    const igDias = diffDias % 7;

    const dppDate = new Date(dumCorrigida);
    dppDate.setDate(dppDate.getDate() + 280);

    return { 
      dum: dumCorrigida.toLocaleDateString('pt-BR'), 
      ig: `${igSemanas}s ${igDias}d`,
      dpp: dppDate.toLocaleDateString('pt-BR')
    };
  }, [usgData]);

  // 6. NEURO: NIHSS (Simplificado para o UI)
  const [nihss, setNihss] = useState(new Array(11).fill(0));
  const scoreNihss = useMemo(() => nihss.reduce((a, b) => a + b, 0), [nihss]);

  // 7. PSI: PHQ-9
  const [phq9, setPhq9] = useState(new Array(9).fill(0));
  const scorePhq9 = useMemo(() => phq9.reduce((a, b) => a + b, 0), [phq9]);

  // 8. NEURO: Mini-Mental (MEEM)
  const [meem, setMeem] = useState({ orientacao: 0, registro: 0, atencao: 0, evocacao: 0, linguagem: 0 });
  const scoreMeem = useMemo(() => Object.values(meem).reduce((a, b) => a + b, 0), [meem]);

  // --- COMPONENTES AUXILIARES ---
  const categories: { name: Category; icon: any }[] = [
    { name: 'Geral', icon: Stethoscope },
    { name: 'Cardio', icon: Heart },
    { name: 'Emergência/UTI', icon: Activity },
    { name: 'Neuro/Psi', icon: Brain },
    { name: 'Obstetrícia/Ped', icon: Baby },
  ];

  const CheckboxItem = ({ label, checked, onChange }: { label: string, checked: boolean, onChange: (c: boolean) => void }) => (
    <label className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="w-5 h-5 text-orange-600 rounded border-gray-300 focus:ring-orange-500" />
      <span className="text-gray-700">{label}</span>
    </label>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentView="calculai" onNavigate={onNavigate} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <Calculator className="mr-3 text-orange-600" /> CalculAí
          </h1>
          <p className="text-gray-600 mt-2">Suporte à decisão clínica baseada em evidências.</p>
        </header>

        {/* Categorias */}
        <div className="flex space-x-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button key={cat.name} onClick={() => setActiveCategory(cat.name)} className={`flex items-center px-5 py-2.5 rounded-full whitespace-nowrap transition-all font-medium ${activeCategory === cat.name ? 'bg-orange-600 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200'}`}>
              <cat.icon size={18} className="mr-2" />
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* OBSTETRÍCIA: DUM POR USG */}
          {activeCategory === 'Obstetrícia/Ped' && (
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">DUM pela Data do USG</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Data do Ultrassom</label>
                  <input type="date" value={usgData.data} onChange={(e) => setUsgData({...usgData, data: e.target.value})} className="mt-1 block w-full rounded-xl border-gray-300 bg-gray-50 p-3" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Semanas no USG</label>
                    <input type="number" value={usgData.semanas} onChange={(e) => setUsgData({...usgData, semanas: e.target.value})} className="mt-1 block w-full rounded-xl border-gray-300 bg-gray-50 p-3" placeholder="Ex: 12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Dias no USG</label>
                    <input type="number" value={usgData.dias} onChange={(e) => setUsgData({...usgData, dias: e.target.value})} className="mt-1 block w-full rounded-xl border-gray-300 bg-gray-50 p-3" placeholder="Ex: 3" />
                  </div>
                </div>
                {resultUsg && (
                  <div className="mt-4 space-y-2">
                    <div className="p-3 bg-green-50 rounded-xl flex justify-between">
                      <span className="text-sm font-bold text-green-800 uppercase">DUM Estimada:</span>
                      <span className="font-bold text-green-600">{resultUsg.dum}</span>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-xl flex justify-between">
                      <span className="text-sm font-bold text-blue-800 uppercase">IG Atual:</span>
                      <span className="font-bold text-blue-600">{resultUsg.ig}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* NEURO: NIHSS */}
          {activeCategory === 'Neuro/Psi' && (
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">NIHSS (Escala de AVC)</h3>
              <div className="space-y-3">
                <p className="text-xs text-gray-500">Selecione a pontuação de cada item (0 a 4 conforme o item).</p>
                {/* Interface simplificada para NIHSS */}
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "1a. Nível de Consciência", "1b. Perguntas (Mês/Idade)", "1c. Comandos (Olhos)", 
                    "2. Olhar Conjugado", "3. Campos Visuais", "4. Paralisia Facial", 
                    "5. Motor Braços", "6. Motor Pernas", "7. Ataxia", "8. Sensibilidade", "9. Linguagem"
                  ].map((label, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600">{label}</span>
                      <input type="number" min="0" max="4" value={nihss[idx]} onChange={(e) => {
                        const newNihss = [...nihss];
                        newNihss[idx] = parseInt(e.target.value) || 0;
                        setNihss(newNihss);
                      }} className="w-12 p-1 border rounded text-center" />
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-red-50 rounded-2xl text-center">
                  <span className="text-sm text-red-800 block uppercase font-bold tracking-wider">Score NIHSS</span>
                  <span className="text-4xl font-black text-red-600">{scoreNihss}</span>
                </div>
              </div>
            </div>
          )}

          {/* PSI: PHQ-9 */}
          {activeCategory === 'Neuro/Psi' && (
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">PHQ-9 (Depressão)</h3>
              <div className="space-y-2">
                <p className="text-xs text-gray-500 mb-2">Nas últimas 2 semanas: 0=Nunca, 3=Quase todos os dias.</p>
                {[
                  "Pouco interesse ou prazer", "Sentir-se 'para baixo'", "Dificuldade em dormir", 
                  "Sentir-se cansado", "Apetite ruim ou excessivo", "Sentir-se mal consigo mesmo", 
                  "Dificuldade de concentração", "Lentidão ou agitação", "Pensamentos de se ferir"
                ].map((q, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1 border-b border-gray-50">
                    <span className="text-xs text-gray-600 pr-2">{idx+1}. {q}</span>
                    <select value={phq9[idx]} onChange={(e) => {
                      const newPhq = [...phq9];
                      newPhq[idx] = parseInt(e.target.value);
                      setPhq9(newPhq);
                    }} className="text-xs p-1 bg-gray-50 rounded">
                      <option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option>
                    </select>
                  </div>
                ))}
                <div className="mt-4 p-4 bg-indigo-50 rounded-2xl text-center">
                  <span className="text-sm text-indigo-800 block font-bold">Total: {scorePhq9}</span>
                  <p className="text-xs mt-1 italic">
                    {scorePhq9 >= 20 ? 'Depressão Grave' : scorePhq9 >= 15 ? 'Mod. Grave' : scorePhq9 >= 10 ? 'Moderada' : 'Leve/Mínima'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* NEURO: MEEM */}
          {activeCategory === 'Neuro/Psi' && (
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Mini-Mental (MEEM)</h3>
              <div className="space-y-4">
                {Object.entries(meem).map(([key, val]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-sm capitalize text-gray-700">{key}</span>
                    <input type="number" value={val} onChange={(e) => setMeem({...meem, [key]: parseInt(e.target.value) || 0})} className="w-16 p-2 bg-gray-50 border rounded-xl text-center" />
                  </div>
                ))}
                <div className="mt-4 p-4 bg-yellow-50 rounded-2xl text-center border border-yellow-100">
                  <span className="text-sm text-yellow-800 block uppercase font-bold tracking-wider">Total Score</span>
                  <span className="text-4xl font-black text-yellow-600">{scoreMeem} <span className="text-lg">/ 30</span></span>
                </div>
              </div>
            </div>
          )}

          {/* ... Manter as outras calculadoras (IMC, Glasgow, etc) ... */}
        </div>
      </main>
    </div>
  );
}
