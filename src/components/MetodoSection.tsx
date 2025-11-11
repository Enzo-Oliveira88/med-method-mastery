import { useScrollReveal } from "@/hooks/useScrollReveal";
import medLogo from "@/assets/med-logo-main.jpg";

const MetodoSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="metodo" className="min-h-screen flex items-center justify-center py-20 bg-secondary/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-12">
            <img 
              src={medLogo} 
              alt="MED Logo" 
              className="w-full max-w-md mx-auto"
            />
          </div>

          <h2 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-light text-foreground mb-8 tracking-[0.15em] uppercase">
            MED
          </h2>
          
          <p className="font-crimson text-2xl sm:text-3xl md:text-4xl text-foreground tracking-[0.2em] uppercase mb-16">
            Método de Excelência e Desempenho
          </p>

          <div className="w-24 h-0.5 bg-accent mx-auto mb-12" />

          <p className="font-crimson text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Um programa exclusivo desenvolvido para estudantes de medicina que buscam não apenas conhecimento técnico, 
            mas excelência em performance, organização e desenvolvimento pessoal durante a jornada médica.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MetodoSection;
