import { Target, Brain, Trophy, Users2, BookOpen, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  {
    icon: Target,
    title: "Foco e Direção",
    description: "Método estruturado para eliminar distrações e manter o foco no que realmente importa."
  },
  {
    icon: Brain,
    title: "Técnicas Comprovadas",
    description: "Estratégias de aprendizado baseadas em neurociência e validadas por evidências."
  },
  {
    icon: Trophy,
    title: "Resultados Reais",
    description: "Alunos aprovados em residências de ponta e com desempenho acima da média."
  },
  {
    icon: Users2,
    title: "Comunidade Exclusiva",
    description: "Rede de apoio com estudantes e profissionais comprometidos com a excelência."
  },
  {
    icon: BookOpen,
    title: "Conteúdo Atualizado",
    description: "Material sempre revisado e alinhado com as melhores práticas do ensino médico."
  },
  {
    icon: Sparkles,
    title: "Transformação Pessoal",
    description: "Desenvolvimento não só acadêmico, mas também de mentalidade e propósito."
  }
];

const stats = [
  { number: "500+", label: "Alunos Transformados" },
  { number: "95%", label: "Taxa de Satisfação" },
  { number: "4.9", label: "Avaliação Média" },
  { number: "3", label: "Programas Exclusivos" }
];

const BenefitsSection = () => {
  const statsRef = useScrollReveal();
  const benefitsRef = useScrollReveal();
  
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats */}
        <div ref={statsRef} className="mb-20 scroll-reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center scroll-reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-card border border-border/50 rounded-lg p-6 hover-lift">
                  <p className="font-playfair text-4xl sm:text-5xl font-bold gradient-text mb-2">
                    {stat.number}
                  </p>
                  <p className="font-crimson text-sm sm:text-base text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div ref={benefitsRef} className="scroll-reveal">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
              Por que escolher a MED?
            </h2>
            <p className="font-crimson text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
              Muito mais do que cursos online, uma metodologia completa para sua excelência médica.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="bg-card border border-border/50 rounded-lg p-6 hover-lift group scroll-reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-full bg-burgundy/10 flex items-center justify-center group-hover:bg-burgundy/20 transition-all duration-300 group-hover:scale-110">
                    <benefit.icon className="w-7 h-7 text-burgundy group-hover:text-primary transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="font-playfair text-xl font-semibold text-card-foreground mb-3 group-hover:gradient-text transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="font-crimson text-base text-card-foreground/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;