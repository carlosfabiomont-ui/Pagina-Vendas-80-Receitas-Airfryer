
import React from 'react';
import { Button } from './Button';
import { CHECKOUT_URL, HEADLINE, SUBHEADLINE, HERO_MEAT_IMAGE } from '../constants';
import { ChevronRight, Star, Flame, Smartphone, Clock, Menu } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden bg-brand-black">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[0%] left-[0%] w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col items-center gap-12">
        
        {/* Top: Sales Copy */}
        <div className="space-y-8 text-center max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-amber-500/30 text-amber-400 text-sm font-bold tracking-wide shadow-[0_0_15px_rgba(245,158,11,0.2)] uppercase">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
            </span>
            App Keto Carnívora: 80+ Receitas Airfryer
          </div>

          <h1 className="text-4xl md:text-5xl xl:text-6xl font-display font-extrabold text-white leading-[1.1]">
            {HEADLINE.split('Air Fryer')[0]}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Air Fryer
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {SUBHEADLINE}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 pt-4 justify-center">
            <Button href={CHECKOUT_URL} pulse className="shadow-[0_0_40px_rgba(245,158,11,0.4)] w-full sm:w-auto text-lg px-10 py-5">
              QUERO ACESSO IMEDIATO
              <ChevronRight className="ml-2 w-6 h-6" />
            </Button>
            
            <div className="flex flex-col items-center text-xs text-gray-400 font-medium">
              <div className="flex gap-1 text-amber-500 mb-1.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span>Mais de 1.500 alunos satisfeitos</span>
            </div>
          </div>
        </div>

        {/* Bottom: Phone App Mockup (Smaller & Centered) */}
        <div className="relative mt-8 flex justify-center">
            <div className="relative w-[220px] md:w-[260px] h-[480px] bg-neutral-900 border-[8px] border-neutral-800 rounded-[2.5rem] shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
                {/* Status Bar Mockup */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-neutral-800 rounded-b-lg z-20"></div>
                
                {/* App Screen Content */}
                <div className="w-full h-full bg-black flex flex-col relative">
                    
                    {/* Header */}
                    <div className="pt-8 pb-3 px-4 flex justify-between items-center bg-gradient-to-b from-neutral-900 to-black z-10">
                        <Menu className="text-white w-5 h-5" />
                        <span className="text-amber-500 font-bold uppercase tracking-widest text-[9px] md:text-[10px] text-center leading-tight">
                          App Keto Carnívora<br/>80+ Receitas
                        </span>
                        <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-black font-bold text-[10px]">KC</div>
                    </div>

                    {/* Main Content (Scrollable Area) */}
                    <div className="flex-1 overflow-hidden relative bg-neutral-900">
                        {/* Featured Recipe - The Juicy Steak */}
                        <div className="relative h-[65%] w-full bg-neutral-800">
                            <img 
                                src={HERO_MEAT_IMAGE} 
                                alt="Bife Suculento" 
                                className="w-full h-full object-cover"
                                loading="eager"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                            
                            <div className="absolute bottom-4 left-4 right-4">
                                <span className="bg-amber-500 text-black text-[9px] font-bold px-2 py-0.5 rounded uppercase mb-1 inline-block">Receita do Dia</span>
                                <h2 className="text-white font-display font-bold text-lg leading-tight mb-1">Tomahawk na Air Fryer</h2>
                                <div className="flex items-center gap-3 text-gray-300 text-[10px]">
                                    <div className="flex items-center gap-1"><Clock className="w-3 h-3 text-amber-500" /> 20 min</div>
                                    <div className="flex items-center gap-1"><Flame className="w-3 h-3 text-amber-500" /> Crocante</div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Recipes List */}
                        <div className="p-3 space-y-2 bg-black h-full">
                            <div className="text-gray-500 text-[10px] font-bold uppercase mb-1">Populares</div>
                            {[1, 2].map((_, i) => (
                                <div key={i} className="flex gap-2 bg-neutral-900/80 p-2 rounded-lg border border-white/5 items-center">
                                    <div className={`w-10 h-10 rounded-md ${i===0 ? 'bg-red-900/40' : 'bg-amber-900/40'}`}></div>
                                    <div>
                                        <div className="w-24 h-2 bg-white/20 rounded mb-1.5"></div>
                                        <div className="w-12 h-1.5 bg-white/10 rounded"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Bottom Nav */}
                    <div className="h-12 bg-neutral-900 border-t border-white/5 flex justify-around items-center text-gray-500 shrink-0 z-20">
                        <div className="text-amber-500 flex flex-col items-center gap-0.5"><Flame className="w-4 h-4" /><span className="text-[8px]">Receitas</span></div>
                        <div className="flex flex-col items-center gap-0.5"><Star className="w-4 h-4" /><span className="text-[8px]">Favoritos</span></div>
                        <div className="flex flex-col items-center gap-0.5"><Smartphone className="w-4 h-4" /><span className="text-[8px]">Guia</span></div>
                    </div>
                </div>

                {/* Reflection */}
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-30"></div>
            </div>

            {/* Decorative background circle behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-amber-500/20 rounded-full -z-10 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] border border-dashed border-white/5 rounded-full -z-10"></div>
        </div>

      </div>
    </section>
  );
};
