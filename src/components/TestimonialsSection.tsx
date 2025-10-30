import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    name: "Maria Silva",
    course: "Método de Excelência — Base Médica",
    text: "O curso transformou minha forma de estudar. Consegui organizar minha rotina e meus resultados melhoraram muito. Recomendo para todos que querem começar com o pé direito na medicina!",
    rating: 5
  },
  {
    name: "João Pedro",
    course: "Performance Médica Avançada",
    text: "Estava perdido na fase clínica, mas esse curso me deu clareza e método. As estratégias práticas de estudo fizeram toda a diferença. Vale cada centavo!",
    rating: 5
  },
  {
    name: "Ana Beatriz",
    course: "Mentoria Médica — Propósito e Carreira",
    text: "A mentoria me ajudou a encontrar meu propósito e a construir uma visão clara da minha carreira. Mais do que técnicas, aprendi a ter uma mentalidade de excelência.",
    rating: 5
  },
  {
    name: "Carlos Eduardo",
    course: "Método de Excelência — Base Médica",
    text: "Nunca imaginei que estudar medicina poderia ser tão organizado e eficiente. O método é completo e muito bem estruturado. Indico para qualquer estudante!",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const headerRef = useScrollReveal();
  
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-darkerBrown relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div ref={headerRef} className="text-center mb-16 scroll-reveal">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-offWhite mb-6">
              Depoimentos de Alunos
            </h2>
            <p className="font-crimson text-lg sm:text-xl text-offWhite/80">
              Veja o que nossos alunos têm a dizer sobre os cursos MED.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="scroll-reveal glass-effect rounded-lg p-6 border border-offWhite/10 hover:border-accent/40 transition-all duration-500 hover-lift group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
                  ))}
                </div>
                
                <p className="font-crimson text-base text-offWhite/90 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-offWhite/10 pt-4">
                  <p className="font-playfair text-lg font-semibold text-offWhite group-hover:gradient-text transition-all duration-300">
                    {testimonial.name}
                  </p>
                  <p className="font-crimson text-sm text-offWhite/60 mt-1">
                    {testimonial.course}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
