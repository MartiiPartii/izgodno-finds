import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProductResults } from "@/components/ProductResults";
import { Product } from "@/components/ProductCard";

// Mock data - will be replaced with real data from kolkostruva.bg API
const mockProducts: Product[] = [
  { id: "1", name: "Мляко Краве Пълномаслено 3.6% 1л", store: "Kaufland", price: 2.49 },
  { id: "2", name: "Мляко Краве Пълномаслено 3.6% 1л", store: "Lidl", price: 2.39 },
  { id: "3", name: "Мляко Краве Пълномаслено 3.6% 1л", store: "Billa", price: 2.59 },
  { id: "4", name: "Мляко Краве Обезмаслено 1л", store: "Kaufland", price: 2.29 },
  { id: "5", name: "Мляко Краве Обезмаслено 1л", store: "Fantastico", price: 2.45 },
  { id: "6", name: "Хляб Добруджански 600г", store: "Lidl", price: 1.19 },
  { id: "7", name: "Хляб Добруджански 600г", store: "Kaufland", price: 1.29 },
  { id: "8", name: "Кафе Nescafe Classic 200г", store: "Billa", price: 12.99 },
  { id: "9", name: "Кафе Nescafe Classic 200г", store: "Kaufland", price: 11.99 },
  { id: "10", name: "Кафе Nescafe Classic 200г", store: "Metro", price: 11.49 },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    // Simple search filter - will be replaced with API call
    const results = mockProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    
    setFilteredProducts(results);
    
    // Scroll to results
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <div id="home">
          <Hero onSearch={handleSearch} />
        </div>

        <div id="results">
          <ProductResults products={filteredProducts} searchQuery={searchQuery} />
        </div>

        <div id="about">
          <AboutSection />
        </div>
      </main>

      <footer className="bg-muted/30 border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Izgodno.org. Всички права запазени.</p>
          <p className="mt-2 text-sm">
            Данни от{" "}
            <a 
              href="https://kolkostruva.bg/opendata" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              KolkoStruva.bg Open Data
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
