import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-doctor.jpg";

const HeroBanner = () => {
  const scrollToCourses = () => {
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden mt-16">
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 z-[5] animate-gradient bg-gradient-to-br from-burgundy/40 via-darkerBrown/60 to-primary/40 opacity-90" />
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-darkerBrown/95 via-darkerBrown/80 to-transparent z-10" />
        <img 
          src={heroBanner} 
          alt="Hero Banner" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Decoration Elements */}
      <div className="absolute inset-0 z-[6] pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-offWhite mb-6 leading-tight uppercase tracking-wide animate-slide-up">
            A transformação<br />
            que você<br />
            merece
          </h1>
          
          <p className="font-crimson text-xl sm:text-2xl text-offWhite/90 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Método de excelência e desempenho para estudantes de medicina que buscam resultados extraordinários.
          </p>
          
          <Button 
            onClick={scrollToCourses}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-darkerBrown font-crimson text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 uppercase font-bold tracking-wide animate-glow animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            Quero me inscrever agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
