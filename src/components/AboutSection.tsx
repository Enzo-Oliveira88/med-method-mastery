import { Award, Heart, TrendingUp, Users, BookOpen } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const values = [
  {
    icon: Award,
    title: "Excelência",
    description: "Padrão de qualidade em tudo que fazemos, buscando sempre o melhor."
  },
  {
    icon: BookOpen,
    title: "Ciência",
    description: "Fundamentamos o ensino em evidências e métodos comprovados."
  },
  {
    icon: TrendingUp,
    title: "Constância",
    description: "Resultados nascem da disciplina e da rotina diária."
  },
  {
    icon: Heart,
    title: "Ética",
    description: "Pautamos nossas ações pela transparência e autenticidade."
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Cultivamos apoio mútuo para crescimento compartilhado."
  }
];

const AboutSection = () => {
  const introRef = useScrollReveal();
  const valuesRef = useScrollReveal();
  const verseRef = useScrollReveal();
  
  return (
    <section id="about" className="py-20 sm:py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Intro */}
        <div ref={introRef} className="max-w-4xl mx-auto text-center mb-20 scroll-reveal">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
            Mais do que educação,<br className="hidden sm:block" /> um movimento de excelência
          </h2>
          <p className="font-crimson text-lg sm:text-xl text-foreground/80 leading-relaxed">
            A MED nasceu de uma inquietação — e de uma fé. Existe para formar mentes críticas, corações íntegros e carreiras sólidas, conectando o aprendizado à vocação, a técnica à ética e o desempenho à missão de impactar vidas.
          </p>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 ref={valuesRef} className="font-playfair text-3xl sm:text-4xl font-bold text-primary text-center mb-12 scroll-reveal">
            Nossos Valores
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-card p-6 rounded-lg shadow-md hover-lift group border border-border/50 text-center scroll-reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-burgundy/10 group-hover:bg-burgundy/20 transition-all duration-300 group-hover:scale-110">
                    <value.icon className="w-10 h-10 text-burgundy group-hover:text-primary transition-colors duration-300" />
                  </div>
                </div>
                <h4 className="font-playfair text-lg font-semibold text-card-foreground mb-2 group-hover:gradient-text transition-all duration-300">
                  {value.title}
                </h4>
                <p className="font-crimson text-sm text-card-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bible verse */}
        <div ref={verseRef} className="max-w-3xl mx-auto text-center bg-burgundy/5 border-l-4 border-burgundy p-8 rounded-r-lg scroll-reveal relative overflow-hidden group hover:bg-burgundy/10 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          <p className="font-crimson text-lg sm:text-xl italic text-foreground/80 leading-relaxed mb-4 relative z-10">
            "Mas os que esperam no Senhor renovarão as suas forças; subirão com asas como águias; correrão e não se cansarão; caminharão e não se fatigarão."
          </p>
          <p className="font-crimson text-sm sm:text-base font-semibold text-burgundy relative z-10">
            Isaías 40:31
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
