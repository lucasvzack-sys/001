import React, { useState, useMemo } from 'react';
import { 
  Activity, Heart, Brain, Baby, Stethoscope, 
  ArrowLeft, Smile, Calendar, PlusSquare, FileText, Calculator
} from 'lucide-react';
import { View } from '../types';
import Navbar from './Navbar';
import CrossPromo from './CrossPromo';
import AdSpace from './AdSpace';

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

const CalcPHQ9 = () => {
  const [phq9, setPhq9] = useState(new Array(9).fill(0));
  const scorePhq9 = useMemo(() => phq9.reduce((a, b) => a + b, 0), [phq9]);

  return (
    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
      <p className="text-sm text-gray-500 mb-6">Frequência dos sintomas nas últimas 2 semanas: 0=Nunca, 3=Quase todos os dias.</p>
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
    { id: 'imc', title: 'Calculadora de IMC', category: 'Geral', desc: 'Cálculo com classificação nutricional completa', icon: Calculator },
    { id: 'clcr', title: 'Clearance de Creatinina', category: 'Geral', desc: 'Estimativa da TFG pela fórmula de Cockcroft-Gault', icon: Activity },
    { id: 'chads', title: 'CHA₂DS₂-VASc', category: 'Cardiologia', desc: 'Risco de AVC em pacientes com Fibrilação Atrial', icon: Heart },
    { id: 'glasgow', title: 'Escala de Glasgow', category: 'Emergência e UTI', desc: 'Avaliação neurológica e nível de consciência', icon: Activity },
    { id: 'curb65', title: 'Escore CURB-65', category: 'Emergência e UTI', desc: 'Estratificação de risco para Pneumonia', icon: Activity },
    { id: 'nihss', title: 'Escala NIHSS', category: 'Neurologia', desc: 'Déficit neurológico padronizado no AVC', icon: FileText },
    { id: 'meem', title: 'Mini-Mental (MEEM)', category: 'Neurologia', desc: 'Rastreio cognitivo com instruções detalhadas', icon: Brain },
    { id: 'phq9', title: 'Questionário PHQ-9', category: 'Psiquiatria', desc: 'Ferramenta de rastreio de depressão', icon: Smile },
    { id: 'ig', title: 'Idade Gestacional / DPP', category: 'Obstetrícia', desc: 'Cálculo a partir da DUM', icon: Calendar },
    { id: 'dum_usg', title: 'Idade Gestacional pelo Ultrassom', category: 'Obstetrícia', desc: 'Estimativa via biometria fetal', icon: PlusSquare },
    { id: 'apgar', title: 'Índice de Apgar', category: 'Pediatria', desc: 'Avaliação rápida da vitalidade do recém-nascido', icon: Baby },
  ];

  const filteredCalculators = calculatorsList.filter(calc => calc.category === activeCategory);
  const currentCalcData = calculatorsList.find(c => c.id === selectedCalc);

  const renderCalculatorContent = () => {
    switch (selectedCalc) {
      case 'imc': return <CalcIMC />;
      case 'clcr': return <CalcCockcroftGault />;
      case 'glasgow': return <CalcGlasgow />;
      case 'curb65': return <CalcCURB65 />;
      case 'chads': return <CalcCHADS />;
      case 'ig': return <CalcIdadeGestacional />;
      case 'dum_usg': return <CalcIdadeGestacionalUSG />;
      case 'apgar': return <CalcApgar />;
      case 'nihss': return <CalcNIHSS />;
      case 'phq9': return <CalcPHQ9 />;
      case 'meem': return <CalcMEEM />;
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

            <div className="flex space-x-3 mb-10 overflow-x-auto pb-4 scrollbar-hide">
              {categories.map((cat) => (
                <button key={cat.name} onClick={() => setActiveCategory(cat.name)} className={`flex items-center px-5 py-3 rounded-2xl whitespace-nowrap transition-all font-medium ${activeCategory === cat.name ? 'bg-orange-600 text-white shadow-lg shadow-orange-200' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}`}>
                  <cat.icon size={18} className="mr-2" /> {cat.name}
                </button>
              ))}
            </div>

            {filteredCalculators.length > 0 ? (
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
    </div>
  );
}
