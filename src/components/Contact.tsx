import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Mail, MapPin } from 'lucide-react';

export default function Contact({ onNavigate }: any) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentView="contact" onNavigate={onNavigate} />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-8">Contato</h1>
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
          <p className="text-gray-600">
            Tem alguma dúvida, sugestão, encontrou algum erro ou deseja propor uma parceria institucional? Entre em contato de forma direta.
          </p>
          
          <div className="flex items-center text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
            <Mail className="text-orange-600 mr-4" />
            <span>lucasvzack@gmail.com</span> {/* Substitua pelo seu email real */}
          </div>
          
          <div className="flex items-center text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
            <MapPin className="text-orange-600 mr-4" />
            <span>Porto Alegre, RS - Brasil</span>
          </div>
        </div>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
