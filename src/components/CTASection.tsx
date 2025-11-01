import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const scrollToCourses = () => {
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-burgundy via-darkerBrown to-primary relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-offWhite/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-offWhite mb-6 leading-tight animate-slide-up">
            Comece sua transformação hoje
          </h2>
          
          <p className="font-crimson text-lg sm:text-xl md:text-2xl text-offWhite/90 mb-8 leading-relaxed max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Junte-se a centenas de estudantes que já estão construindo uma carreira médica de excelência com propósito e método.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={scrollToCourses}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-darkerBrown font-crimson text-lg px-12 py-7 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 uppercase font-bold tracking-wide animate-glow group"
            >
              Ver cursos disponíveis
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            
            <Button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-offWhite text-offWhite hover:bg-offWhite hover:text-darkerBrown font-crimson text-lg px-12 py-7 shadow-xl transition-all duration-500 hover:scale-105 uppercase font-bold tracking-wide"
            >
              Falar com a equipe
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 pt-12 border-t border-offWhite/20 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="font-crimson text-base text-offWhite/80 italic">
              "Mas os que esperam no Senhor renovarão as suas forças; subirão com asas como águias"
            </p>
            <p className="font-crimson text-sm text-offWhite/60 mt-2">
              Isaías 40:31
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;