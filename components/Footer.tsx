import React from 'react';
import { WHATSAPP_URL } from '../constants';
import { MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-10 border-t border-neutral-900 text-center">
      <div className="container mx-auto px-4">
        
        <div className="w-12 h-12 mx-auto bg-amber-500 rounded-full flex items-center justify-center font-bold text-black border-2 border-white/20 mb-6">
            KC
        </div>
        
        <p className="text-gray-500 text-sm mb-6">
          Keto Carnívora © {new Date().getFullYear()} - Todos os direitos reservados.
        </p>
        
        <div className="flex justify-center gap-6 text-xs text-gray-600 uppercase tracking-widest font-semibold">
          <a href="#" className="hover:text-amber-500 transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Políticas de Privacidade</a>
          <a href={WHATSAPP_URL} className="hover:text-green-500 transition-colors flex items-center gap-1">
             <MessageCircle className="w-4 h-4" /> Suporte
          </a>
        </div>
        
        <p className="mt-8 text-[10px] text-gray-700 max-w-lg mx-auto leading-tight">
          Este produto não substitui o parecer médico profissional. Sempre consulte um médico para tratar de assuntos de saúde.
        </p>
      </div>
    </footer>
  );
};