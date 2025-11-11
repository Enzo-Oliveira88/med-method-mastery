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
      <div className="container relative z-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[600px] md:min-h-[700px]">
        <div className="text-center max-w-4xl">
          <h1 className="font-playfair text-7xl sm:text-8xl md:text-9xl font-normal text-offWhite mb-4 leading-tight tracking-[0.2em] animate-fade-down opacity-0 [animation-delay:200ms]">
            ANNA<br />
            FONTES
          </h1>
          
          <p className="font-playfair text-sm sm:text-base text-offWhite/90 mb-12 tracking-[0.3em] animate-fade-up opacity-0 [animation-delay:600ms]">
            RESIDENTE DE CIRURGIA GERAL - CRM 000000
          </p>
          
          <div className="w-24 h-[2px] bg-accent mx-auto mb-12 animate-scale-in opacity-0 [animation-delay:800ms]" />
          
          <div className="animate-fade-up opacity-0 [animation-delay:1000ms]">
            <Button onClick={scrollToCourses} variant="ghost" className="font-playfair text-sm tracking-[0.3em] text-offWhite hover:text-accent transition-colors">
              DESCUBRA O MÉTODO
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroBanner;