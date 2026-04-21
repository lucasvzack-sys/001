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

      <main className="flex-grow max-w-4xl mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12"
        >
          <div className="text-center mb-12">
            {/* Logo aumentado de h-24 para h-32 */}
            <img src="/susegado.png" alt="SUSsego Logo" className="h-32 mx-auto mb-6" />
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Sobre o SUSsego</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Tecnologia e Medicina unidas para transformar a saúde pública no Brasil.
            </p>
          </div>

          <section className="space-y-8 text-gray-700 leading-relaxed">
            <div className="text-justify">
              <h2 className="text-2xl font-bold text-medical-blue mb-4 flex items-center text-left">
                <ShieldCheck className="mr-2" /> Nossa Missão
              </h2>
              <p>
                O <strong>SUSsego.com.br</strong> nasceu no coração da saúde pública com um objetivo claro: simplificar a rotina clínica através da tecnologia. Acreditamos que ferramentas digitais bem desenhadas podem reduzir a carga cognitiva de médicos e estudantes, permitindo que o foco permaneça onde realmente importa: o cuidado com o paciente.
              </p>
            </div>

            <div className="py-4">
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 text-justify">
                <GraduationCap className="text-medical-blue mb-3" size={32} />
                <h3 className="font-bold text-gray-800 mb-2 text-left">Rigor Acadêmico</h3>
                <p className="text-sm">Desenvolvido por quem vive o dia a dia do internato médico, garantindo que as ferramentas atendam às demandas reais das enfermarias e emergências.</p>
              </div>
            </div>

            <div className="text-justify">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center text-left">
                <BookOpen className="mr-2 text-orange-500" /> O Criador
              </h2>
              <p>
                O projeto é idealizado e desenvolvido por <strong>Lucas V. Zacaria</strong>, graduando em Medicina pela <strong>Universidade Federal de Ciências da Saúde de Porto Alegre (UFCSPA)</strong>. Iniciou sua trajetória acadêmica em 2022 e une a vivência clínica com competências em desenvolvimento de software para criar soluções que resolvem gargalos reais do Sistema Único de Saúde (SUS).
              </p>
            </div>

            <div className="border-t border-gray-100 pt-8 text-justify">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center text-left">
                <Heart className="mr-2 text-red-500" /> O Ecossistema SUSsego
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>CalculAí:</strong> Dezenas de calculadoras médicas e escores clínicos validados para suporte à decisão rápida.</li>
                <li><strong>LaudAí:</strong> Utilização de Inteligência Artificial para resumir exames complexos, facilitando o registro em prontuário.</li>
                <li><strong>TemNoPosto?:</strong> Facilitador de acesso a informações sobre a disponibilidade de medicamentos gratuitos na rede pública.</li>
              </ul>
            </div>

            <div className="mt-8 bg-orange-50 border border-orange-100 p-6 rounded-2xl text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-2 flex justify-center items-center">
                <Coffee className="mr-2 text-orange-500" size={24} /> Apoie este projeto
              </h3>
              <p className="text-sm text-gray-600 mb-5">
                O SUSsego.com.br é <strong>100% gratuito</strong> e feito para ajudar nossa comunidade médica. Se esta ferramenta tem salvo tempo nos seus plantões e estudos, considere apoiar a manutenção do site!
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
        </motion.div>
      </main>
    </div>
  );
}
