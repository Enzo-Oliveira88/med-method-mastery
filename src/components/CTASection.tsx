import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const scrollToCourses = () => {
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 sm:py-32 bg-darkerBrown relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-darkerBrown via-darkerBrown/95 to-darkerBrown" />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-offWhite mb-6">
            Comece sua transformação hoje
          </h2>
          
          <p className="font-crimson text-lg sm:text-xl text-offWhite/80 mb-12 leading-relaxed">
            Junte-se a centenas de estudantes que já estão construindo uma carreira médica de excelência com propósito e método.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={scrollToCourses}
              size="lg"
              className="bg-offWhite/90 hover:bg-offWhite text-darkerBrown font-crimson text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 uppercase font-semibold tracking-wide group"
            >
              Ver cursos disponíveis
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-2 border-offWhite/30 bg-transparent hover:bg-offWhite/10 text-offWhite font-crimson text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 uppercase font-semibold tracking-wide"
            >
              Falar com a equipe
            </Button>
          </div>

          <div className="border-t border-offWhite/20 pt-8">
            <p className="font-crimson text-base sm:text-lg text-offWhite/70 italic leading-relaxed">
              "Mas os que esperam no Senhor renovarão as suas forças; subirão com asas como águias"
            </p>
            <p className="font-crimson text-sm text-offWhite/50 mt-2">
              Isaías 40:31
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
