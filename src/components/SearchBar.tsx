import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchBarProps {
  onSearch: (query: string, city: string) => void;
  placeholder?: string;
  initialCity?: string;
}

const CITIES = [
  "София",
  "Пловдив",
  "Варна",
  "Бургас",
  "Русе",
  "Стара Загора",
  "Плевен",
  "Сливен",
];

export const SearchBar = ({ 
  onSearch, 
  placeholder = "Търсете продукт...",
  initialCity = "София" 
}: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState(initialCity);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim(), city);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={placeholder}
              className="pl-12 pr-4 py-6 text-lg border-2 focus:border-primary transition-colors"
            />
          </div>
          <Select value={city} onValueChange={setCity}>
            <SelectTrigger className="w-[180px] py-6 text-lg border-2">
              <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
              <SelectValue placeholder="Изберете град" />
            </SelectTrigger>
            <SelectContent>
              {CITIES.map((cityName) => (
                <SelectItem key={cityName} value={cityName}>
                  {cityName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button 
            type="submit" 
            size="lg"
            className="px-8 py-6 text-lg font-semibold"
          >
            Търси
          </Button>
        </div>
      </div>
    </form>
  );
};
