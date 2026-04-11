import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Info, CheckCircle2, XCircle } from 'lucide-react';
import { View, MedicineData } from '../types';
import medicinesData from '../data/medicines.json';
import AdSpace from './AdSpace';
import CrossPromo from './CrossPromo';
import Navbar from './Navbar';

interface TemNoPostoProps {
  onNavigate: (view: View) => void;
}

export default function TemNoPosto({ onNavigate }: TemNoPostoProps) {
  const [municipio, setMunicipio] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<MedicineData[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const municipios = useMemo(() => {
    const set = new Set(medicinesData.map(m => m.municipio));
    return Array.from(set).sort();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!municipio || !searchTerm) return;

    // Modificado para usar filter() e retornar todos os correspondentes
    const found = medicinesData.filter(m => 
      m.municipio === municipio && 
      m.medicamento.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (found.length > 0) {
      setResults(found);
    } else {
      setResults([{ municipio, medicamento: searchTerm, disponivel: false }]);
    }
    
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar currentView="temnoposto" onNavigate={onNavigate} />

      <main className="flex-grow max-w-3xl mx-auto w-full px-4 py-8">
        <AdSpace className="mb-8" />

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Busca de Medicamentos</h2>
          <p className="text-gray-600">Verifique a disponibilidade gratuita na rede pública do seu município.</p>
        </motion.div>

        <form onSubmit={handleSearch} className="space-y-6 mb-8">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center">
              <MapPin size={16} className="mr-2 text-sus-green" /> Selecione seu Município
            </label>
            <select 
              value={municipio}
              onChange={(e) => setMunicipio(e.target.value)}
              className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-sus-green focus:ring-0 transition-all outline-none text-lg"
              required
            >
              <option value="">Escolha uma cidade...</option>
              {municipios.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 flex items-center">
              <Search size={16} className="mr-2 text-sus-green" /> Qual medicamento você procura?
            </label>
            <div className="relative">
              <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Ex: Dipirona, Amoxicilina..."
                className="w-full p-4 pl-12 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-sus-green focus:ring-0 transition-all outline-none text-lg"
                required
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-sus-green text-white rounded-2xl font-bold text-lg shadow-lg hover:bg-green-700 transition-all active:scale-[0.98]"
          >
            Consultar Disponibilidade
          </button>
        </form>

        {/* Novo AdSpace inserido logo após o formulário */}
        {hasSearched && <AdSpace className="mb-8" />}

        {hasSearched && results.length > 0 && (
          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {results.map((result, index) => (
                <motion.div
                  key={`${result.medicamento}-${index}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-8 rounded-3xl border-2 shadow-xl ${
                    result.disponivel 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-start mb-6">
                    <div className={`p-3 rounded-2xl mr-4 ${
                      result.disponivel ? 'bg-green-500 text-white' : 'bg-gray-400 text-white'
                    }`}>
                      {result.disponivel ? <CheckCircle2 size={32} /> : <XCircle size={32} />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{result.medicamento}</h3>
                      <p className={`text-lg font-semibold mt-1 ${
                        result.disponivel ? 'text-green-700' : 'text-gray-600'
                      }`}>
                        {result.disponivel 
                          ? 'Disponível para retirada gratuita' 
                          : 'Não disponível neste município'}
                      </p>
                    </div>
                  </div>

                  {result.disponivel ? (
                    <div className="bg-white/60 p-6 rounded-2xl border border-green-100">
                      <div className="flex items-start">
                        <Info className="text-green-600 mr-3 mt-1 shrink-0" size={20} />
                        <p className="text-green-800 leading-relaxed">
                          Procure a Unidade de Saúde mais próxima com sua <span className="font-bold">receita atualizada</span> e <span className="font-bold">documento com foto</span>.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white/60 p-6 rounded-2xl border border-gray-200">
                      <p className="text-gray-600">
                        Infelizmente este medicamento não consta como disponível em nossa base para {municipio}. Recomendamos consultar diretamente a Secretaria de Saúde local.
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        <div className="mt-16 space-y-8">
          <AdSpace /> {/* Mais um AdSpace acima do CrossPromo */}
          <CrossPromo target="laudai" onNavigate={onNavigate} />
          <AdSpace />
        </div>
      </main>

      <footer className="bg-gray-50 py-12 px-4 border-t border-gray-100 mt-auto">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            Os dados apresentados são informativos e baseados em planilhas públicas. 
            A disponibilidade real pode variar.
          <p className="text-gray-500 text-xs font-medium uppercase tracking-widest mb-4">© 2026 SUSsegado - Facilitando a saúde pública.</p>
          </p>
        </div>
      </footer>
    </div>
  );
}
