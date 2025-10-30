import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  link: string;
}

const CourseCard = ({ image, title, description, price, link }: CourseCardProps) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover-lift group border border-border/50">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkerBrown/90 via-darkerBrown/50 to-transparent group-hover:from-burgundy/90 group-hover:via-burgundy/50 transition-all duration-500" />
        
        {/* Glowing Border Effect on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/20 to-primary/20" />
      </div>
      
      <div className="p-6 relative">
        {/* Decorative Element */}
        <div className="absolute top-0 left-6 w-12 h-1 bg-gradient-to-r from-accent to-primary transform -translate-y-1/2" />
        
        <h3 className="font-playfair text-xl font-bold text-card-foreground mb-3 leading-tight min-h-[3.5rem] group-hover:gradient-text transition-all duration-300">
          {title}
        </h3>
        
        <p className="font-crimson text-sm text-card-foreground/70 mb-4 leading-relaxed line-clamp-3">
          {description}
        </p>
        
        <div className="border-t border-border pt-4 mt-4">
          <div className="flex items-center justify-between mb-4">
            <span className="font-playfair text-2xl font-bold text-burgundy group-hover:text-primary transition-colors duration-300">
              {price}
            </span>
          </div>
          
          <Button 
            asChild
            className="w-full bg-burgundy hover:bg-primary text-primary-foreground font-crimson text-base py-6 shadow-md hover:shadow-xl transition-all duration-500 group-hover:animate-glow"
          >
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              Quero me inscrever
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
