import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { ProductCard, Product } from "@/components/ProductCard";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data - will be replaced with real data from kolkostruva.bg API
const mockProducts: Product[] = [
  { id: "1", name: "Мляко Краве Пълномаслено 3.6% 1л", store: "Kaufland", price: 2.49 },
  { id: "2", name: "Мляко Краве Пълномаслено 3.6% 1л", store: "Lidl", price: 2.39, reducedPrice: 1.99 },
  { id: "3", name: "Мляко Краве Пълномаслено 3.6% 1л", store: "Billa", price: 2.59 },
  { id: "4", name: "Мляко Краве Обезмаслено 1л", store: "Kaufland", price: 2.29 },
  { id: "5", name: "Мляко Краве Обезмаслено 1л", store: "Fantastico", price: 2.45, reducedPrice: 2.19 },
  { id: "6", name: "Хляб Добруджански 600г", store: "Lidl", price: 1.19 },
  { id: "7", name: "Хляб Добруджански 600г", store: "Kaufland", price: 1.29, reducedPrice: 0.99 },
  { id: "8", name: "Кафе Nescafe Classic 200г", store: "Billa", price: 12.99, reducedPrice: 9.99 },
  { id: "9", name: "Кафе Nescafe Classic 200г", store: "Kaufland", price: 11.99 },
  { id: "10", name: "Кафе Nescafe Classic 200г", store: "Metro", price: 11.49 },
  { id: "11", name: "Масло Слънчогледово 1л", store: "Kaufland", price: 3.99 },
  { id: "12", name: "Масло Слънчогледово 1л", store: "Lidl", price: 3.79, reducedPrice: 3.29 },
  { id: "13", name: "Захар Бяла 1кг", store: "Billa", price: 2.19 },
  { id: "14", name: "Захар Бяла 1кг", store: "Fantastico", price: 2.29 },
  { id: "15", name: "Ориз Бял 1кг", store: "Metro", price: 2.99, reducedPrice: 2.49 },
  { id: "16", name: "Чай Зелен 20 пакетчета", store: "Kaufland", price: 3.49 },
  { id: "17", name: "Чай Черен English Breakfast 25 пакетчета", store: "Lidl", price: 2.99, reducedPrice: 2.49 },
  { id: "18", name: "Чай Билков Лайка 20 пакетчета", store: "Billa", price: 3.29 },
  { id: "19", name: "Чай Плодов Горски плодове 20 пакетчета", store: "Fantastico", price: 3.19, reducedPrice: 2.69 },
  { id: "20", name: "Чай Зелен с Жасмин 25 пакетчета", store: "Metro", price: 4.29 },
  { id: "21", name: "Чай Ройбос 15 пакетчета", store: "Kaufland", price: 4.99, reducedPrice: 3.99 },
  { id: "22", name: "Чай Мента 20 пакетчета", store: "Lidl", price: 2.79 },
];

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("q") || "";
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (query) {
      // Simple search filter - will be replaced with API call
      const results = mockProducts.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
    }
  }, [query]);

  const handleSearch = (newQuery: string) => {
    setSearchParams({ q: newQuery });
  };

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Search Header Section */}
        <section className="bg-gradient-hero py-12">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              onClick={handleBackHome}
              className="mb-6 text-white hover:bg-white/20 hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Обратно към началото
            </Button>
            
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-3xl mx-auto">
              <SearchBar 
                onSearch={handleSearch} 
                placeholder="Търсете продукт..."
              />
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {!query ? (
              <div className="text-center max-w-md mx-auto">
                <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Въведете търсене</h3>
                <p className="text-muted-foreground">
                  Използвайте търсачката по-горе, за да намерите продукти
                </p>
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="text-center max-w-md mx-auto">
                <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Няма намерени резултати</h3>
                <p className="text-muted-foreground">
                  Не намерихме продукти, съответстващи на "{query}". Опитайте с друго търсене.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2">
                    Резултати за "{query}"
                  </h2>
                  <p className="text-muted-foreground">
                    Намерени {filteredProducts.length} {filteredProducts.length === 1 ? 'продукт' : 'продукта'}
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-muted/30 border-t py-8 mt-12">
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

export default SearchResults;
