import { SearchBar } from "./SearchBar";
import heroImage from "@/assets/hero-groceries.jpg";

interface HeroProps {
  onSearch: (query: string, city: string) => void;
}

export const Hero = ({ onSearch }: HeroProps) => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Fresh groceries" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Сравни цени, спести пари
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-12 max-w-3xl mx-auto drop-shadow">
          Открийте най-изгодните цени на хранителни продукти от различни магазини в България
        </p>
        
        <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-3xl mx-auto">
          <SearchBar onSearch={onSearch} placeholder="Въведете име на продукт (например: мляко, хляб, кафе...)" />
        </div>
      </div>
    </section>
  );
};
