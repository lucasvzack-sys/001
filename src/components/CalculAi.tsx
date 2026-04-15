import React, { useState, useMemo, useEffect } from 'react';
import { 
  Activity, Heart, Brain, Baby, Stethoscope,
  ArrowLeft, Smile, Calendar, PlusSquare, FileText, Calculator
} from 'lucide-react';
import { View } from '../types';
import Navbar from './Navbar';
import CrossPromo from './CrossPromo';
import AdSpace from './AdSpace';
import { useParams, useNavigate } from 'react-router-dom';

interface CalculAiProps {
  onNavigate: (view: View) => void;
}

type Category = 'Geral' | 'Cardiologia' | 'Gastroenterologia' | 'Emergência e UTI' | 'Neurologia' | 'Psiquiatria' | 'Ginecologia e Obstetrícia' | 'Pediatria';

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
// COMPONENTES DAS CALCULADORAS 
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

const CalcGlasgow = () => {
  const [glasgow, setGlasgow] = useState({ ocular: 4, verbal: 5, motor: 6 });
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Abertura Ocular</label>
          <select onChange={(e) => setGlasgow({...glasgow, ocular: parseInt(e.target.value)})} className="block w-full rounded-xl border-gray-200 bg-gray-50 p-4 text-lg">
            <option value="4">4 - Espontânea</option>
            <option value="3">3 - À voz</option>
            <option value="2">2 - À dor</option>
            <option value="1">1 - Nenhuma</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Resposta Verbal</label>
          <select onChange={(e) => setGlasgow({...glasgow, verbal: parseInt(e.target.value)})} className="block w-full rounded-xl border-gray-200 bg-gray-50 p-4 text-lg">
            <option value="5">5 - Orientado</option>
            <option value="4">4 - Confuso</option>
            <option value="3">3 - Palavras inapropriadas</option>
            <option value="2">2 - Sons incompreensíveis</option>
            <option value="1">1 - Nenhuma</option>
            <option value="1">NT - Não testável (Tubo)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Resposta Motora</label>
          <select onChange={(e) => setGlasgow({...glasgow, motor: parseInt(e.target.value)})} className="block w-full rounded-xl border-gray-200 bg-gray-50 p-4 text-lg">
            <option value="6">6 - Obedece comandos</option>
            <option value="5">5 - Localiza dor</option>
            <option value="4">4 - Flexão normal (retirada)</option>
            <option value="3">3 - Flexão anormal (decorticação)</option>
            <option value="2">2 - Extensão anormal (descerebração)</option>
            <option value="1">1 - Nenhuma</option>
          </select>
        </div>
        <div className="mt-8 p-6 bg-blue-50 rounded-2xl text-center">
          <span className="text-sm text-blue-800 block uppercase font-bold tracking-wider mb-2">Total</span>
          <span className="text-6xl font-black text-blue-600">{glasgow.ocular + glasgow.verbal + glasgow.motor}</span>
        </div>
      </div>
    </div>
  );
};

const CalcCURB65 = () => {
  const [curb, setCurb] = useState({ confusao: false, ureia: false, resp: false, pa: false, idade: false });
  const scoreCurb = useMemo(() => Object.values(curb).filter(Boolean).length, [curb]);
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <div className="space-y-4">
        <CheckboxItem label="Confusão Mental" checked={curb.confusao} onChange={(c) => setCurb({...curb, confusao: c})} />
        <CheckboxItem label="Ureia > 43 mg/dL (ou BUN > 19 mg/dL)" checked={curb.ureia} onChange={(c) => setCurb({...curb, ureia: c})} />
        <CheckboxItem label="Frequência Respiratória ≥ 30 irpm" checked={curb.resp} onChange={(c) => setCurb({...curb, resp: c})} />
        <CheckboxItem label="PAS < 90 ou PAD ≤ 60 mmHg" checked={curb.pa} onChange={(c) => setCurb({...curb, pa: c})} />
        <CheckboxItem label="Idade ≥ 65 anos" checked={curb.idade} onChange={(c) => setCurb({...curb, idade: c})} />
        
        <div className="mt-8 p-6 bg-red-50 rounded-2xl text-center">
          <span className="text-sm text-red-800 block uppercase font-bold tracking-wider mb-2">Mortalidade (30 dias)</span>
          <span className="text-6xl font-black text-red-600">{scoreCurb} <span className="text-2xl font-normal text-red-800">pts</span></span>
          <p className="text-lg mt-4 text-red-900 font-medium">
            {scoreCurb <= 1 ? 'Baixo Risco (Ambulatorial)' : scoreCurb === 2 ? 'Risco Moderado (Considerar Internação)' : 'Alto Risco (Internação/UTI)'}
          </p>
        </div>
      </div>
    </div>
  );
};

const CalcCHADS = () => {
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

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <div className="space-y-4">
        <CheckboxItem label="Insuficiência Cardíaca / Disfunção VE" checked={chads.insuficiencia} onChange={(c) => setChads({...chads, insuficiencia: c})} />
        <CheckboxItem label="Hipertensão Arterial" checked={chads.has} onChange={(c) => setChads({...chads, has: c})} />
        <CheckboxItem label="Diabetes Mellitus" checked={chads.diabetes} onChange={(c) => setChads({...chads, diabetes: c})} />
        <CheckboxItem label="AVC, AIT ou Tromboembolismo prévio (+2)" checked={chads.stroke} onChange={(c) => setChads({...chads, stroke: c})} />
        <CheckboxItem label="Doença Vascular (IAM, DAOP, Placa Aórtica)" checked={chads.vascular} onChange={(c) => setChads({...chads, vascular: c})} />
        
        <div className="pt-4">
          <label className="block text-sm font-medium text-gray-700 mb-3">Idade</label>
          <div className="grid grid-cols-3 gap-3">
            {['<65', '65-74', '>=75'].map((age) => (
              <button key={age} onClick={() => setChads({...chads, idade: age})} className={`p-3 rounded-xl text-md border transition-all ${chads.idade === age ? 'bg-orange-100 border-orange-500 text-orange-700 font-bold' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>
                {age}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <label className="block text-sm font-medium text-gray-700 mb-3">Sexo</label>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => setChads({...chads, sexo: 'M'})} className={`p-3 rounded-xl text-md border transition-all ${chads.sexo === 'M' ? 'bg-blue-100 border-blue-500 text-blue-700 font-bold' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>Masculino</button>
            <button onClick={() => setChads({...chads, sexo: 'F'})} className={`p-3 rounded-xl text-md border transition-all ${chads.sexo === 'F' ? 'bg-pink-100 border-pink-500 text-pink-700 font-bold' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>Feminino</button>
          </div>
        </div>

        <div className="mt-8 p-6 bg-purple-50 rounded-2xl text-center">
          <span className="text-sm text-purple-800 block uppercase font-bold tracking-wider mb-2">Escore Total</span>
          <span className="text-6xl font-black text-purple-600">{scoreChads}</span>
        </div>
      </div>
    </div>
  );
};

const CalcIdadeGestacional = () => {
  const [dum, setDum] = useState('');
  const resultGO = useMemo(() => {
    if (!dum) return null;
    const dataDUM = new Date(dum);
    dataDUM.setHours(dataDUM.getHours() + 12);
    
    const hoje = new Date();
    const diffTime = hoje.getTime() - dataDUM.getTime();
    const diffDias = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDias < 0 || diffDias > 300) return { erro: 'Data inválida' };

    const semanas = Math.floor(diffDias / 7);
    const dias = diffDias % 7;

    const dppDate = new Date(dataDUM);
    dppDate.setDate(dppDate.getDate() + 280);
    const dpp = dppDate.toLocaleDateString('pt-BR');

    return { semanas, dias, dpp };
  }, [dum]);

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Informe a Data da Última Menstruação (DUM)</label>
          <input type="date" value={dum} onChange={(e) => setDum(e.target.value)} className="block w-full rounded-xl border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 bg-gray-50 p-4 text-lg text-gray-700" />
        </div>
        
        {resultGO && !resultGO.erro && (
          <div className="mt-8 space-y-4">
            <div className="p-6 bg-pink-50 rounded-2xl flex flex-col items-center justify-center">
              <span className="text-sm font-bold text-pink-800 uppercase mb-2">Idade Gestacional Atual</span>
              <span className="text-4xl font-black text-pink-600">{resultGO.semanas}s e {resultGO.dias}d</span>
            </div>
            <div className="p-6 bg-purple-50 rounded-2xl flex flex-col items-center justify-center">
              <span className="text-sm font-bold text-purple-800 uppercase mb-2">Data Provável do Parto (DPP)</span>
              <span className="text-3xl font-black text-purple-600">{resultGO.dpp}</span>
            </div>
          </div>
        )}
        {resultGO?.erro && <p className="text-red-500 text-center mt-4">Data inserida inválida.</p>}
      </div>
    </div>
  );
};

const CalcIdadeGestacionalUSG = () => {
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

const CalcNIHSS = () => {
  const nihssItems = [
    { label: "1a. Nível de Consciência", desc: "Avalie o estado de alerta. Tente acordar o paciente com estímulo verbal ou doloroso leve.", max: 3 },
    { label: "1b. Perguntas (Mês/Idade)", desc: "Pergunte em que mês estamos e a idade do paciente. Não forneça dicas.", max: 2 },
    { label: "1c. Comandos (Olhos/Mãos)", desc: "Peça para abrir e fechar os olhos, e depois abrir e fechar as mãos. Se o paciente não compreender ou tiver barreiras linguísticas, tente mímica.", max: 2 },
    { label: "2. Olhar Conjugado", desc: "Teste os movimentos oculares horizontais pedindo para o paciente acompanhar seu dedo. Se não cooperar, observe o rastreio visual espontâneo.", max: 2 },
    { label: "3. Campos Visuais", desc: "Teste a visão periférica por confrontação visual em todos os quadrantes visuais (contando dedos ou ameaça visual).", max: 3 },
    { label: "4. Paralisia Facial", desc: "Peça para o paciente sorrir, mostrar os dentes ou fechar os olhos com força. Observe a simetria, especialmente no sulco nasolabial.", max: 3 },
    { label: "5. Motor Braços", desc: "Sentado (90°) ou deitado (45°), peça para manter os braços esticados com as palmas para baixo por 10 segundos. Avalie um lado de cada vez.", max: 4 },
    { label: "6. Motor Pernas", desc: "Com o paciente deitado, peça para elevar a perna a 30° e manter por 5 segundos. Avalie uma perna de cada vez.", max: 4 },
    { label: "7. Ataxia de Membros", desc: "Realize o teste dedo-nariz e calcanhar-joelho de forma bilateral. O teste é positivo se a ataxia for desproporcional ao déficit motor.", max: 2 },
    { label: "8. Sensibilidade", desc: "Teste a sensibilidade dolorosa com um alfinete (ou objeto pontiagudo) no rosto, braço, tronco e perna, comparando os dois lados.", max: 2 },
    { label: "9. Linguagem/Afasia", desc: "Peça para o paciente descrever a cena de uma figura padrão, nomear objetos apontados e ler uma lista de frases curtas.", max: 3 },
    { label: "10. Disartria", desc: "Peça para o paciente ler palavras isoladas de uma lista ou avalie a clareza da articulação das palavras durante a conversa.", max: 2 },
    { label: "11. Extinção/Inatenção", desc: "Toque ambos os lados do corpo do paciente simultaneamente ou mova os dedos em ambos os campos visuais para avaliar heminegligência.", max: 2 }
  ];

  const [nihss, setNihss] = useState(new Array(nihssItems.length).fill(0));
  const scoreNihss = useMemo(() => nihss.reduce((a, b) => a + b, 0), [nihss]);
  
  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          {nihssItems.map((item, idx) => (
            <div key={idx} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <span className="text-md text-gray-800 font-bold">{item.label}</span>
                <div className="flex items-center mt-2 sm:mt-0">
                  <span className="text-xs text-gray-400 mr-2">Max: {item.max}</span>
                  <input type="number" min="0" max={item.max} value={nihss[idx]} onChange={(e) => {
                    const newNihss = [...nihss];
                    newNihss[idx] = parseInt(e.target.value) || 0;
                    if (newNihss[idx] > item.max) newNihss[idx] = item.max;
                    setNihss(newNihss);
                  }} className="w-16 p-2 bg-white border border-gray-300 rounded-lg text-center text-lg focus:ring-red-500 font-bold" />
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed bg-white p-3 rounded-lg border border-dashed border-gray-200">
                <span className="font-semibold text-gray-600">Como testar: </span>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 p-6 bg-red-50 rounded-2xl text-center border border-red-100">
          <span className="text-sm text-red-800 block uppercase font-bold tracking-wider mb-2">Score NIHSS Total</span>
          <span className="text-6xl font-black text-red-600">{scoreNihss} <span className="text-2xl font-normal text-red-800">pts</span></span>
        </div>
      </div>
    </div>
  );
};

const CalcApgar = () => {
  const [apgar, setApgar] = useState({ aparencia: 0, pulso: 0, gesticulacao: 0, atividade: 0, respiracao: 0 });
  const score = useMemo(() => Object.values(apgar).reduce((a, b) => a + b, 0), [apgar]);

  const criterios = [
    { key: 'aparencia', label: 'Aparência (Cor)', options: [{v:0, l:'Cianose/Palidez total'}, {v:1, l:'Acrocianose (Corpo rosado, extremidades azuis)'}, {v:2, l:'Totalmente rosado'}] },
    { key: 'pulso', label: 'Pulso (Frequência Cardíaca)', options: [{v:0, l:'Ausente'}, {v:1, l:'< 100 bpm'}, {v:2, l:'> 100 bpm'}] },
    { key: 'gesticulacao', label: 'Gesticulação (Reflexos)', options: [{v:0, l:'Sem resposta'}, {v:1, l:'Alguma flexão ou careta'}, {v:2, l:'Espirro, tosse ou choro vigoroso'}] },
    { key: 'atividade', label: 'Atividade (Tônus Muscular)', options: [{v:0, l:'Flácido'}, {v:1, l:'Alguma flexão de braços/pernas'}, {v:2, l:'Movimento ativo / Bem fletido'}] },
    { key: 'respiracao', label: 'Respiração', options: [{v:0, l:'Ausente'}, {v:1, l:'Lenta, irregular ou fraca'}, {v:2, l:'Regular, choro forte'}] },
  ];

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <div className="space-y-6">
        {criterios.map(({ key, label, options }) => (
          <div key={key} className="bg-gray-50 p-4 rounded-xl">
            <label className="block text-sm font-bold text-gray-800 mb-3">{label}</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {options.map(opt => (
                <button key={opt.v} onClick={() => setApgar({...apgar, [key]: opt.v})} className={`p-3 rounded-lg text-sm transition-all border ${apgar[key as keyof typeof apgar] === opt.v ? 'bg-teal-100 border-teal-500 text-teal-800 font-bold' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-100'}`}>
                  {opt.v} pts - {opt.l}
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className="mt-8 p-6 bg-teal-50 rounded-2xl text-center">
          <span className="text-sm text-teal-800 block uppercase font-bold tracking-wider mb-2">Índice de Apgar</span>
          <span className="text-6xl font-black text-teal-600">{score}</span>
          <p className="text-lg mt-3 font-medium text-teal-900">
            {score >= 7 ? 'Boa vitalidade (Normal)' : score >= 4 ? 'Asfixia moderada' : 'Asfixia grave'}
          </p>
        </div>
      </div>
    </div>
  );
};

const CalcCockcroftGault = () => {
  const [data, setData] = useState({ idade: '', peso: '', cr: '', sexo: 'M' });
  const result = useMemo(() => {
    const i = parseFloat(data.idade);
    const p = parseFloat(data.peso);
    const c = parseFloat(data.cr);
    if (i > 0 && p > 0 && c > 0) {
      let clcr = ((140 - i) * p) / (72 * c);
      if (data.sexo === 'F') clcr *= 0.85;
      return clcr.toFixed(1);
    }
    return null;
  }, [data]);

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Idade (anos)</label>
            <input type="number" value={data.idade} onChange={(e) => setData({...data, idade: e.target.value})} className="block w-full rounded-xl border-gray-300 bg-gray-50 p-4 text-lg" placeholder="Ex: 65" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Peso (kg)</label>
            <input type="number" value={data.peso} onChange={(e) => setData({...data, peso: e.target.value})} className="block w-full rounded-xl border-gray-300 bg-gray-50 p-4 text-lg" placeholder="Ex: 70" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Creatinina Sérica (mg/dL)</label>
          <input type="number" step="0.1" value={data.cr} onChange={(e) => setData({...data, cr: e.target.value})} className="block w-full rounded-xl border-gray-300 bg-gray-50 p-4 text-lg" placeholder="Ex: 1.2" />
        </div>
        <div className="pt-2">
          <label className="block text-sm font-medium text-gray-700 mb-3">Sexo biológico</label>
          <div className="grid grid-cols-2 gap-3">
            <button onClick={() => setData({...data, sexo: 'M'})} className={`p-3 rounded-xl text-md border transition-all ${data.sexo === 'M' ? 'bg-blue-100 border-blue-500 text-blue-700 font-bold' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>Masculino</button>
            <button onClick={() => setData({...data, sexo: 'F'})} className={`p-3 rounded-xl text-md border transition-all ${data.sexo === 'F' ? 'bg-pink-100 border-pink-500 text-pink-700 font-bold' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>Feminino (-15%)</button>
          </div>
        </div>
        
        {result && (
          <div className="mt-8 p-6 bg-orange-50 rounded-2xl text-center">
            <span className="text-sm text-orange-800 block uppercase font-bold tracking-wider mb-2">Taxa de Filtração Glomerular Estimada</span>
            <span className="text-5xl font-black text-orange-600">{result} <span className="text-xl font-normal text-orange-800">mL/min</span></span>
          </div>
        )}
      </div>
    </div>
  );
};

const CalcChildPugh = () => {
  const [child, setChild] = useState({ bili: 1, alb: 1, rni: 1, ascite: 1, enc: 1 });
  const score = useMemo(() => Object.values(child).reduce((a, b) => a + b, 0), [child]);

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <div className="space-y-6">
        {[
          { key: 'bili', label: 'Bilirrubina Total (mg/dL)', options: [{v:1, l:'< 2.0'}, {v:2, l:'2.0 a 3.0'}, {v:3, l:'> 3.0'}] },
          { key: 'alb', label: 'Albumina (g/dL)', options: [{v:1, l:'> 3.5'}, {v:2, l:'2.8 a 3.5'}, {v:3, l:'< 2.8'}] },
          { key: 'rni', label: 'RNI (ou TAP)', options: [{v:1, l:'< 1.7'}, {v:2, l:'1.7 a 2.20'}, {v:3, l:'> 2.20'}] },
          { key: 'ascite', label: 'Ascite', options: [{v:1, l:'Ausente'}, {v:2, l:'Leve / Controlada'}, {v:3, l:'Moderada a Grave / Refratária'}] },
          { key: 'enc', label: 'Encefalopatia Hepática', options: [{v:1, l:'Ausente'}, {v:2, l:'Graus I a II'}, {v:3, l:'Graus III a IV'}] },
        ].map(({ key, label, options }) => (
          <div key={key} className="bg-gray-50 p-4 rounded-xl">
            <label className="block text-sm font-bold text-gray-800 mb-3">{label}</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {options.map(opt => (
                <button key={opt.v} onClick={() => setChild({...child, [key]: opt.v})} className={`p-3 rounded-lg text-sm transition-all border ${child[key as keyof typeof child] === opt.v ? 'bg-yellow-100 border-yellow-500 text-yellow-800 font-bold' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-100'}`}>
                  {opt.l}
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className="mt-8 p-6 bg-yellow-50 rounded-2xl text-center">
          <span className="text-sm text-yellow-800 block uppercase font-bold tracking-wider mb-2">Classificação Child-Pugh</span>
          <span className="text-6xl font-black text-yellow-600">{score}</span>
          <p className="text-lg mt-3 font-medium text-yellow-900">
            {score <= 6 ? 'Classe A (Sobrevida 1 ano: 100%)' : score <= 9 ? 'Classe B (Sobrevida 1 ano: ~80%)' : 'Classe C (Sobrevida 1 ano: ~45%)'}
          </p>
        </div>
      </div>
    </div>
  );
};

const CalcCentor = () => {
  const [centor, setCentor] = useState({ febre: false, tosse: false, linfonodo: false, exsudato: false, idade: '15-44' });
  const score = useMemo(() => {
    let pts = 0;
    if (centor.febre) pts += 1;
    if (centor.tosse) pts += 1; // Ausência de tosse
    if (centor.linfonodo) pts += 1;
    if (centor.exsudato) pts += 1;
    if (centor.idade === '3-14') pts += 1;
    if (centor.idade === '>44') pts -= 1;
    return pts;
  }, [centor]);

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <div className="space-y-4">
        <CheckboxItem label="Febre > 38°C" checked={centor.febre} onChange={(c) => setCentor({...centor, febre: c})} />
        <CheckboxItem label="Ausência de tosse" checked={centor.tosse} onChange={(c) => setCentor({...centor, tosse: c})} />
        <CheckboxItem label="Linfonodos cervicais anteriores dolorosos/aumentados" checked={centor.linfonodo} onChange={(c) => setCentor({...centor, linfonodo: c})} />
        <CheckboxItem label="Exsudato ou hipertrofia amigdaliana" checked={centor.exsudato} onChange={(c) => setCentor({...centor, exsudato: c})} />
        
        <div className="pt-4">
          <label className="block text-sm font-medium text-gray-700 mb-3">Idade</label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { id: '3-14', label: '3 a 14 anos (+1)' },
              { id: '15-44', label: '15 a 44 anos (0)' },
              { id: '>44', label: '> 44 anos (-1)' }
            ].map((age) => (
              <button key={age.id} onClick={() => setCentor({...centor, idade: age.id})} className={`p-3 rounded-xl text-sm border transition-all ${centor.idade === age.id ? 'bg-indigo-100 border-indigo-500 text-indigo-700 font-bold' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>
                {age.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 p-6 bg-indigo-50 rounded-2xl text-center">
          <span className="text-sm text-indigo-800 block uppercase font-bold tracking-wider mb-2">Escore de Centor Modificado</span>
          <span className="text-6xl font-black text-indigo-600">{score}</span>
          <p className="text-md mt-4 text-indigo-900 font-medium leading-relaxed">
            {score <= 0 ? 'Risco < 2%. Sem necessidade de teste ou ATB.' : 
             score === 1 ? 'Risco ~5-10%. Geralmente sem teste/ATB.' : 
             score <= 3 ? 'Risco ~15-35%. Considerar teste rápido.' : 
             'Risco ~50%. Considerar teste rápido e/ou ATB empírico.'}
          </p>
        </div>
      </div>
    </div>
  );
};

const CalcWellsTVP = () => {
  const [wells, setWells] = useState({ cancer: false, paralisia: false, acamado: false, dor: false, edemaToda: false, edemaPanturrilha: false, edemaDepressivel: false, veias: false, altMaisProvavel: false });
  const score = useMemo(() => {
    let pts = Object.values(wells).filter(Boolean).length;
    if (wells.altMaisProvavel) pts -= 3; // +1 boolean true in array, but needs to be -2 mathematically (-3 compensates the +1 from the filter)
    return pts;
  }, [wells]);

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <div className="space-y-4">
        <CheckboxItem label="Câncer ativo (tratamento nos últimos 6 meses ou paliativo) (+1)" checked={wells.cancer} onChange={(c) => setWells({...wells, cancer: c})} />
        <CheckboxItem label="Paralisia, paresia ou imobilização recente das pernas (+1)" checked={wells.paralisia} onChange={(c) => setWells({...wells, paralisia: c})} />
        <CheckboxItem label="Acamado > 3 dias ou cirurgia de grande porte nas últimas 4 semanas (+1)" checked={wells.acamado} onChange={(c) => setWells({...wells, acamado: c})} />
        <CheckboxItem label="Dor/sensibilidade localizada no trajeto venoso profundo (+1)" checked={wells.dor} onChange={(c) => setWells({...wells, dor: c})} />
        <CheckboxItem label="Edema em toda a perna (+1)" checked={wells.edemaToda} onChange={(c) => setWells({...wells, edemaToda: c})} />
        <CheckboxItem label="Edema da panturrilha > 3 cm comparado à perna assintomática (+1)" checked={wells.edemaPanturrilha} onChange={(c) => setWells({...wells, edemaPanturrilha: c})} />
        <CheckboxItem label="Edema depressível (cacifo) confinado à perna sintomática (+1)" checked={wells.edemaDepressivel} onChange={(c) => setWells({...wells, edemaDepressivel: c})} />
        <CheckboxItem label="Veias superficiais colaterais (não varicosas) (+1)" checked={wells.veias} onChange={(c) => setWells({...wells, veias: c})} />
        <div className="mt-4 pt-4 border-t border-gray-100">
          <CheckboxItem label="Diagnóstico alternativo mais provável que TVP (-2)" checked={wells.altMaisProvavel} onChange={(c) => setWells({...wells, altMaisProvavel: c})} />
        </div>
        
        <div className="mt-8 p-6 bg-blue-50 rounded-2xl text-center">
          <span className="text-sm text-blue-800 block uppercase font-bold tracking-wider mb-2">Escore de Wells (TVP)</span>
          <span className="text-6xl font-black text-blue-600">{score}</span>
          <p className="text-lg mt-3 font-medium text-blue-900">
            {score >= 2 ? 'Provável (TVP Provável)' : 'Improvável (TVP Improvável - D-Dímero indicado)'}
          </p>
        </div>
      </div>
    </div>
  );
};

const CalcPHQ9 = () => {
  const [phq9, setPhq9] = useState(new Array(9).fill(0));
  const scorePhq9 = useMemo(() => phq9.reduce((a, b) => a + b, 0), [phq9]);

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <p className="text-sm text-gray-500 mb-6">Frequência dos sintomas nas últimas 2 semanas: 0=Nunca, 1= Alguns dias, 2= mais da metade dos dias, 3=Quase todos os dias.</p>
      <div className="space-y-4">
        {[
          "Pouco interesse ou prazer em fazer as coisas", "Sentir-se 'para baixo', deprimido ou sem perspectiva", 
          "Dificuldade para pegar no sono, ou dormir demais", "Sentir-se cansado ou com pouca energia", 
          "Falta de apetite ou comendo demais", "Sentir-se mal consigo mesmo ou um fracasso", 
          "Dificuldade de concentração (ex: ler ou ver TV)", "Lentidão ou agitação motora observável", 
          "Pensamentos de se ferir ou de que estaria melhor morto"
        ].map((q, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100">
            <span className="text-sm text-gray-700 pr-4 mb-2 sm:mb-0 flex-1">{idx+1}. {q}</span>
            <select value={phq9[idx]} onChange={(e) => {
              const newPhq = [...phq9];
              newPhq[idx] = parseInt(e.target.value);
              setPhq9(newPhq);
            }} className="p-2 bg-gray-50 border border-gray-200 rounded-lg text-md min-w-[80px]">
              <option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option>
            </select>
          </div>
        ))}
        <div className="mt-8 p-6 bg-indigo-50 rounded-2xl text-center">
          <span className="text-sm text-indigo-800 block uppercase font-bold tracking-wider mb-2">Total Score</span>
          <span className="text-5xl font-black text-indigo-600">{scorePhq9}</span>
          <p className="text-lg mt-3 font-medium text-indigo-900">
            {scorePhq9 >= 20 ? 'Depressão Grave' : scorePhq9 >= 15 ? 'Depressão Moderadamente Grave' : scorePhq9 >= 10 ? 'Depressão Moderada' : scorePhq9 >= 5 ? 'Depressão Leve' : 'Mínima / Sem Depressão'}
          </p>
        </div>
      </div>
    </div>
  );
};

const CalcMEEM = () => {
  const [meem, setMeem] = useState({ orientacao: 0, registro: 0, atencao: 0, evocacao: 0, linguagem: 0 });
  const scoreMeem = useMemo(() => Object.values(meem).reduce((a, b) => a + b, 0), [meem]);

  const sections = [
    { key: 'orientacao', label: 'Orientação Temporal e Espacial', max: 10, instrucao: '(1 pt para cada resposta correta): Ano, semestre, mês, dia do mês, dia da semana. E Estado, cidade, bairro, local/instituição, andar/setor.' },
    { key: 'registro', label: 'Registro de Memória', max: 3, instrucao: '(1 pt para cada palavra certa): Fale 3 palavras sem relação (Ex: Vaso, Carro, Tijolo) e peça para o paciente repetir imediatamente.' },
    { key: 'atencao', label: 'Atenção e Cálculo', max: 5, instrucao: '(1 pt para cada resposta certa): Subtrair 7 do número 100 por cinco vezes seguidas (93, 86, 79, 72, 65). OU soletrar a palavra MUNDO de trás para frente.' },
    { key: 'evocacao', label: 'Evocação (Memória Tardia)', max: 3, instrucao: '(1 pt para cada palavra lembrada): Peça para o paciente repetir as 3 palavras ditas anteriormente no item de Registro.' },
    { key: 'linguagem', label: 'Linguagem e Praxia', max: 9, instrucao: 'Nomear 2 objetos apresentados (2 pts); Repetir a frase "Nem aqui, nem ali, nem lá" (1 pt); Seguir comando de 3 etapas "Pegue o papel, dobre ao meio e ponha no chão" (3 pts); Ler e executar um papel escrito "FECHE OS OLHOS" (1 pt); Escrever uma frase com sentido (1 pt); Copiar o desenho de dois pentágonos cruzados (1 pt).' }
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

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

const CalcKupperman = () => {
  const [sintomas, setSintomas] = useState({
    fogachos: 0, sudorese: 0, insonia: 0, nervosismo: 0, 
    melancolia: 0, vertigem: 0, fraqueza: 0, artralgia: 0, 
    cefaleia: 0, palpitacao: 0, formigamento: 0
  });

  const score = useMemo(() => {
    return (sintomas.fogachos * 4) + (sintomas.sudorese * 2) + 
           (sintomas.insonia * 2) + (sintomas.nervosismo * 2) + 
           sintomas.melancolia + sintomas.vertigem + sintomas.fraqueza + 
           sintomas.artralgia + sintomas.cefaleia + sintomas.palpitacao + sintomas.formigamento;
  }, [sintomas]);

  const intensidades = [{v:0, l:'Ausente'}, {v:1, l:'Leve'}, {v:2, l:'Moderado'}, {v:3, l:'Intenso'}];

  const itens = [
    { key: 'fogachos', label: 'Ondas de calor (Fogachos) [Peso x4]' },
    { key: 'sudorese', label: 'Sudorese [Peso x2]' },
    { key: 'insonia', label: 'Insônia [Peso x2]' },
    { key: 'nervosismo', label: 'Nervosismo / Irritabilidade [Peso x2]' },
    { key: 'melancolia', label: 'Melancolia / Depressão [Peso x1]' },
    { key: 'vertigem', label: 'Vertigem / Tontura [Peso x1]' },
    { key: 'fraqueza', label: 'Fraqueza / Fadiga [Peso x1]' },
    { key: 'artralgia', label: 'Artralgia / Mialgia [Peso x1]' },
    { key: 'cefaleia', label: 'Cefaleia [Peso x1]' },
    { key: 'palpitacao', label: 'Palpitações [Peso x1]' },
    { key: 'formigamento', label: 'Formigamento (Parestesia) [Peso x1]' }
  ];

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <div className="space-y-4">
        {itens.map(({ key, label }) => (
          <div key={key} className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-gray-100">
            <span className="text-sm font-bold text-gray-700 pr-4 mb-3 md:mb-0 md:w-1/2">{label}</span>
            <div className="flex gap-2 w-full md:w-1/2 justify-between">
              {intensidades.map(opt => (
                <button key={opt.v} onClick={() => setSintomas({...sintomas, [key]: opt.v})} className={`flex-1 py-2 px-1 text-xs sm:text-sm rounded-lg border transition-all ${sintomas[key as keyof typeof sintomas] === opt.v ? 'bg-pink-100 border-pink-500 text-pink-700 font-bold' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>
                  {opt.l}
                </button>
              ))}
            </div>
          </div>
        ))}
        
        <div className="mt-8 p-6 bg-pink-50 rounded-2xl text-center">
          <span className="text-sm text-pink-800 block uppercase font-bold tracking-wider mb-2">Índice de Kupperman-Blatt</span>
          <span className="text-6xl font-black text-pink-600">{score}</span>
          <p className="text-lg mt-3 font-medium text-pink-900">
            {score <= 14 ? 'Sintomas Leves' : score <= 20 ? 'Sintomas Moderados' : score <= 35 ? 'Sintomas Intensos' : 'Sintomas Graves'}
          </p>
        </div>
      </div>
    </div>
  );
};

const CalcMELD = () => {
  const [data, setData] = useState({ bili: '', inr: '', cr: '', dialise: false });
  
  const score = useMemo(() => {
    let b = parseFloat(data.bili);
    let i = parseFloat(data.inr);
    let c = parseFloat(data.cr);
    
    if (b > 0 && i > 0 && c > 0) {
      if (b < 1) b = 1;
      if (i < 1) i = 1;
      if (c < 1) c = 1;
      if (c > 4 || data.dialise) c = 4;
      
      const meld = 3.78 * Math.log(b) + 11.2 * Math.log(i) + 9.57 * Math.log(c) + 6.43;
      return Math.round(meld);
    }
    return null;
  }, [data]);

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Bilirrubina Total (mg/dL)</label>
          <input type="number" step="0.1" value={data.bili} onChange={(e) => setData({...data, bili: e.target.value})} className="block w-full rounded-xl border-gray-300 bg-gray-50 p-4 text-lg" placeholder="Ex: 2.1" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">INR</label>
          <input type="number" step="0.1" value={data.inr} onChange={(e) => setData({...data, inr: e.target.value})} className="block w-full rounded-xl border-gray-300 bg-gray-50 p-4 text-lg" placeholder="Ex: 1.5" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Creatinina Sérica (mg/dL)</label>
          <input type="number" step="0.1" value={data.cr} onChange={(e) => setData({...data, cr: e.target.value})} className="block w-full rounded-xl border-gray-300 bg-gray-50 p-4 text-lg" placeholder="Ex: 1.2" />
        </div>
        
        <CheckboxItem label="Paciente realizou 2 ou mais sessões de diálise na última semana" checked={data.dialise} onChange={(c) => setData({...data, dialise: c})} />
        
        {score !== null && (
          <div className="mt-8 p-6 bg-yellow-50 rounded-2xl text-center">
            <span className="text-sm text-yellow-800 block uppercase font-bold tracking-wider mb-2">Escore MELD (Clássico)</span>
            <span className="text-6xl font-black text-yellow-600">{score}</span>
            <p className="text-sm mt-3 font-medium text-yellow-900">
              Mortalidade em 3 meses estimada em aproximadamente {score <= 9 ? '1.9%' : score <= 19 ? '6.0%' : score <= 29 ? '19.6%' : score <= 39 ? '52.6%' : '71.3%'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const CalcJones = () => {
  const [criteria, setCriteria] = useState({
    strep: false,
    cardite: false,
    artrite: false,
    coreia: false,
    eritema: false,
    nodulos: false,
    artralgia: false,
    febre: false,
    vhs: false,
    pr: false
  });

  const result = useMemo(() => {
    let major = 0;
    if (criteria.cardite) major++;
    if (criteria.artrite) major++;
    if (criteria.coreia) major++;
    if (criteria.eritema) major++;
    if (criteria.nodulos) major++;

    let minor = 0;
    if (criteria.artralgia) minor++;
    if (criteria.febre) minor++;
    if (criteria.vhs) minor++;
    if (criteria.pr) minor++;

    const hasStrep = criteria.strep;

    let status = '';
    let colorClass = '';

    if (!hasStrep) {
      status = 'Falta evidência de infeção estreptocócica. Diagnóstico improvável.';
      colorClass = 'text-gray-700 bg-gray-50 border-gray-300';
    } else if (major >= 2 || (major >= 1 && minor >= 2)) {
      status = 'Alta probabilidade de Febre Reumática Aguda (Critérios preenchidos).';
      colorClass = 'text-red-800 bg-red-50 border-red-500';
    } else {
      status = 'Critérios insuficientes para o diagnóstico de Febre Reumática Aguda.';
      colorClass = 'text-orange-800 bg-orange-50 border-orange-400';
    }

    return { major, minor, status, colorClass };
  }, [criteria]);

  const toggle = (key: keyof typeof criteria) => setCriteria({...criteria, [key]: !criteria[key]});

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <div className="space-y-6">

        {/* Requisito Obrigatório */}
        <div className="p-5 bg-purple-50 rounded-2xl border border-purple-200 shadow-sm">
          <label className="flex items-start space-x-3 cursor-pointer">
            <input type="checkbox" checked={criteria.strep} onChange={() => toggle('strep')} className="w-5 h-5 mt-0.5 text-purple-600 rounded border-gray-300 focus:ring-purple-500" />
            <span className="text-purple-900 font-bold text-lg">Evidência de infeção por Estreptococo do Grupo A (Obrigatório)</span>
          </label>
          <p className="text-sm text-purple-700 ml-8 mt-1">Cultura de orofaringe positiva, teste rápido positivo ou título de ASLO (antiestreptolisina O) elevado.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {/* Critérios Maiores */}
          <div>
            <h3 className="text-md font-bold text-red-800 mb-3 border-b border-red-100 pb-2 flex items-center">
              Critérios Maiores
              <span className="ml-auto bg-red-100 text-red-700 py-0.5 px-2 rounded-full text-xs">{result.major}</span>
            </h3>
            <div className="space-y-3">
              <CheckboxItem label="Cardite (clínica ou subclínica/ecocardiográfica)" checked={criteria.cardite} onChange={() => toggle('cardite')} />
              <CheckboxItem label="Poliartrite (ou monoartrite/poliartralgia em alto risco)" checked={criteria.artrite} onChange={() => toggle('artrite')} />
              <CheckboxItem label="Coreia de Sydenham" checked={criteria.coreia} onChange={() => toggle('coreia')} />
              <CheckboxItem label="Eritema marginado" checked={criteria.eritema} onChange={() => toggle('eritema')} />
              <CheckboxItem label="Nódulos subcutâneos" checked={criteria.nodulos} onChange={() => toggle('nodulos')} />
            </div>
          </div>

          {/* Critérios Menores */}
          <div>
            <h3 className="text-md font-bold text-orange-800 mb-3 border-b border-orange-100 pb-2 flex items-center">
              Critérios Menores
              <span className="ml-auto bg-orange-100 text-orange-700 py-0.5 px-2 rounded-full text-xs">{result.minor}</span>
            </h3>
            <div className="space-y-3">
              <CheckboxItem label="Poliartralgia (não usar se poliartrite for critério maior)" checked={criteria.artralgia} onChange={() => toggle('artralgia')} />
              <CheckboxItem label="Febre (≥ 38,5°C ou ≥ 38°C em populações de alto risco)" checked={criteria.febre} onChange={() => toggle('febre')} />
              <CheckboxItem label="Provas inflamatórias: VHS ≥ 60 mm/h ou PCR ≥ 3,0 mg/dL" checked={criteria.vhs} onChange={() => toggle('vhs')} />
              <CheckboxItem label="Aumento do intervalo PR no ECG (não usar se cardite for critério maior)" checked={criteria.pr} onChange={() => toggle('pr')} />
            </div>
          </div>
        </div>

        {/* Resultado */}
        <div className={`mt-8 p-6 rounded-2xl text-center border-2 transition-colors ${result.colorClass}`}>
          <span className="text-sm block uppercase font-bold tracking-wider mb-2 opacity-80">Interpretação Diagnóstica</span>
          <p className="text-xl md:text-2xl font-black">{result.status}</p>
          {criteria.strep && (
            <p className="text-sm mt-3 opacity-90 font-medium">
              Diagnóstico = 2 Critérios Maiores OU 1 Maior + 2 Menores.
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

const CalcTIMI = () => {
  const [timi, setTimi] = useState({ idade: false, farc: false, dac: false, aas: false, angina: false, ecg: false, mrc: false });
  const score = useMemo(() => Object.values(timi).filter(Boolean).length, [timi]);

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <div className="space-y-4">
        <CheckboxItem label="Idade ≥ 65 anos (+1)" checked={timi.idade} onChange={(c) => setTimi({...timi, idade: c})} />
        <CheckboxItem label="Presença de ≥ 3 fatores de risco DAC (HAS, DM, DLP, Tabagismo, HF) (+1)" checked={timi.farc} onChange={(c) => setTimi({...timi, farc: c})} />
        <CheckboxItem label="Doença Arterial Coronariana prévia conhecida (estenose ≥ 50%) (+1)" checked={timi.dac} onChange={(c) => setTimi({...timi, dac: c})} />
        <CheckboxItem label="Uso de AAS nos últimos 7 dias (+1)" checked={timi.aas} onChange={(c) => setTimi({...timi, aas: c})} />
        <CheckboxItem label="Angina severa (≥ 2 episódios nas últimas 24 horas) (+1)" checked={timi.angina} onChange={(c) => setTimi({...timi, angina: c})} />
        <CheckboxItem label="Alteração de ST ≥ 0.5 mm no ECG (+1)" checked={timi.ecg} onChange={(c) => setTimi({...timi, ecg: c})} />
        <CheckboxItem label="Marcadores de necrose miocárdica (Troponina) elevados (+1)" checked={timi.mrc} onChange={(c) => setTimi({...timi, mrc: c})} />
        
        <div className="mt-8 p-6 bg-red-50 rounded-2xl text-center">
          <span className="text-sm text-red-800 block uppercase font-bold tracking-wider mb-2">Escore TIMI (SCA sem supra de ST)</span>
          <span className="text-6xl font-black text-red-600">{score}</span>
          <p className="text-lg mt-3 font-medium text-red-900">
            {score <= 2 ? 'Baixo Risco' : score <= 4 ? 'Risco Intermediário' : 'Alto Risco'}
          </p>
          <p className="text-xs text-red-700 mt-2">Risco de mortalidade, IAM ou isquemia severa em 14 dias.</p>
        </div>
      </div>
    </div>
  );
};

export default function CalculAi({ onNavigate }: CalculAiProps) {
  const { calcId } = useParams(); // Lê o ID da URL
  const navigate = useNavigate(); // Permite mudar a URL
  
  const [activeCategory, setActiveCategory] = useState<Category>('Geral');
  const selectedCalc = calcId || null; // Agora a calculadora selecionada vem da URL

  // ==========================================
  // TÍTULOS DAS URLs
  // ==========================================
  useEffect(() => {
    const calcTitles: Record<string, string> = {
      imc: "Calculadora de IMC e Peso Ideal - Adulto e Infantil",
      clcr: "Calculadora de Clearance de Creatinina (Cockcroft-Gault) Online",
      childpugh: "Calculadora Escore Child-Pugh - Cirrose Hepática",
      meld: "Calculadora Escore MELD - Prognóstico de Doença Hepática",
      centor: "Calculadora Escore de Centor Modificado - Faringite",
      chads: "Calculadora Escore CHA₂DS₂-VASc - Risco de AVC",
      timi: "Calculadora Escore TIMI - Síndrome Coronariana Aguda",
      glasgow: "Calculadora Escala de Coma de Glasgow Online",
      curb65: "Calculadora Escore CURB-65 - Risco de Pneumonia",
      wells: "Calculadora Escore de Wells - Trombose Venosa Profunda (TVP)",
      nihss: "Calculadora Escala NIHSS Online - Avaliação de AVC",
      meem: "Calculadora Mini-Mental (MEEM) - Avaliação Cognitiva Online",
      phq9: "Questionário PHQ-9 Online - Rastreio de Depressão",
      ig: "Calculadora de Idade Gestacional e DPP (Data Provável do Parto)",
      dum_usg: "Calculadora de Idade Gestacional pelo Ultrassom (USG)",
      kupperman: "Calculadora Índice de Kupperman - Sintomas de Menopausa",
      jones: "Critérios de Jones - Diagnóstico de Febre Reumática Aguda",
      apgar: "Calculadora Índice de Apgar Online - Avaliação do Recém-Nascido"
    };

    if (selectedCalc && calcTitles[selectedCalc]) {
      document.title = `${calcTitles[selectedCalc]} | CalculAí SUSsego`;
    }
  }, [selectedCalc]);
  // ==========================================

  const categories: { name: Category; icon: any }[] = [
    { name: 'Geral', icon: Stethoscope },
    { name: 'Cardiologia', icon: Heart },
    { name: 'Gastroenterologia', icon: Stethoscope },
    { name: 'Emergência e UTI', icon: Activity },
    { name: 'Neurologia', icon: Brain },
    { name: 'Psiquiatria', icon: Smile },
    { name: 'Ginecologia e Obstetrícia', icon: Baby }, // Nome atualizado aqui
    { name: 'Pediatria', icon: Baby },
  ];

  const calculatorsList = [
    { id: 'imc', title: 'Calculadora de IMC', category: 'Geral', desc: 'Cálculo com classificação nutricional completa', icon: Calculator, Component: CalcIMC },
    { id: 'clcr', title: 'Clearance de Creatinina', category: 'Geral', desc: 'Estimativa da TFG pela fórmula de Cockcroft-Gault', icon: Activity, Component: CalcCockcroftGault },
    { id: 'childpugh', title: 'Classificação Child-Pugh', category: 'Gastroenterologia', desc: 'Prognóstico de cirrose e doença hepática crônica', icon: FileText, Component: CalcChildPugh },
    { id: 'meld', title: 'Escore MELD', category: 'Gastroenterologia', desc: 'Gravidade e mortalidade em hepatopatias', icon: FileText, Component: CalcMELD },
    { id: 'centor', title: 'Escore de Centor', category: 'Geral', desc: 'Probabilidade de faringite estreptocócica', icon: Activity, Component: CalcCentor },
    { id: 'chads', title: 'CHA₂DS₂-VASc', category: 'Cardiologia', desc: 'Risco de AVC em pacientes com Fibrilação Atrial', icon: Heart, Component: CalcCHADS },
    { id: 'timi', title: 'Escore TIMI (SCA)', category: 'Cardiologia', desc: 'Risco na Síndrome Coronariana Aguda sem Supra de ST', icon: Activity, Component: CalcTIMI },
    { id: 'glasgow', title: 'Escala de Glasgow', category: 'Emergência e UTI', desc: 'Avaliação neurológica e nível de consciência', icon: Activity, Component: CalcGlasgow },
    { id: 'curb65', title: 'Escore CURB-65', category: 'Emergência e UTI', desc: 'Estratificação de risco para Pneumonia', icon: Activity, Component: CalcCURB65 },
    { id: 'wells', title: 'Escore de Wells (TVP)', category: 'Emergência e UTI', desc: 'Probabilidade pré-teste de Trombose Venosa Profunda', icon: Stethoscope, Component: CalcWellsTVP },
    { id: 'nihss', title: 'Escala NIHSS', category: 'Neurologia', desc: 'Déficit neurológico padronizado no AVC', icon: FileText, Component: CalcNIHSS },
    { id: 'meem', title: 'Mini-Mental (MEEM)', category: 'Neurologia', desc: 'Rastreio cognitivo com instruções detalhadas', icon: Brain, Component: CalcMEEM },
    { id: 'phq9', title: 'Questionário PHQ-9', category: 'Psiquiatria', desc: 'Ferramenta de rastreio de depressão', icon: Smile, Component: CalcPHQ9 },
    { id: 'ig', title: 'Idade Gestacional / DPP', category: 'Ginecologia e Obstetrícia', desc: 'Cálculo a partir da DUM', icon: Calendar, Component: CalcIdadeGestacional },
    { id: 'dum_usg', title: 'Idade Gestacional pelo Ultrassom', category: 'Ginecologia e Obstetrícia', desc: 'Estimativa via biometria fetal', icon: PlusSquare, Component: CalcIdadeGestacionalUSG },
    { id: 'kupperman', title: 'Índice de Kupperman', category: 'Ginecologia e Obstetrícia', desc: 'Avaliação da gravidade dos sintomas climatéricos', icon: Smile, Component: CalcKupperman },
    { id: 'jones', title: 'Critérios de Jones', category: 'Pediatria', desc: 'Diagnóstico de Febre Reumática Aguda', icon: Heart, Component: CalcJones },
    { id: 'apgar', title: 'Índice de Apgar', category: 'Pediatria', desc: 'Avaliação rápida da vitalidade do recém-nascido', icon: Baby, Component: CalcApgar },
  ];
  const filteredCalculators = calculatorsList.filter(calc => calc.category === activeCategory);
  const currentCalcData = calculatorsList.find(c => c.id === selectedCalc);

const renderCalculatorContent = () => {
    // Se a calculadora não for encontrada na URL ou ainda não tiver o "Component" associado
    if (!currentCalcData || !currentCalcData.Component) {
      return <p className="text-center py-10">Calculadora em desenvolvimento ou não encontrada.</p>;
    }
    
    // Puxa o componente diretamente da lista e o renderiza
    const CalculadoraParaRenderizar = currentCalcData.Component;
    return <CalculadoraParaRenderizar />;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar currentView="calculai" onNavigate={onNavigate} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        
        {selectedCalc ? (
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <button onClick={() => navigate('/calculai')} className="flex items-center text-gray-500 hover:text-orange-600 transition-colors font-medium">
                <ArrowLeft size={20} className="mr-2" /> Voltar
              </button>
             <div className="flex items-center bg-white px-5 py-3 rounded-2xl shadow-sm border border-gray-100">
              {/* Logo aumentada na página da calculadora */}
              <img src="/calculai.png" alt="Logo" className="w-24 md:w-32 h-auto mr-4 object-contain" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">{currentCalcData?.title}</h2>
              </div>
            </div>
            {renderCalculatorContent()}
          </div>
        ) : (
          <>
          <header className="mb-8 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4">
            {/* Logo gigante na página principal do CalculAí */}
            <img src="/calculai.png" alt="CalculAí" className="w-32 md:w-40 h-auto object-contain" />
            <div className="md:mt-4">
              <h1 className="text-3xl font-extrabold text-gray-800">CalculAí</h1>
              <p className="text-gray-500">Suporte à decisão clínica baseada em evidências.</p>
            </div>
          </header>

            <div className="flex flex-wrap gap-3 mb-10 justify-center md:justify-start">
              {categories.map((cat) => (
                <button 
                  key={cat.name} 
                  onClick={() => setActiveCategory(cat.name)} 
                  className={`flex items-center px-4 py-2.5 rounded-2xl transition-all font-medium text-sm sm:text-base ${
                    activeCategory === cat.name 
                      ? 'bg-orange-600 text-white shadow-lg shadow-orange-200' 
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <cat.icon size={18} className="mr-2" /> 
                  {cat.name}
                </button>
              ))}
            </div>

            {filteredCalculators.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCalculators.map((calc) => (
                  <div key={calc.id} onClick={() => navigate(`/calculai/${calc.id}`)} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 cursor-pointer hover:shadow-md hover:border-orange-200 hover:-translate-y-1 transition-all group">
                    <div className="bg-orange-50 w-12 h-12 flex items-center justify-center rounded-2xl mb-4 group-hover:bg-orange-100 transition-colors">
                      <calc.icon size={24} className="text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{calc.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{calc.desc}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 border-dashed">
                <Baby size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500 font-medium">Nenhuma calculadora disponível nesta categoria ainda.</p>
              </div>
            )}
          </>
        )}
        <div className="mt-16 space-y-6">
          <AdSpace />
          <div className="grid md:grid-cols-2 gap-6">
            <CrossPromo target="temnoposto" onNavigate={onNavigate} />
            <CrossPromo target="laudai" onNavigate={onNavigate} />
          </div>
        </div>
      </main>
      <footer className="bg-white py-12 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-xs font-medium uppercase tracking-widest mb-4">Aviso Ético e Legal</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            As ferramentas são destinadas exclusivamente para fins educativos e de apoio à decisão clínica. 
            O conteúdo apresentado não substitui, em circunstância alguma, a avaliação, o diagnóstico ou o tratamento por um profissional de saúde qualificado. A responsabilidade pelas decisões clínicas recai inteiramente sobre o profissional assistente. 
            O SUSsego não se responsabiliza pelo uso indevido destas ferramentas. A responsabilidade final pela informação médica é do profissional assistente.
          </p>
        </div>
      </footer>
    </div>
  );
}
