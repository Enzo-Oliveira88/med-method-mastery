import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContatoSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ nome: "", email: "", mensagem: "" });
  };

  return (
    <section id="contato" className="min-h-screen flex items-center justify-center py-20 bg-secondary/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-8 tracking-[0.15em] uppercase text-center">
            Contato
          </h2>
          
          <div className="w-24 h-0.5 bg-accent mx-auto mb-12" />

          <p className="font-crimson text-lg sm:text-xl text-muted-foreground leading-relaxed text-center mb-12">
            Interessado em fazer parte do Método de Excelência e Desempenho? Entre em contato conosco.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                placeholder="Nome completo"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                required
                className="font-crimson text-lg bg-background border-border"
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="font-crimson text-lg bg-background border-border"
              />
            </div>

            <div>
              <Textarea
                placeholder="Mensagem"
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                required
                rows={6}
                className="font-crimson text-lg bg-background border-border resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full font-crimson text-lg tracking-widest uppercase bg-primary hover:bg-primary/90 text-primary-foreground py-6"
            >
              Enviar mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
