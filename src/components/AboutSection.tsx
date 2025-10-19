import { ShoppingCart, TrendingDown, Search } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: Search,
      title: "Лесно търсене",
      description: "Намерете любимите си продукти с едно търсене в нашата обширна база данни"
    },
    {
      icon: TrendingDown,
      title: "Най-ниски цени",
      description: "Сравнете цени от различни магазини и изберете най-изгодната оферта"
    },
    {
      icon: ShoppingCart,
      title: "Спестете време",
      description: "Не е нужно да обикаляте магазини - всичко е на едно място"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            За Izgodno.org
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Izgodno.org е платформа, която обединява цените на хранителни продукти от различни магазини 
            в България. Нашата мисия е да помогнем на потребителите да вземат информирани решения и да 
            спестят пари при ежедневните си покупки.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground">
            Данните се актуализират редовно от{" "}
            <a 
              href="https://kolkostruva.bg/opendata" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              KolkoStruva.bg
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
