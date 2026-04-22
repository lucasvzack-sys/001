import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart, ShieldCheck, BookOpen, Coffee } from 'lucide-react';
import Navbar from './Navbar';
import { View } from '../types';

interface AboutProps {
  onNavigate: (view: View | string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-10">
      <Navbar currentView="sobre" onNavigate={onNavigate} />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* CORREÇÃO AQUI: Alterado de <div> para <motion.div> e adicionada animação suave */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
        >
          {/* CABEÇALHO COM IMAGEM AMPLIADA */}
          <div className="bg-orange-50 px-8 py-12 border-b border-orange-100 text-center flex flex-col items-center">
            <img 
              src="/susegado.png" 
              alt="Logo Sussego" 
              className="w-36 md:w-48 h-auto mb-8 object-contain drop-shadow-md transform hover:scale-105 transition-transform duration-300" 
            />
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
              Sobre Sussego.com.br
            </h1>
            <p className="text-lg text-orange-800/80 max-w-2xl mx-auto">
              Tecnologia e Medicina Baseada em Evidências unidas para facilitar a prática clínica e a saúde pública.
            </p>
          </div>

          <section className="space-y-8 p-8 md:p-12 text-gray-700 leading-relaxed">
            <div className="text-justify">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center text-left">
                <ShieldCheck className="mr-2 text-orange-500" /> A Nossa Missão
              </h2>
              <p>
                O <strong>SUSsego.com.br</strong> nasceu no coração da saúde pública com um objetivo claro: simplificar a rotina clínica através da tecnologia. Acreditamos que ferramentas digitais bem desenhadas podem reduzir a carga cognitiva de médicos e estudantes, permitindo que o foco permaneça onde realmente importa: o cuidado com o paciente.
              </p>
            </div>

            <div className="py-4">
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-justify">
                <GraduationCap className="text-blue-600 mb-3" size={32} />
                <h3 className="font-bold text-gray-800 mb-2 text-left">Rigor Académico</h3>
                <p className="text-sm">Desenvolvido por quem vive o dia a dia médico, garantindo que as ferramentas atendam às demandas reais das enfermarias e emergências.</p>
              </div>
            </div>

            <div className="text-justify">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center text-left">
                <BookOpen className="mr-2 text-orange-500" /> O Criador
              </h2>
              <p>
                O projeto é idealizado e desenvolvido por <strong>Lucas V. Zacaria</strong>, graduando em Medicina pela <strong>Universidade Federal de Ciências da Saúde de Porto Alegre (UFCSPA)</strong>. Iniciou a sua trajetória académica em 2022 e une a vivência clínica com competências em desenvolvimento de software para criar soluções que resolvem estrangulamentos reais do Sistema Único de Saúde (SUS). Lucas possui uma trajetória destacada em ensino, pesquisa e extensão, sendo investigador em múltiplas áreas da saúde pública e clínica e autor com publicação internacional. Foi conselheiro universitário da UFCSPA, diretor de ligas académicas e vencedor do Prémio CAPES Talento Universitário (2023).
              </p>
            </div>

            <div className="border-t border-gray-100 pt-8 text-justify">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center text-left">
                <Heart className="mr-2 text-red-500" /> O Ecossistema SUSsego
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>CalculAí:</strong> Dezenas de calculadoras médicas e escores clínicos validados para suporte à decisão rápida.</li>
                <li><strong>LaudAí:</strong> Utilização de Inteligência Artificial para resumir exames complexos, facilitando o registo no processo clínico.</li>
                <li><strong>TemNoPosto?:</strong> Facilitador de acesso a informações sobre a disponibilidade de medicamentos gratuitos na rede pública.</li>
              </ul>
            </div>

            <div className="mt-8 bg-orange-50 border border-orange-100 p-6 rounded-2xl text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-2 flex justify-center items-center">
                <Coffee className="mr-2 text-orange-500" size={24} /> Apoie este projeto
              </h3>
              <p className="text-sm text-gray-600 mb-5">
                O SUSsego.com.br é <strong>100% gratuito</strong> e feito para ajudar a nossa comunidade médica. Se esta ferramenta tem poupado tempo nos seus turnos e estudos, considere apoiar a manutenção do site!
              </p>
              <button 
                onClick={() => onNavigate('doar')}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-full transition-colors text-sm shadow-sm"
              >
                Quero ajudar a manter o site no ar
              </button>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl text-center mt-8">
              <p className="text-sm italic text-gray-500">
                "A tecnologia não substitui o médico, mas o médico que usa tecnologia substituirá aquele que não a utiliza."
              </p>
            </div>
          </section>
        {/* CORREÇÃO AQUI: Agora fecha corretamente a tag motion.div */}
        </motion.div>
      </main>
    </div>
  );
}
