import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TestimonialProps } from '../types';

const testimonials: TestimonialProps[] = [
  {
    name: "Carlos Mendes",
    role: "Praticante Carnívora (6 meses)",
    stars: 5,
    content: "Eu estava quase desistindo da dieta porque não aguentava mais a fumaça na cozinha fazendo bife. Esse ebook salvou minha rotina. O torresmo fica perfeito!",
    image: "https://picsum.photos/id/1005/100/100"
  },
  {
    name: "Fernanda Lima",
    role: "Keto Flex",
    stars: 5,
    content: "As receitas são muito práticas. Chego do trabalho, coloco na Air Fryer e vou tomar banho. Quando volto, o jantar está pronto e delicioso. Recomendo!",
    image: "https://picsum.photos/id/338/100/100"
  },
  {
    name: "Roberto Silva",
    role: "Perdeu 15kg",
    stars: 5,
    content: "Não sabia que dava pra fazer tanta coisa na Air Fryer sendo carnívoro. A receita de costelinha é sensacional. Vale cada centavo.",
    image: "https://picsum.photos/id/203/100/100"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold tracking-widest text-sm uppercase mb-2 block">Depoimentos Reais</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold">
            Quem Comprou, <span className="text-amber-500 underline decoration-amber-500/30 underline-offset-4">Aprovou</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 relative hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-neutral-800 fill-current" />
              
              <div className="flex gap-1 text-amber-500 mb-6">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic leading-relaxed">"{t.content}"</p>

              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-amber-500/50 grayscale" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-amber-500/80 uppercase tracking-wider font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};