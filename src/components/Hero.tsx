
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#6351ce]/10 to-[#6351ce]/5 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#6351ce]">
              Advanced Genomics Solutions for Your Research
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover our comprehensive range of genomics products and services designed to accelerate your research and innovation.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg"
                className="bg-[#6351ce] hover:bg-[#6351ce]/90"
              >
                Explore Products
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-[#6351ce] text-[#6351ce] hover:bg-[#6351ce]/10"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#6351ce]/20 to-[#6351ce]/10 flex items-center justify-center">
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
