import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-darkerBrown">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-offWhite mb-6">
              Faça Parte da Comunidade MED
            </h2>
            <p className="font-crimson text-lg sm:text-xl text-offWhite/80">
              Entre em contato e comece sua jornada de transformação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="animate-fade-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-crimson text-sm font-medium text-offWhite mb-2">
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
                    className="font-crimson bg-offWhite/10 border-offWhite/20 text-offWhite placeholder:text-offWhite/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-crimson text-sm font-medium text-offWhite mb-2">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@email.com"
                    className="font-crimson bg-offWhite/10 border-offWhite/20 text-offWhite placeholder:text-offWhite/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-crimson text-sm font-medium text-offWhite mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Conte-nos sobre seus objetivos..."
                    rows={5}
                    className="font-crimson bg-offWhite/10 border-offWhite/20 text-offWhite placeholder:text-offWhite/50"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-burgundy hover:bg-burgundy/90 text-offWhite font-crimson text-base py-6"
                >
                  Enviar mensagem
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="animate-fade-up">
              <div className="bg-offWhite/5 backdrop-blur-sm rounded-lg p-8 border border-offWhite/10 h-full">
                <h3 className="font-playfair text-2xl font-bold text-offWhite mb-6">
                  Conecte-se conosco
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-crimson text-base text-offWhite/80">
                        contato@med.com.br
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-offWhite/10 pt-6">
                    <p className="font-crimson text-sm text-offWhite/80 mb-4">
                      Siga-nos nas redes sociais:
                    </p>
                    <div className="flex gap-4">
                      <a 
                        href="#" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-offWhite/10 flex items-center justify-center hover:bg-burgundy transition-colors duration-300 text-offWhite"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a 
                        href="#" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-offWhite/10 flex items-center justify-center hover:bg-burgundy transition-colors duration-300 text-offWhite"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-offWhite/10 pt-6">
                    <p className="font-crimson text-base text-offWhite/80 italic leading-relaxed">
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

export default ContactSection;
