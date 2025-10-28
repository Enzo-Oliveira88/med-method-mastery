import { Award, Heart, TrendingUp, Users, BookOpen } from "lucide-react";
import aboutBg from "@/assets/about-background.jpg";

const values = [
  {
    icon: Award,
    title: "Excelência",
    description: "Padrão de qualidade em tudo que fazemos, buscando sempre o melhor em conhecimento e prática."
  },
  {
    icon: BookOpen,
    title: "Ciência",
    description: "Fundamentamos o ensino em evidências e métodos comprovados pela comunidade científica."
  },
  {
    icon: TrendingUp,
    title: "Constância",
    description: "Resultados nascem da disciplina e da rotina. A chave do progresso está na persistência."
  },
  {
    icon: Heart,
    title: "Ética",
    description: "Pautamos nossas ações pela transparência, autenticidade e integridade profissional."
  },
  {
    icon: Users,
    title: "Comunidade",
    description: "Cultivamos apoio mútuo, onde cada estudante cresce junto aos demais em jornada compartilhada."
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={aboutBg} 
          alt="" 
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-up">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
            Mais do que uma empresa,<br className="hidden sm:block" /> a MED é um movimento de excelência
          </h2>
          <p className="font-crimson text-lg sm:text-xl text-foreground/80 leading-relaxed mb-8">
            A MED nasceu de uma inquietação — e de uma fé. Inquietação diante de uma realidade onde estudantes de medicina, mesmo cheios de sonhos, se veem presos em um ciclo de superficialidade, estudando sem direção, acumulando tarefas sem sentido e medindo sucesso apenas por notas ou títulos.
          </p>
          <p className="font-crimson text-lg sm:text-xl text-foreground/80 leading-relaxed">
            Ela existe para formar mentes críticas, corações íntegros e carreiras sólidas, conectando o aprendizado à vocação, a técnica à ética e o desempenho à missão de impactar vidas.
          </p>
        </div>

        {/* Mission & Purpose */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <div className="bg-card p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-up">
            <h3 className="font-playfair text-2xl font-bold text-primary mb-4">Propósito</h3>
            <p className="font-crimson text-base sm:text-lg text-card-foreground/80 leading-relaxed">
              Transformar o modo como os estudantes de medicina aprendem, pensam e se preparam para o futuro — unindo ciência, propósito e constância para formar médicos que se destacam pela excelência e pela integridade.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-up">
            <h3 className="font-playfair text-2xl font-bold text-primary mb-4">Missão</h3>
            <p className="font-crimson text-base sm:text-lg text-card-foreground/80 leading-relaxed">
              Ser reconhecida como a principal referência em educação médica de alta performance no Brasil, inspirando uma geração de médicos capazes de unir competência técnica, mentalidade científica e propósito espiritual.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="font-playfair text-3xl sm:text-4xl font-bold text-primary text-center mb-12 animate-fade-up">
            Nossos Valores
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <value.icon className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-playfair text-xl font-semibold text-card-foreground mb-2">
                  {value.title}
                </h4>
                <p className="font-crimson text-sm sm:text-base text-card-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bible verse */}
        <div className="max-w-3xl mx-auto text-center bg-primary/5 border-l-4 border-primary p-8 rounded-r-lg animate-fade-up">
          <p className="font-crimson text-lg sm:text-xl italic text-foreground/80 leading-relaxed mb-4">
            "Mas os que esperam no Senhor renovarão as suas forças; subirão com asas como águias; correrão e não se cansarão; caminharão e não se fatigarão."
          </p>
          <p className="font-crimson text-sm sm:text-base font-semibold text-primary">
            Isaías 40:31
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
