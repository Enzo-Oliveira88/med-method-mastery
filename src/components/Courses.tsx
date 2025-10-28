import { Button } from "@/components/ui/button";
import { BookOpen, Brain, Target, ExternalLink } from "lucide-react";

const courses = [
  {
    icon: BookOpen,
    title: "MÉTODO DE EXCELÊNCIA — BASE MÉDICA",
    description: "Aprenda a dominar os fundamentos da medicina com propósito e clareza. Um curso que une técnica, rotina e mentalidade científica para estudantes que desejam alcançar a excelência desde os primeiros períodos.",
    price: "R$ 497,00",
    link: "#" // Substitua pelo link da Kiwify
  },
  {
    icon: Brain,
    title: "PERFORMANCE MÉDICA AVANÇADA",
    description: "Curso voltado para alunos em fase clínica que buscam constância e foco. Estratégias práticas de estudo, gestão emocional e tomada de decisão baseadas em evidências.",
    price: "R$ 697,00",
    link: "#" // Substitua pelo link da Kiwify
  },
  {
    icon: Target,
    title: "MENTORIA MÉDICA — PROPÓSITO E CARREIRA",
    description: "Um programa de mentoria para quem quer alinhar vocação, propósito e alta performance. Ideal para estudantes e residentes que desejam construir uma carreira sólida e inspiradora.",
    price: "R$ 997,00",
    link: "#" // Substitua pelo link da Kiwify
  }
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 sm:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
            Nossos Cursos
          </h2>
          <p className="font-crimson text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
            Programas desenvolvidos para transformar seu modo de estudar, pensar e construir sua carreira médica com excelência e propósito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <div 
              key={course.title}
              className="bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <course.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="font-playfair text-xl font-bold text-card-foreground mb-4 leading-tight">
                  {course.title}
                </h3>
                
                <p className="font-crimson text-sm sm:text-base text-card-foreground/70 mb-6 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="border-t border-border pt-6 mt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-playfair text-2xl font-bold text-primary">
                      {course.price}
                    </span>
                  </div>
                  
                  <Button 
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-crimson text-base py-6 shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <a 
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Quero me inscrever
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-up">
          <p className="font-crimson text-base sm:text-lg text-muted-foreground italic">
            Investimento em sua formação é investimento em vidas que você vai transformar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Courses;
