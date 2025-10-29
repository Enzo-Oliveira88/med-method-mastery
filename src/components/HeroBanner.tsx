import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-doctor.jpg";

const HeroBanner = () => {
  const scrollToCourses = () => {
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden mt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-darkerBrown/95 via-darkerBrown/80 to-transparent z-10" />
        <img 
          src={heroBanner} 
          alt="Hero Banner" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-offWhite mb-6 leading-tight uppercase tracking-wide">
            A transformação<br />
            que você<br />
            merece
          </h1>
          
          <p className="font-crimson text-xl sm:text-2xl text-offWhite/90 mb-8 leading-relaxed">
            Método de excelência e desempenho para estudantes de medicina que buscam resultados extraordinários.
          </p>
          
          <Button 
            onClick={scrollToCourses}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-darkerBrown font-crimson text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 uppercase font-bold tracking-wide"
          >
            Quero me inscrever agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
