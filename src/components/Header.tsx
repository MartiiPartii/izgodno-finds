import { ShoppingBasket } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-hero p-2 rounded-lg">
            <ShoppingBasket className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Izgodno.org
          </span>
        </div>
        
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
                Начало
              </a>
            </li>
            <li>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
                За нас
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
