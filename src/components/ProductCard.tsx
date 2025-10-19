import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Store } from "lucide-react";

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
  
  return (
    <Card className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground mb-2 truncate">
              {product.name}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Store className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm truncate">{product.store}</span>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            {hasDiscount && (
              <span className="text-sm text-muted-foreground line-through">
                {product.price.toFixed(2)} лв
              </span>
            )}
            <Badge 
              className={`${hasDiscount ? 'bg-destructive' : 'bg-primary'} text-white text-lg font-bold px-4 py-2`}
            >
              {displayPrice.toFixed(2)} лв
            </Badge>
            {hasDiscount && (
              <span className="text-xs font-semibold text-destructive">
                -{(((product.price - product.reducedPrice!) / product.price) * 100).toFixed(0)}% отстъпка
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
