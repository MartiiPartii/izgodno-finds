import { ProductCard, Product } from "./ProductCard";
import { AlertCircle } from "lucide-react";

interface ProductResultsProps {
  products: Product[];
  searchQuery: string;
}

export const ProductResults = ({ products, searchQuery }: ProductResultsProps) => {
  if (!searchQuery) {
    return null;
  }

  if (products.length === 0) {
    return (
      <section className="py-16 container mx-auto px-4">
        <div className="text-center max-w-md mx-auto">
          <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Няма намерени резултати</h3>
          <p className="text-muted-foreground">
            Не намерихме продукти, съответстващи на "{searchQuery}". Опитайте с друго търсене.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Резултати за "{searchQuery}"
          </h2>
          <p className="text-muted-foreground">
            Намерени {products.length} {products.length === 1 ? 'продукт' : 'продукта'}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
