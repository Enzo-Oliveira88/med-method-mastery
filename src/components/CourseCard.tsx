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
    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkerBrown/80 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="font-playfair text-xl font-bold text-card-foreground mb-3 leading-tight min-h-[3.5rem]">
          {title}
        </h3>
        
        <p className="font-crimson text-sm text-card-foreground/70 mb-4 leading-relaxed line-clamp-3">
          {description}
        </p>
        
        <div className="border-t border-border pt-4 mt-4">
          <div className="flex items-center justify-between mb-4">
            <span className="font-playfair text-2xl font-bold text-burgundy">
              {price}
            </span>
          </div>
          
          <Button 
            asChild
            className="w-full bg-burgundy hover:bg-burgundy/90 text-primary-foreground font-crimson text-base py-6 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              Quero me inscrever
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
