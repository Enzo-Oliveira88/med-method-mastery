const AnnaFontesFooter = () => {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h3 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-light text-foreground mb-4 tracking-[0.2em] uppercase">
            Anna Fontes
          </h3>
          
          <div className="w-24 h-0.5 bg-accent mx-auto my-8" />
          
          <p className="font-crimson text-lg text-muted-foreground tracking-[0.2em] uppercase mb-2">
            Comunidade Médica Anna Fontes
          </p>
          
          <p className="font-crimson text-sm text-muted-foreground tracking-widest uppercase mb-8">
            Método de Excelência e Desempenho
          </p>
          
          <div className="border-t border-border pt-8 w-full max-w-2xl">
            <p className="font-crimson text-sm text-muted-foreground">
              © {new Date().getFullYear()} Anna Fontes. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AnnaFontesFooter;
