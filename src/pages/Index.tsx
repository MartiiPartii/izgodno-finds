import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";

const Index = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string, city: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}&city=${encodeURIComponent(city)}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <div id="home">
          <Hero onSearch={handleSearch} />
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
