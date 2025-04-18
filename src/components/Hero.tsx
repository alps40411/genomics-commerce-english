
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary/10 to-primary/5 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Advanced Genomics Solutions for Your Research
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover our comprehensive range of genomics products and services designed to accelerate your research and innovation.
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                Explore Products
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
              <img
                src="/placeholder.svg"
                alt="Genomics Research"
                className="w-3/4 h-3/4 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
