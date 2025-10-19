import { Card } from "@/components/ui/card";
import { Store, TrendingDown, Sparkles } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  store: string;
  price: number;
  reducedPrice?: number;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const hasDiscount = product.reducedPrice !== undefined;
  const displayPrice = hasDiscount ? product.reducedPrice! : product.price;
  const discountPercent = hasDiscount 
    ? Math.round(((product.price - product.reducedPrice!) / product.price) * 100)
    : 0;
  
  return (
    <Card className="group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2">
      {/* Discount Badge */}
      {hasDiscount && (
        <div className="absolute top-3 right-3 z-10">
          <div className="bg-gradient-discount text-white px-3 py-1.5 rounded-full shadow-discount-glow flex items-center gap-1 animate-pulse-glow">
            <TrendingDown className="h-3.5 w-3.5" />
            <span className="text-xs font-bold">-{discountPercent}%</span>
          </div>
        </div>
      )}
      
      {/* Best Price Indicator */}
      {!hasDiscount && (
        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-gradient-primary text-white px-3 py-1.5 rounded-full shadow-glow flex items-center gap-1">
            <Sparkles className="h-3.5 w-3.5" />
            <span className="text-xs font-bold">Редовна цена</span>
          </div>
        </div>
      )}
      
      {/* Card Content */}
      <div className="p-5 bg-gradient-card">
        {/* Product Name */}
        <div className="mb-4 min-h-[4rem] flex items-center">
          <h3 className="text-base font-bold line-clamp-3 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </div>
        
        {/* Store Badge */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1.5 rounded-lg border border-secondary/20">
            <Store className="h-4 w-4" />
            <span className="text-sm font-semibold">{product.store}</span>
          </div>
        </div>
        
        {/* Price Section */}
        <div className="flex items-end justify-between pt-3 border-t-2 border-dashed border-border">
          <div className="flex flex-col gap-1">
            {hasDiscount && (
              <span className="text-sm text-muted-foreground line-through">
                {product.price.toFixed(2)} лв
              </span>
            )}
            <div className={`text-3xl font-black ${hasDiscount ? 'bg-gradient-discount' : 'bg-gradient-primary'} bg-clip-text text-transparent`}>
              {displayPrice.toFixed(2)}
            </div>
          </div>
          <div className="text-xl font-bold text-muted-foreground">
            лв
          </div>
        </div>
        
        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
    </Card>
  );
};
