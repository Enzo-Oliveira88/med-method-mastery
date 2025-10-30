import { Star } from "lucide-react";

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
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-darkerBrown">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
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
                className="animate-fade-up bg-offWhite/5 backdrop-blur-sm rounded-lg p-6 border border-offWhite/10 hover:border-accent/30 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <p className="font-crimson text-base text-offWhite/90 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-offWhite/10 pt-4">
                  <p className="font-playfair text-lg font-semibold text-offWhite">
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
