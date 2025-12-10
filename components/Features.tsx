
import React from 'react';
import { Flame, Clock, Heart, Smartphone, CheckCircle2 } from 'lucide-react';
import { FeatureProps } from '../types';

const features: FeatureProps[] = [
  {
    icon: <Clock className="w-8 h-8 text-amber-500" />,
    title: "Economize Tempo",
    description: "Esqueça horas na cozinha. Receitas prontas em 15-20 minutos utilizando a velocidade da Air Fryer."
  },
  {
    icon: <Flame className="w-8 h-8 text-amber-500" />,
    title: "Crocância Sem Óleo",
    description: "Tenha aquela textura de fritura deliciosa usando a própria gordura da carne ou manteiga ghee."
  },
  {
    icon: <Heart className="w-8 h-8 text-amber-500" />,
    title: "100% Saudável",
    description: "Ingredientes selecionados para manter você em cetose profunda e livre de inflamações."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-amber-500" />,
    title: "Web App Leve",
    description: "Não precisa baixar nada! Funciona direto no navegador e não ocupa a memória do seu celular."
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-900 border-t border-white/5 relative">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            A Dieta Carnívora Não Precisa Ser <span className="text-amber-500">Monótona</span>
          </h2>
          <p className="text-gray-400 text-lg">
            A maioria das pessoas desiste porque enjoa de comer apenas bife grelhado na frigideira todo dia. O segredo da consistência é a variedade e a textura.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-neutral-800/50 p-6 rounded-2xl border border-white/5 hover:border-amber-500/30 transition-colors duration-300 group">
              <div className="bg-neutral-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-900/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-neutral-800 to-neutral-900 p-8 md:p-12 rounded-3xl border border-amber-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                O Que Você Vai Encontrar No Guia?
              </h3>
              <ul className="space-y-4">
                {[
                  "Torresmo perfeito na Air Fryer",
                  "Almôndegas Carnívoras Recheadas",
                  "Costelinha de Porco Barbecue (Zero Açúcar)",
                  "Iscas de Fígado que parecem petisco",
                  "Chips de Provolone Crocantes",
                  "Frango a Passarinho Dourado"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px] bg-neutral-950 rounded-xl overflow-hidden shadow-lg border border-white/10">
               {/* Imagem de Carne Assada - Costelas - 100% Carne */}
               <img 
                 src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" 
                 alt="Costela Carnívora" 
                 className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" 
                 loading="eager"
               />
               <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                  <span className="text-amber-400 font-bold text-sm uppercase tracking-wider">Receita #01: Torresmo & Costela</span>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
