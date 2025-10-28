import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import eagleHero from "@/assets/eagle-hero.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-secondary/90 to-primary/95 z-10" />
        <img 
          src={eagleHero} 
          alt="Águia símbolo da MED" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center animate-float">
              <img 
                src={eagleHero} 
                alt="Símbolo MED" 
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
          
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            A MED transforma o modo como<br className="hidden sm:block" /> o estudante de medicina<br className="hidden sm:block" /> aprende, pensa e se prepara<br className="hidden sm:block" /> para o futuro.
          </h1>
          
          <p className="font-crimson text-lg sm:text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto italic">
            Método de excelência e desempenho — mente, alma e propósito em equilíbrio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToAbout}
              size="lg"
              variant="hero"
              className="font-crimson text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
            >
              Conheça o Método
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Rolar para baixo"
        >
          <ChevronDown className="w-8 h-8 text-primary-foreground" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
