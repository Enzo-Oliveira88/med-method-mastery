import medEmblem from "@/assets/med-emblem.png";

const FooterSection = () => {
  return (
    <footer className="bg-darkerBrown border-t border-offWhite/10 py-12">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <img 
            src={medEmblem} 
            alt="MED Emblem" 
            className="w-20 h-20 mb-6 opacity-80"
          />
          
          <h3 className="font-playfair text-2xl font-bold text-offWhite mb-2">
            MED
          </h3>
          <p className="font-crimson text-sm text-offWhite/70 mb-6">
            Método de Excelência e Desempenho
          </p>
          
          <div className="border-t border-offWhite/20 pt-6 w-full max-w-2xl">
            <p className="font-crimson text-sm text-offWhite/60">
              © {new Date().getFullYear()} MED. Todos os direitos reservados 2025.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
