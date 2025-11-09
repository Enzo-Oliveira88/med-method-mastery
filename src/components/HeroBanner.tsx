import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-doctor.jpg";
const HeroBanner = () => {
  const scrollToCourses = () => {
    document.getElementById("courses")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="hero" className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden mt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-darkerBrown/95 via-darkerBrown/80 to-transparent z-10 animate-gradient-shift" />
        <img src={heroBanner} alt="Hero Banner" className="w-full h-full object-cover object-[70%_center]" />
      </div>

      {/* Content */}
      <div className="container relative z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="font-playfair sm:text-5xl md:text-6xl lg:text-7xl text-offWhite mb-6 leading-tight uppercase tracking-wide animate-fade-right opacity-0 [animation-delay:200ms] font-extrabold text-left text-3xl">A TRANSFORMAÇÃO
QUE VOCÊ
MERECE<br />
            que você<br />
            merece
          </h1>
          
          <p className="font-crimson text-xl sm:text-2xl text-offWhite/90 mb-8 leading-relaxed animate-fade-up opacity-0 [animation-delay:600ms]">
            Método de excelência e desempenho para estudantes de medicina que buscam resultados extraordinários.
          </p>
          
          <div className="animate-scale-up opacity-0 [animation-delay:1000ms]">
            <Button onClick={scrollToCourses} size="lg" className="bg-accent hover:bg-accent/90 text-darkerBrown font-crimson text-lg px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 uppercase font-bold tracking-wide group relative overflow-hidden">
              <span className="relative z-10">Quero me inscrever agora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroBanner;