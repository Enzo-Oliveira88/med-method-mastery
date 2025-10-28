import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    // Aqui você pode integrar com seu backend ou serviço de email
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-background">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
              Entre em Contato
            </h2>
            <p className="font-crimson text-lg sm:text-xl text-foreground/80">
              Faça parte da comunidade MED e comece sua jornada de transformação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="animate-fade-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-crimson text-sm font-medium text-foreground mb-2">
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
                    className="font-crimson"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-crimson text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    className="font-crimson"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-crimson text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Conte-nos sobre seus objetivos..."
                    rows={5}
                    className="font-crimson"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-crimson text-base py-6"
                >
                  Enviar mensagem
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="animate-fade-up">
              <div className="bg-card rounded-lg p-8 shadow-md h-full">
                <h3 className="font-playfair text-2xl font-bold text-card-foreground mb-6">
                  Conecte-se conosco
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-crimson text-base text-card-foreground/80">
                        contato@med.com.br
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <p className="font-crimson text-sm text-card-foreground/80 mb-4">
                      Siga-nos nas redes sociais:
                    </p>
                    <div className="flex gap-4">
                      <a 
                        href="#" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a 
                        href="#" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <p className="font-crimson text-base text-card-foreground/80 italic leading-relaxed">
                      "Excelência é constância guiada por propósito. E propósito é o que nos faz voar mais alto."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
