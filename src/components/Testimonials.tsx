import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Estudante do 4º período",
    quote: "A MED transformou completamente minha forma de estudar. Aprendi a unir técnica e propósito, e isso fez toda diferença na minha jornada."
  },
  {
    name: "João Santos",
    role: "Residente em Cirurgia",
    quote: "O método me ajudou não só a passar nas provas, mas a entender o real significado de ser médico. Hoje me sinto preparado e confiante."
  },
  {
    name: "Ana Paula",
    role: "Estudante do 6º período",
    quote: "Encontrei na MED o equilíbrio que precisava entre desempenho acadêmico e bem-estar. É mais que um curso, é uma mentoria de vida."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-secondary/10">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
            Depoimentos
          </h2>
          <p className="font-crimson text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
            Histórias de transformação e conquistas de estudantes que escolheram a excelência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              
              <p className="font-crimson text-base sm:text-lg text-card-foreground/80 italic mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-playfair font-semibold text-card-foreground">
                  {testimonial.name}
                </p>
                <p className="font-crimson text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
