import React, { useState, useMemo } from 'react';
import { Calculator, ChevronLeft, Search, Activity, Heart, Brain, Baby, Stethoscope } from 'lucide-react';
import { View } from '../types';
import Navbar from './Navbar';

interface CalculAiProps {
  onNavigate: (view: View) => void;
}

type Category = 'Geral' | 'Cardio' | 'Emergência/UTI' | 'Neuro/Psi' | 'Obstetrícia/Ped';

export default function CalculAi({ onNavigate }: CalculAiProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('Geral');
  const [searchTerm, setSearchTerm] = useState('');

  // Estados para as calculadoras (Exemplos)
  const [imc, setImc] = useState({ peso: '', altura: '' });
  const [glasgow, setGlasgow] = useState({ ocular: 4, verbal: 5, motor: 6 });

  // Lógica IMC
  const resultImc = useMemo(() => {
    const p = parseFloat(imc.peso);
    const a = parseFloat(imc.altura) / 100;
    if (p > 0 && a > 0) return (p / (a * a)).toFixed(1);
    return null;
  }, [imc]);

  const categories: { name: Category; icon: any }[] = [
    { name: 'Geral', icon: Stethoscope },
    { name: 'Cardio', icon: Heart },
    { name: 'Emergência/UTI', icon: Activity },
    { name: 'Neuro/Psi', icon: Brain },
    { name: 'Obstetrícia/Ped', icon: Baby },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentView="calculai" onNavigate={onNavigate} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <Calculator className="mr-3 text-orange-600" /> CalculAí
          </h1>
          <p className="text-gray-600 mt-2">Escores clínicos e calculadoras instantâneas para suporte à decisão.</p>
        </header>

        {/* Categorias */}
        <div className="flex space-x-2 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                activeCategory === cat.name 
                ? 'bg-orange-600 text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-orange-50'
              }`}
            >
              <cat.icon size={18} className="mr-2" />
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* CALCULADORA DE IMC */}
          {activeCategory === 'Geral' && (
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Calculadora de IMC</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Peso (kg)</label>
                  <input 
                    type="number" 
                    value={imc.peso} 
                    onChange={(e) => setImc({...imc, peso: e.target.value})}
                    className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 bg-gray-50 p-3"
                    placeholder="Ex: 70"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Altura (cm)</label>
                  <input 
                    type="number" 
                    value={imc.altura} 
                    onChange={(e) => setImc({...imc, altura: e.target.value})}
                    className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 bg-gray-50 p-3"
                    placeholder="Ex: 175"
                  />
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

          {/* ESCALA DE GLASGOW */}
          {activeCategory === 'Emergência/UTI' && (
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Escala de Coma de Glasgow</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Abertura Ocular</label>
                  <select 
                    onChange={(e) => setGlasgow({...glasgow, ocular: parseInt(e.target.value)})}
                    className="mt-1 block w-full rounded-xl border-gray-100 bg-gray-50 p-3"
                  >
                    <option value="4">4 - Espontânea</option>
                    <option value="3">3 - À voz</option>
                    <option value="2">2 - À dor</option>
                    <option value="1">1 - Nenhuma</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Resposta Verbal</label>
                  <select 
                    onChange={(e) => setGlasgow({...glasgow, verbal: parseInt(e.target.value)})}
                    className="mt-1 block w-full rounded-xl border-gray-100 bg-gray-50 p-3"
                  >
                    <option value="5">5 - Orientado</option>
                    <option value="4">4 - Confuso</option>
                    <option value="3">3 - Palavras inapropriadas</option>
                    <option value="2">2 - Sons incompreensíveis</option>
                    <option value="1">1 - Nenhuma</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Resposta Motora</label>
                  <select 
                    onChange={(e) => setGlasgow({...glasgow, motor: parseInt(e.target.value)})}
                    className="mt-1 block w-full rounded-xl border-gray-100 bg-gray-50 p-3"
                  >
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
          )}

          {/* ADICIONE AS OUTRAS CALCULADORAS SEGUINDO ESTE MODELO */}
          <div className="bg-gray-100 p-6 rounded-3xl border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-500">
            Próximas calculadoras (CHA2DS2-VASc, CURB-65, etc) sendo carregadas...
          </div>

        </div>
        
        <p className="mt-12 text-center text-xs text-gray-400">
          Nota: Estas ferramentas são para auxílio acadêmico e profissional. Não substituem o julgamento clínico.
        </p>
      </main>
    </div>
  );
}
