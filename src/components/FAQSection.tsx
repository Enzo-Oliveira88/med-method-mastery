import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "Como funciona o acesso aos cursos?",
    answer: "Após a compra, você recebe acesso imediato e vitalício ao conteúdo completo do curso. Tudo é disponibilizado em uma plataforma online intuitiva, onde você pode estudar no seu próprio ritmo."
  },
  {
    question: "Os cursos têm certificado?",
    answer: "Sim! Ao concluir o curso, você recebe um certificado digital de conclusão que comprova seu aprendizado e dedicação ao método MED."
  },
  {
    question: "Qual a diferença entre os três cursos?",
    answer: "O 'Base Médica' é ideal para estudantes nos primeiros períodos. O 'Performance Avançada' é voltado para a fase clínica. Já a 'Mentoria' é um acompanhamento personalizado para quem quer alinhar propósito e alta performance na carreira."
  },
  {
    question: "Posso parcelar o pagamento?",
    answer: "Sim! Oferecemos opções de parcelamento em até 12x no cartão de crédito, facilitando seu investimento na sua formação médica."
  },
  {
    question: "Quanto tempo tenho para acessar o conteúdo?",
    answer: "O acesso aos cursos é vitalício! Você pode assistir e revisar o conteúdo quantas vezes quiser, sem prazo de validade."
  },
  {
    question: "Há suporte durante o curso?",
    answer: "Com certeza! Você terá acesso à nossa comunidade exclusiva de alunos e poderá tirar dúvidas diretamente com nossa equipe através de canais específicos de suporte."
  },
  {
    question: "Os cursos são reconhecidos?",
    answer: "Nossos cursos são programas de desenvolvimento pessoal e profissional. Embora não sejam regulamentados pelo MEC, são validados pela experiência real de centenas de alunos que transformaram sua jornada médica."
  },
  {
    question: "Posso fazer mais de um curso?",
    answer: "Sim! Muitos alunos fazem mais de um curso conforme avançam na graduação. Oferecemos condições especiais para quem deseja adquirir mais de um programa."
  }
];

const FAQSection = () => {
  const headerRef = useScrollReveal();
  
  return (
    <section id="faq" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div ref={headerRef} className="text-center mb-16 scroll-reveal">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
              Perguntas Frequentes
            </h2>
            <p className="font-crimson text-lg sm:text-xl text-foreground/80">
              Tire suas dúvidas sobre os cursos e a metodologia MED.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-lg px-6 scroll-reveal hover-lift"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <AccordionTrigger className="font-crimson text-lg text-card-foreground hover:text-primary transition-colors text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-crimson text-base text-card-foreground/70 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA at bottom of FAQ */}
          <div className="text-center mt-12 scroll-reveal">
            <p className="font-crimson text-lg text-muted-foreground mb-4">
              Ainda tem dúvidas? Entre em contato conosco.
            </p>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-crimson text-burgundy hover:text-primary transition-colors underline"
            >
              Falar com nossa equipe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;