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
  
  // 1. Geral: IMC
  const [imc, setImc] = useState({ peso: '', altura: '' });
  const resultImc = useMemo(() => {
    const p = parseFloat(imc.peso);
    const a = parseFloat(imc.altura) / 100;
    if (p > 0 && a > 0) return (p / (a * a)).toFixed(1);
    return null;
  }, [imc]);

  // 2. Emergência: Glasgow
  const [glasgow, setGlasgow] = useState({ ocular: 4, verbal: 5, motor: 6 });

  // 3. Emergência: CURB-65
  const [curb, setCurb] = useState({ confusao: false, ureia: false, resp: false, pa: false, idade: false });
  const scoreCurb = useMemo(() => Object.values(curb).filter(Boolean).length, [curb]);

  // 4. Cardio: CHA2DS2-VASc
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

  // 5. Obstetrícia: Idade Gestacional / DPP
  const [dum, setDum] = useState('');
  const resultGO = useMemo(() => {
    if (!dum) return null;
    const dataDUM = new Date(dum);
    dataDUM.setHours(dataDUM.getHours() + 12); // Ajuste simples de fuso para não errar o dia
    
    const hoje = new Date();
    const diffTime = hoje.getTime() - dataDUM.getTime();
    const diffDias = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDias < 0 || diffDias > 300) return { erro: 'Data inválida' };

    const semanas = Math.floor(diffDias / 7);
    const dias = diffDias % 7;

    const dppDate = new Date(dataDUM);
    dppDate.setDate(dppDate.getDate() + 280); // Regra de Naegele (40 semanas)
    const dpp = dppDate.toLocaleDateString('pt-BR');

    return { semanas, dias, dpp };
  }, [dum]);

  // --- DADOS DAS CATEGORIAS ---
  const categories: { name: Category; icon: any }[] = [
    { name: 'Geral', icon: Stethoscope },
    { name: 'Cardio', icon: Heart },
    { name: 'Emergência/UTI', icon: Activity },
    { name: 'Neuro/Psi', icon: Brain },
    { name: 'Obstetrícia/Ped', icon: Baby },
  ];

  // Componente Auxiliar para Checkboxes
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
          <p className="text-gray-600 mt-2">Escores clínicos e calculadoras instantâneas para suporte à decisão médica.</p>
        </header>

        {/* Abas de Categorias */}
        <div className="flex space-x-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center px-5 py-2.5 rounded-full whitespace-nowrap transition-all font-medium ${
                activeCategory === cat.name 
                ? 'bg-orange-600 text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-orange-50 border border-gray-200'
              }`}
            >
              <cat.icon size={18} className="mr-2" />
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* ================= GERAL ================= */}
          {activeCategory === 'Geral' && (
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Calculadora de IMC</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Peso (kg)</label>
                  <input type="number" value={imc.peso} onChange={(e) => setImc({...imc, peso: e.target.value})} className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 bg-gray-50 p-3" placeholder="Ex: 70" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Altura (cm)</label>
                  <input type="number" value={imc.altura} onChange={(e) => setImc({...imc, altura: e.target.value})} className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 bg-gray-50 p-3" placeholder="Ex: 175" />
                </div>
                {resultImc && (
                  <div className="mt-4 p-4 bg-orange-50 rounded-2xl text-center">
                    <span className="text-sm text-orange-800 block uppercase font-bold tracking-wider">Resultado</span>
                    <span className="text-4xl font-black text-orange-600">{resultImc}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ================= EMERGÊNCIA ================= */}
          {activeCategory === 'Emergência/UTI' && (
            <>
              {/* GLASGOW */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Escala de Glasgow</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Abertura Ocular</label>
                    <select onChange={(e) => setGlasgow({...glasgow, ocular: parseInt(e.target.value)})} className="mt-1 block w-full rounded-xl border-gray-100 bg-gray-50 p-3">
                      <option value="4">4 - Espontânea</option>
                      <option value="3">3 - À voz</option>
                      <option value="2">2 - À dor</option>
                      <option value="1">1 - Nenhuma</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Resposta Verbal</label>
                    <select onChange={(e) => setGlasgow({...glasgow, verbal: parseInt(e.target.value)})} className="mt-1 block w-full rounded-xl border-gray-100 bg-gray-50 p-3">
                      <option value="5">5 - Orientado</option>
                      <option value="4">4 - Confuso</option>
                      <option value="3">3 - Palavras inapropriadas</option>
                      <option value="2">2 - Sons incompreensíveis</option>
                      <option value="1">1 - Nenhuma</option>
                      <option value="1">NT - Não testável (Tubo)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Resposta Motora</label>
                    <select onChange={(e) => setGlasgow({...glasgow, motor: parseInt(e.target.value)})} className="mt-1 block w-full rounded-xl border-gray-100 bg-gray-50 p-3">
                      <option value="6">6 - Obedece comandos</option>
                      <option value="5">5 - Localiza dor</option>
                      <option value="4">4 - Flexão normal (retirada)</option>
                      <option value="3">3 - Flexão anormal (decorticação)</option>
                      <option value="2">2 - Extensão anormal (descerebração)</option>
                      <option value="1">1 - Nenhuma</option>
                    </select>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded-2xl text-center">
                    <span className="text-sm text-blue-800 block uppercase font-bold tracking-wider">Total</span>
                    <span className="text-4xl font-black text-blue-600">{glasgow.ocular + glasgow.verbal + glasgow.motor}</span>
                  </div>
                </div>
              </div>

              {/* CURB-65 */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Escore CURB-65</h3>
                <p className="text-xs text-gray-500 mb-4">Avaliação de risco em Pneumonia Adquirida na Comunidade</p>
                <div className="space-y-3">
                  <CheckboxItem label="Confusão Mental" checked={curb.confusao} onChange={(c) => setCurb({...curb, confusao: c})} />
                  <CheckboxItem label="Ureia > 43 mg/dL (ou BUN > 19 mg/dL)" checked={curb.ureia} onChange={(c) => setCurb({...curb, ureia: c})} />
                  <CheckboxItem label="Frequência Respiratória ≥ 30 irpm" checked={curb.resp} onChange={(c) => setCurb({...curb, resp: c})} />
                  <CheckboxItem label="PAS < 90 ou PAD ≤ 60 mmHg" checked={curb.pa} onChange={(c) => setCurb({...curb, pa: c})} />
                  <CheckboxItem label="Idade ≥ 65 anos" checked={curb.idade} onChange={(c) => setCurb({...curb, idade: c})} />
                  
                  <div className="mt-4 p-4 bg-red-50 rounded-2xl text-center">
                    <span className="text-sm text-red-800 block uppercase font-bold tracking-wider">Mortalidade (30 dias)</span>
                    <span className="text-4xl font-black text-red-600">{scoreCurb} <span className="text-lg font-normal text-red-800">pontos</span></span>
                    <p className="text-sm mt-2 text-red-900 font-medium">
                      {scoreCurb <= 1 ? 'Baixo Risco (Ambulatorial)' : scoreCurb === 2 ? 'Risco Moderado (Considerar Internação)' : 'Alto Risco (Internação/UTI)'}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* ================= CARDIO ================= */}
          {activeCategory === 'Cardio' && (
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-1">CHA₂DS₂-VASc</h3>
              <p className="text-xs text-gray-500 mb-4">Risco de AVC em Fibrilação Atrial</p>
              <div className="space-y-3">
                <CheckboxItem label="Insuficiência Cardíaca / Disfunção VE" checked={chads.insuficiencia} onChange={(c) => setChads({...chads, insuficiencia: c})} />
                <CheckboxItem label="Hipertensão Arterial" checked={chads.has} onChange={(c) => setChads({...chads, has: c})} />
                <CheckboxItem label="Diabetes Mellitus" checked={chads.diabetes} onChange={(c) => setChads({...chads, diabetes: c})} />
                <CheckboxItem label="AVC, AIT ou Tromboembolismo prévio (+2)" checked={chads.stroke} onChange={(c) => setChads({...chads, stroke: c})} />
                <CheckboxItem label="Doença Vascular (IAM, DAOP, Placa Aórtica)" checked={chads.vascular} onChange={(c) => setChads({...chads, vascular: c})} />
                
                <div className="pt-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Idade</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['<65', '65-74', '>=75'].map((age) => (
                      <button key={age} onClick={() => setChads({...chads, idade: age})} className={`p-2 rounded-xl text-sm border transition-all ${chads.idade === age ? 'bg-orange-100 border-orange-500 text-orange-700 font-bold' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>
                        {age}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sexo</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => setChads({...chads, sexo: 'M'})} className={`p-2 rounded-xl text-sm border transition-all ${chads.sexo === 'M' ? 'bg-blue-100 border-blue-500 text-blue-700 font-bold' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>Masculino</button>
                    <button onClick={() => setChads({...chads, sexo: 'F'})} className={`p-2 rounded-xl text-sm border transition-all ${chads.sexo === 'F' ? 'bg-pink-100 border-pink-500 text-pink-700 font-bold' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>Feminino</button>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-purple-50 rounded-2xl text-center">
                  <span className="text-sm text-purple-800 block uppercase font-bold tracking-wider">Escore Total</span>
                  <span className="text-4xl font-black text-purple-600">{scoreChads}</span>
                </div>
              </div>
            </div>
          )}

          {/* ================= OBSTETRÍCIA ================= */}
          {activeCategory === 'Obstetrícia/Ped' && (
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-1">Idade Gestacional e DPP</h3>
              <p className="text-xs text-gray-500 mb-4">A partir da Data da Última Menstruação (DUM)</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Informe a DUM</label>
                  <input type="date" value={dum} onChange={(e) => setDum(e.target.value)} className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 bg-gray-50 p-3 text-gray-700" />
                </div>
                
                {resultGO && !resultGO.erro && (
                  <div className="mt-6 space-y-3">
                    <div className="p-4 bg-pink-50 rounded-2xl flex justify-between items-center">
                      <span className="text-sm font-bold text-pink-800 uppercase">Idade Gestacional Atual</span>
                      <span className="text-2xl font-black text-pink-600">{resultGO.semanas}s e {resultGO.dias}d</span>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-2xl flex justify-between items-center">
                      <span className="text-sm font-bold text-purple-800 uppercase">Data Provável do Parto</span>
                      <span className="text-xl font-black text-purple-600">{resultGO.dpp}</span>
                    </div>
                  </div>
                )}
                {resultGO?.erro && <p className="text-red-500 text-sm mt-2 text-center">Data inserida inválida.</p>}
              </div>
            </div>
          )}

          {/* ================= NEURO/PSI ================= */}
          {activeCategory === 'Neuro/Psi' && (
            <div className="bg-gray-100 p-6 rounded-3xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-500 min-h-[300px] text-center">
              <Brain size={48} className="text-gray-300 mb-4" />
              <p className="font-medium">Em Desenvolvimento</p>
              <p className="text-sm mt-2">Calculadoras como NIHSS, Mini-Mental e PHQ-9 estarão disponíveis em breve.</p>
            </div>
          )}

        </div>
        
        <p className="mt-12 text-center text-xs text-gray-400">
          Nota: Estas ferramentas são criadas para auxiliar estudantes e profissionais. Não substituem a conduta e o julgamento clínico individualizado.
        </p>
      </main>
    </div>
  );
}
