import medEmblem from "@/assets/med-emblem.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <img 
            src={medEmblem} 
            alt="MED Emblem" 
            className="w-20 h-20 mb-6 opacity-80"
          />
          
          <h3 className="font-playfair text-2xl font-bold mb-2">
            MED
          </h3>
          <p className="font-crimson text-sm opacity-80 mb-6">
            Método de Excelência e Desempenho
          </p>
          
          <div className="border-t border-primary-foreground/20 pt-6 w-full max-w-2xl">
            <p className="font-crimson text-sm opacity-70">
              © {new Date().getFullYear()} MED. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
