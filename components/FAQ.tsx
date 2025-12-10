import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItemProps } from '../types';

const faqData: FAQItemProps[] = [
  {
    question: "As receitas servem para quem não é 100% carnívoro?",
    answer: "Com certeza! As receitas são baseadas em proteína animal e gorduras saudáveis, perfeitas também para dietas Keto, Low Carb e Paleo."
  },
  {
    question: "Preciso ser um expert na cozinha?",
    answer: "Não. A proposta do guia é justamente a praticidade. A Air Fryer faz o trabalho pesado. Você só precisa temperar e programar o tempo."
  },
  {
    question: "Como recebo o acesso?",
    answer: "Assim que o pagamento for confirmado, você receberá um e-mail com o link para baixar o material imediatamente."
  },
  {
    question: "Tem garantia?",
    answer: "Sim, garantia incondicional de 7 dias. Se não gostar do conteúdo, devolvemos seu dinheiro sem perguntas."
  }
];

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-white pr-8">{question}</span>
        {isOpen ? <ChevronUp className="text-amber-500" /> : <ChevronDown className="text-gray-500" />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 pb-6' : 'max-h-0'}`}
      >
        <p className="text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <section className="py-20 bg-brand-black">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-display font-bold text-white text-center mb-12">
          Perguntas Frequentes
        </h2>
        <div className="bg-neutral-900 rounded-2xl p-6 md:p-10 border border-white/5">
          {faqData.map((item, idx) => (
            <FAQItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};