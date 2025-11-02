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
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal({ threshold: 0.1 });
  const { ref: verseRef, isVisible: verseVisible } = useScrollReveal({ threshold: 0.2 });
  
  return (
    <section id="about" className="py-20 sm:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div ref={sectionRef} className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 ${sectionVisible ? 'animate-fade-up opacity-100' : 'opacity-0'}`}>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
            Mais do que educação,<br className="hidden sm:block" /> um movimento de excelência
          </h2>
          <p className="font-crimson text-lg sm:text-xl text-foreground/80 leading-relaxed">
            A MED nasceu de uma inquietação — e de uma fé. Existe para formar mentes críticas, corações íntegros e carreiras sólidas, conectando o aprendizado à vocação, a técnica à ética e o desempenho à missão de impactar vidas.
          </p>
        </div>

        {/* Values */}
        <div ref={valuesRef} className="mb-20">
          <h3 className={`font-playfair text-3xl sm:text-4xl font-bold text-primary text-center mb-12 transition-all duration-1000 ${valuesVisible ? 'animate-fade-down opacity-100' : 'opacity-0'}`}>
            Nossos Valores
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className={`bg-card p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 text-center group ${
                  valuesVisible 
                    ? 'animate-scale-up opacity-100' 
                    : 'opacity-0'
                }`}
                style={{ animationDelay: valuesVisible ? `${index * 100}ms` : '0ms' }}
              >
                <value.icon className="w-10 h-10 text-burgundy mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-playfair text-lg font-semibold text-card-foreground mb-2">
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
        <div ref={verseRef} className={`max-w-3xl mx-auto text-center bg-burgundy/5 border-l-4 border-burgundy p-8 rounded-r-lg transition-all duration-1000 ${verseVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0'}`}>
          <p className="font-crimson text-lg sm:text-xl italic text-foreground/80 leading-relaxed mb-4">
            "Mas os que esperam no Senhor renovarão as suas forças; subirão com asas como águias; correrão e não se cansarão; caminharão e não se fatigarão."
          </p>
          <p className="font-crimson text-sm sm:text-base font-semibold text-burgundy">
            Isaías 40:31
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
