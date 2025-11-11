const AnnaFontesHero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-playfair text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-foreground mb-6 tracking-[0.2em] uppercase animate-fade-in">
            Anna Fontes
          </h1>
          
          <p className="font-crimson text-lg sm:text-xl md:text-2xl text-muted-foreground tracking-[0.3em] uppercase mb-16 animate-fade-in opacity-0 [animation-delay:400ms]">
            Residente de Cirurgia Geral - CRM 000000
          </p>

          <div className="w-32 h-0.5 bg-accent mx-auto mb-16 animate-scale-in opacity-0 [animation-delay:800ms]" />

          <button
            onClick={() => scrollToSection("metodo")}
            className="font-crimson text-foreground hover:text-accent transition-colors duration-300 text-lg tracking-widest uppercase animate-fade-in opacity-0 [animation-delay:1200ms]"
          >
            Descubra o Método
          </button>
        </div>
      </div>
    </section>
  );
};

export default AnnaFontesHero;
