import { useScrollReveal } from "@/hooks/useScrollReveal";
import comunidadeBadge from "@/assets/comunidade-badge.jpg";

const ComunidadeSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="comunidade" className="min-h-screen flex items-center justify-center py-20 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-12">
            <img 
              src={comunidadeBadge} 
              alt="Comunidade MED Badge" 
              className="w-full max-w-sm mx-auto"
            />
          </div>

          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-8 tracking-[0.15em] uppercase">
            Comunidade MED
          </h2>
          
          <div className="w-24 h-0.5 bg-accent mx-auto mb-12" />

          <p className="font-crimson text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            Faça parte de uma comunidade exclusiva de estudantes de medicina comprometidos com a excelência. 
            Compartilhe experiências, aprenda com seus pares e cresça junto com profissionais que compartilham 
            os mesmos valores e objetivos.
          </p>

          <p className="font-crimson text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Juntos, construímos não apenas médicos tecnicamente preparados, mas líderes em suas áreas, 
            prontos para fazer a diferença na medicina brasileira.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComunidadeSection;
