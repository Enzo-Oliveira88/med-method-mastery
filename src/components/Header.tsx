import { useState } from "react";
import { Home, Users, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import medLogo from "@/assets/med-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-darkerBrown shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img src={medLogo} alt="MED Logo" className="h-10 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-2 text-offWhite hover:text-primary transition-colors font-crimson"
            >
              <Home className="w-5 h-5" />
              Início
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-offWhite hover:text-primary transition-colors font-crimson"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("courses")}
              className="text-offWhite hover:text-primary transition-colors font-crimson"
            >
              Cursos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-2 text-offWhite hover:text-primary transition-colors font-crimson"
            >
              <Users className="w-5 h-5" />
              Comunidade
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-offWhite hover:text-primary transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-offWhite/20">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="flex items-center gap-2 text-offWhite hover:text-primary transition-colors font-crimson py-2"
              >
                <Home className="w-5 h-5" />
                Início
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-offWhite hover:text-primary transition-colors font-crimson py-2 text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("courses")}
                className="text-offWhite hover:text-primary transition-colors font-crimson py-2 text-left"
              >
                Cursos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center gap-2 text-offWhite hover:text-primary transition-colors font-crimson py-2"
              >
                <Users className="w-5 h-5" />
                Comunidade
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
