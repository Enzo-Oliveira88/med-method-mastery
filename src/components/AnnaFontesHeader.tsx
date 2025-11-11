import { useState } from "react";
import { Menu, X } from "lucide-react";

const AnnaFontesHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("inicio")}
            className="font-playfair text-2xl font-light tracking-[0.2em] uppercase hover:text-accent transition-colors"
          >
            AF
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <button
              onClick={() => scrollToSection("inicio")}
              className="font-crimson text-foreground hover:text-accent transition-colors tracking-widest uppercase text-sm"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("metodo")}
              className="font-crimson text-foreground hover:text-accent transition-colors tracking-widest uppercase text-sm"
            >
              Método
            </button>
            <button
              onClick={() => scrollToSection("comunidade")}
              className="font-crimson text-foreground hover:text-accent transition-colors tracking-widest uppercase text-sm"
            >
              Comunidade
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="font-crimson text-foreground hover:text-accent transition-colors tracking-widest uppercase text-sm"
            >
              Contato
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-accent transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-6">
              <button
                onClick={() => scrollToSection("inicio")}
                className="font-crimson text-foreground hover:text-accent transition-colors tracking-widest uppercase text-sm text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("metodo")}
                className="font-crimson text-foreground hover:text-accent transition-colors tracking-widest uppercase text-sm text-left"
              >
                Método
              </button>
              <button
                onClick={() => scrollToSection("comunidade")}
                className="font-crimson text-foreground hover:text-accent transition-colors tracking-widest uppercase text-sm text-left"
              >
                Comunidade
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="font-crimson text-foreground hover:text-accent transition-colors tracking-widest uppercase text-sm text-left"
              >
                Contato
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default AnnaFontesHeader;
