
import React from 'react';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { CHECKOUT_URL, PRICE_DISCOUNT, PRICE_ORIGINAL } from '../constants';

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-neutral-900 to-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="max-w-4xl mx-auto bg-neutral-900 border border-amber-500/30 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.15)]">
          <div className="grid md:grid-cols-2">
            
            {/* Left Side - Value Stack */}
            <div className="p-8 md:p-12 bg-neutral-800/50">
              <h3 className="text-2xl font-bold text-white mb-6">O Que Você Recebe:</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "App Keto Carnívora: 80+ Receitas Airfryer",
                  "Guia de Temperos Carnívoros",
                  "Web App: Não ocupa memória do celular",
                  "Lista de Compras Semanal",
                  "Acesso Vitalício ao Material"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-amber-500" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center gap-3 p-4 bg-black/20 rounded-lg border border-white/5">
                <ShieldCheck className="w-10 h-10 text-green-500" />
                <div>
                  <p className="font-bold text-white text-sm">Garantia Blindada de 7 Dias</p>
                  <p className="text-xs text-gray-400">Não gostou? Devolvemos 100% do valor.</p>
                </div>
              </div>
            </div>

            {/* Right Side - Price & CTA */}
            <div className="p-8 md:p-12 bg-gradient-to-br from-amber-500 to-amber-700 flex flex-col justify-center items-center text-center text-black">
              <span className="inline-block px-4 py-1 bg-black/20 rounded-full text-white text-xs font-bold uppercase tracking-wider mb-4">
                Oferta por Tempo Limitado
              </span>
              
              <div className="mb-2 text-white/70 line-through text-xl">{PRICE_ORIGINAL}</div>
              <div className="text-5xl md:text-6xl font-black text-white mb-2">{PRICE_DISCOUNT}</div>
              <div className="text-white/90 font-medium mb-8">Pagamento único • Acesso imediato</div>

              <Button 
                href={CHECKOUT_URL} 
                variant="secondary" 
                fullWidth 
                className="mb-4 shadow-xl hover:shadow-2xl font-black text-amber-700"
              >
                COMPRAR AGORA
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <div className="flex items-center justify-center gap-2 mt-4 opacity-70">
                {/* Mockup Payment Icons - Simple Circles or Text */}
                <span className="text-xs font-bold text-white">Pagamento Seguro: PIX e Cartão</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
